// Configuration object managed by Element SDK
    const defaultConfig = {
      game_title: "Paws to Think",
      correct_feedback: "Great job!",
      incorrect_feedback: "Try again!",
      primary_color: "#FF6B6B",
      secondary_color: "#4ECDC4",
      background_color: "#FFF4E6",
      text_color: "#2C3E50",
      surface_color: "#FFFFFF",
      font_family: "Comic Sans MS",
      font_size: 16
    };

    // Game state - manages all game-related data
    const gameState = {
      correctAnswers: 0,
      incorrectAnswers: 0,
      currentNumber: null,
      choices: [],
      selectedNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // Default numbers to teach
      selectedLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], // Default letters to teach
      askedNumbers: [], // Track which numbers have been asked in current session
      choicesCount: 2, // Default number of choices per question
      allowRetry: false, // Allow students to try again on incorrect answers
      settingsClickCount: 0, // Track clicks for triple-click unlock
      settingsClickTimeout: null, // Timeout for resetting click count
      results: {}, // Track correct/incorrect for each number
      studentName: '', // Student name
      lessonMode: 'numbers' // 'numbers' or 'letters'
    };

    // Load game state from localStorage
    function loadGameState() {
      const savedState = localStorage.getItem('numberGameState');
      if (savedState) {
        const parsed = JSON.parse(savedState);
        gameState.correctAnswers = parsed.correctAnswers || 0;
        gameState.incorrectAnswers = parsed.incorrectAnswers || 0;
        gameState.selectedNumbers = parsed.selectedNumbers || gameState.selectedNumbers;
        gameState.selectedLetters = parsed.selectedLetters || gameState.selectedLetters;
        gameState.askedNumbers = parsed.askedNumbers || [];
        gameState.choicesCount = parsed.choicesCount || gameState.choicesCount;
        gameState.passcode = parsed.passcode || gameState.passcode;
        gameState.allowRetry = parsed.allowRetry !== undefined ? parsed.allowRetry : true;
        gameState.results = parsed.results || {};
        gameState.studentName = parsed.studentName || '';
        gameState.lessonMode = parsed.lessonMode || 'numbers';
      }
      updateStats();
    }

    // Save game state to localStorage
    function saveGameState() {
      const stateToSave = {
        correctAnswers: gameState.correctAnswers,
        incorrectAnswers: gameState.incorrectAnswers,
        selectedNumbers: gameState.selectedNumbers,
        selectedLetters: gameState.selectedLetters,
        askedNumbers: gameState.askedNumbers,
        choicesCount: gameState.choicesCount,
        allowRetry: gameState.allowRetry,
        results: gameState.results,
        studentName: gameState.studentName,
        lessonMode: gameState.lessonMode
      };
      localStorage.setItem('numberGameState', JSON.stringify(stateToSave));
    }

    // Update statistics display
    function updateStats() {
      document.getElementById('correctCount').textContent = gameState.correctAnswers;
      document.getElementById('incorrectCount').textContent = gameState.incorrectAnswers;
      const totalItems = gameState.lessonMode === 'numbers' ? gameState.selectedNumbers.length : gameState.selectedLetters.length;
      document.getElementById('progressCount').textContent = 
        `${gameState.askedNumbers.length}/${totalItems}`;
    }

    // Generate a random item (number or letter) from the selected items that hasn't been asked yet
    function getRandomNumber() {
      const selectedItems = gameState.lessonMode === 'numbers' ? gameState.selectedNumbers : gameState.selectedLetters;
      
      // Get items that haven't been asked yet
      const unaskedItems = selectedItems.filter(
        item => !gameState.askedNumbers.includes(item)
      );
      
      // If all items have been asked, return null to end the game
      if (unaskedItems.length === 0) {
        return null;
      }
      
      return unaskedItems[Math.floor(Math.random() * unaskedItems.length)];
    }

    // Generate array of unique random choices including the correct answer
    // All choices must come from the selected items being taught
    function generateChoices(correctAnswer, count) {
      const choices = [correctAnswer];
      const selectedItems = gameState.lessonMode === 'numbers' ? gameState.selectedNumbers : gameState.selectedLetters;
      
      // Create a copy of selected items without the correct answer
      const availableItems = selectedItems.filter(item => item !== correctAnswer);
      
      // If we don't have enough items selected, limit count to what we have
      const maxChoices = Math.min(count, selectedItems.length);
      
      // Add random choices from selected items until we reach the desired count
      while (choices.length < maxChoices && availableItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableItems.length);
        choices.push(availableItems[randomIndex]);
        availableItems.splice(randomIndex, 1);
      }
      
      // Shuffle the choices array
      return choices.sort(() => Math.random() - 0.5);
    }

    // Speak the number using Web Speech API
    function speakNumber(number) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      // For letters, convert to lowercase to prevent "capital" announcement
      let textToSpeak = number.toString();
      if (gameState.lessonMode === 'letters') {
        textToSpeak = textToSpeak.toLowerCase();
      }
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.8; // Slightly slower for clarity
      utterance.pitch = 1.2; // Slightly higher pitch for children
      utterance.volume = 1;
      utterance.lang = 'en-US';
      
      const playButton = document.getElementById('playButton');
      
      utterance.onstart = () => {
        playButton.classList.add('game__play-button--playing');
      };
      
      utterance.onend = () => {
        playButton.classList.remove('game__play-button--playing');
      };
      
      utterance.onerror = () => {
        playButton.classList.remove('game__play-button--playing');
      };
      
      window.speechSynthesis.speak(utterance);
    }

    // Generate a new question
    function generateQuestion() {
      const selectedItems = gameState.lessonMode === 'numbers' ? gameState.selectedNumbers : gameState.selectedLetters;
      if (selectedItems.length === 0) {
        // If no items are selected, show a message
        const itemType = gameState.lessonMode === 'numbers' ? 'numbers' : 'letters';
        document.getElementById('choicesContainer').innerHTML = 
          `<p style="text-align: center; color: var(--color-text);">Please select ${itemType} in teacher settings!</p>`;
        return;
      }

      gameState.currentNumber = getRandomNumber();
      
      // Check if all numbers have been completed
      if (gameState.currentNumber === null) {
        showGameComplete();
        return;
      }
      
      gameState.choices = generateChoices(gameState.currentNumber, gameState.choicesCount);
      
      // Update UI
      document.getElementById('gameComplete').style.display = 'none';
      document.querySelector('.game__question').style.display = 'block';
      renderChoices();
      
      // Automatically play the number when a new question is generated
      setTimeout(() => speakNumber(gameState.currentNumber), 300);
    }

    // Show game completion screen
    function showGameComplete() {
      const completeTitle = document.querySelector('.game__complete-title');
      const completeMessage = document.querySelector('.game__complete-message');
      
      // Calculate percentage correct
      const totalAttempts = gameState.correctAnswers + gameState.incorrectAnswers;
      const percentageCorrect = totalAttempts > 0 
        ? Math.round((gameState.correctAnswers / totalAttempts) * 100) 
        : 0;
      
      // Determine encouragement message based on percentage
      let encouragement = 'Nice try!';
      if (percentageCorrect > 75) {
        encouragement = 'Awesome!';
      } else if (percentageCorrect >= 51) {
        encouragement = 'Good job!';
      }
      
      completeTitle.textContent = encouragement;
      
      if (gameState.studentName) {
        completeMessage.textContent = `${gameState.studentName}, you got ${percentageCorrect}% correct!`;
      } else {
        completeMessage.textContent = `You got ${percentageCorrect}% correct!`;
      }
      
      document.getElementById('gameComplete').style.display = 'block';
      document.getElementById('choicesContainer').innerHTML = '';
      document.querySelector('.game__question').style.display = 'none';
    }

    // Restart the game with the same settings
    function restartGame() {
      gameState.askedNumbers = [];
      gameState.correctAnswers = 0;
      gameState.incorrectAnswers = 0;
      gameState.results = {};
      updateStats();
      saveGameState();
      generateQuestion();
    }

    // Show results modal
    function showResults() {
      const modal = document.getElementById('resultsModal');
      const grid = document.getElementById('resultsGrid');
      grid.innerHTML = '';

      // Get all selected items and display them
      const selectedItems = gameState.lessonMode === 'numbers' ? gameState.selectedNumbers : gameState.selectedLetters;
      selectedItems.forEach(num => {
        const result = gameState.results[num];
        const numberDiv = document.createElement('div');
        numberDiv.className = 'results-modal__number';

        const numberValue = document.createElement('div');
        numberValue.className = 'results-modal__number-value';
        numberValue.textContent = num;

        const icon = document.createElement('div');
        icon.className = 'results-modal__number-icon';

        if (!result || (result.correct === 0 && result.incorrect === 0)) {
          // Number wasn't attempted
          icon.textContent = '—';
          numberDiv.style.opacity = '0.5';
        } else if (result.correct > 0 && result.incorrect === 0) {
          // All correct
          icon.textContent = '✓';
          numberDiv.classList.add('results-modal__number--correct');
        } else if (result.correct === 0 && result.incorrect > 0) {
          // All incorrect
          icon.textContent = '✗';
          numberDiv.classList.add('results-modal__number--incorrect');
        } else {
          // Mixed results
          icon.textContent = `${result.correct}/${result.correct + result.incorrect}`;
          numberDiv.classList.add('results-modal__number--mixed');
        }

        numberDiv.appendChild(numberValue);
        numberDiv.appendChild(icon);
        grid.appendChild(numberDiv);
      });

      modal.classList.add('results-modal--show');
    }

    // Close results modal
    function closeResults() {
      document.getElementById('resultsModal').classList.remove('results-modal--show');
    }

    // Render choice buttons
    function renderChoices() {
      const container = document.getElementById('choicesContainer');
      container.innerHTML = '';
      
      gameState.choices.forEach(number => {
        const button = document.createElement('button');
        button.className = 'game__choice';
        button.textContent = number;
        button.addEventListener('click', () => handleChoice(number, button));
        container.appendChild(button);
      });
    }

    // Handle user's choice
    function handleChoice(chosenNumber, button) {
      const isCorrect = chosenNumber === gameState.currentNumber;
      
      // Disable all buttons temporarily
      const allButtons = document.querySelectorAll('.game__choice');
      allButtons.forEach(btn => btn.disabled = true);
      
      if (isCorrect) {
        button.classList.add('game__choice--correct');
        gameState.correctAnswers++;
        
        // Track result for this number
        if (!gameState.results[gameState.currentNumber]) {
          gameState.results[gameState.currentNumber] = { correct: 0, incorrect: 0 };
        }
        gameState.results[gameState.currentNumber].correct++;
        
        // Mark this number as asked (only on correct answer)
        if (!gameState.askedNumbers.includes(gameState.currentNumber)) {
          gameState.askedNumbers.push(gameState.currentNumber);
        }
        
        showFeedback(true);
        
        // Generate new question after delay
        setTimeout(() => {
          generateQuestion();
        }, 1500);
      } else {
        button.classList.add('game__choice--incorrect');
        gameState.incorrectAnswers++;
        
        // Track result for this number
        if (!gameState.results[gameState.currentNumber]) {
          gameState.results[gameState.currentNumber] = { correct: 0, incorrect: 0 };
        }
        gameState.results[gameState.currentNumber].incorrect++;
        
        showFeedback(false);
        
        // Check if retry is allowed
        if (gameState.allowRetry) {
          // Re-enable buttons after animation
          setTimeout(() => {
            button.classList.remove('game__choice--incorrect');
            allButtons.forEach(btn => btn.disabled = false);
          }, 600);
        } else {
          // Move to next question after delay (no retry)
          // Mark as asked even if incorrect
          if (!gameState.askedNumbers.includes(gameState.currentNumber)) {
            gameState.askedNumbers.push(gameState.currentNumber);
          }
          
          setTimeout(() => {
            generateQuestion();
          }, 1500);
        }
      }
      
      updateStats();
      saveGameState();
    }

    // Show feedback overlay
    function showFeedback(isCorrect) {
      const feedback = document.getElementById('feedback');
      const emoji = document.getElementById('feedbackEmoji');
      const message = document.getElementById('feedbackMessage');
      
      // Get personalized name or use generic message
      const nameSuffix = gameState.studentName ? `, ${gameState.studentName}` : '';
      
      if (isCorrect) {
        emoji.textContent = '🎉';
        const correctMessages = [
          'Great job',
          'Excellent',
          'Well done',
          'Perfect',
          'Amazing'
        ];
        const randomMessage = correctMessages[Math.floor(Math.random() * correctMessages.length)];
        message.textContent = randomMessage + nameSuffix + '!';
        
        window.speechSynthesis.cancel();
        // Remove comma from speech to avoid delay
        const speechText = gameState.studentName ? randomMessage + ' ' + gameState.studentName + '!' : randomMessage + '!';
        const utterance = new SpeechSynthesisUtterance(speechText);
        utterance.rate = 0.9;
        utterance.pitch = 1.2;
        window.speechSynthesis.speak(utterance);
        
        feedback.classList.add('feedback--show');
        
        setTimeout(() => {
          feedback.classList.remove('feedback--show');
        }, 1000);
      } else {
        // Show different feedback based on whether retry is allowed
        if (gameState.allowRetry) {
          emoji.textContent = '💪';
          message.textContent = 'Try again' + nameSuffix + '!';
          window.speechSynthesis.cancel();
          // Remove comma from speech to avoid delay
          const speechText = gameState.studentName ? 'Try again ' + gameState.studentName + '!' : 'Try again!';
          const utterance = new SpeechSynthesisUtterance(speechText);
          utterance.rate = 0.9;
          utterance.pitch = 1.2;
          
          // After "Try again" speech, replay the question
          utterance.onend = () => {
            setTimeout(() => {
              if (gameState.currentNumber !== null) {
                speakNumber(gameState.currentNumber);
              }
            }, 500);
          };
          
          window.speechSynthesis.speak(utterance);
          
          feedback.classList.add('feedback--show');
          
          setTimeout(() => {
            feedback.classList.remove('feedback--show');
          }, 1000);
        }
        // If retry is off, no feedback popup is shown for incorrect answers
      }
    }

    // Backend modal functionality
    const backendModal = document.getElementById('backendModal');
    const settingsBtn = document.getElementById('settingsBtn');
    const closeModal = document.getElementById('closeModal');

    // Tab switching functionality
    document.querySelectorAll('.backend-modal__tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        // Remove active class from all tabs and contents
        document.querySelectorAll('.backend-modal__tab').forEach(t => t.classList.remove('backend-modal__tab--active'));
        document.querySelectorAll('.backend-modal__tab-content').forEach(c => c.classList.remove('backend-modal__tab-content--active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('backend-modal__tab--active');
        document.getElementById(tabName + 'Tab').classList.add('backend-modal__tab-content--active');
      });
    });

    // Triple-click to open modal
    settingsBtn.addEventListener('click', () => {
      // Increment click count
      gameState.settingsClickCount++;
      
      // Clear any existing timeout
      if (gameState.settingsClickTimeout) {
        clearTimeout(gameState.settingsClickTimeout);
      }
      
      // If clicked 3 times, open modal
      if (gameState.settingsClickCount >= 3) {
        // Reset temp variables to current saved state
        tempLessonMode = gameState.lessonMode;
        tempChoicesCount = gameState.choicesCount;
        
        // Always show Personalize tab first
        document.querySelectorAll('.backend-modal__tab').forEach(t => t.classList.remove('backend-modal__tab--active'));
        document.querySelectorAll('.backend-modal__tab-content').forEach(c => c.classList.remove('backend-modal__tab-content--active'));
        document.querySelector('.backend-modal__tab[data-tab="personalize"]').classList.add('backend-modal__tab--active');
        document.getElementById('personalizeTab').classList.add('backend-modal__tab-content--active');
        
        backendModal.classList.add('backend-modal--show');
        loadSettingsToUI();
        gameState.settingsClickCount = 0;
        return;
      }
      
      // Reset click count after 1 second of inactivity
      gameState.settingsClickTimeout = setTimeout(() => {
        gameState.settingsClickCount = 0;
      }, 1000);
    });

    // Close modal
    closeModal.addEventListener('click', () => {
      backendModal.classList.remove('backend-modal--show');
    });

    // Close modal when clicking outside
    backendModal.addEventListener('click', (e) => {
      if (e.target === backendModal) {
        backendModal.classList.remove('backend-modal--show');
      }
    });

    // Generate checkboxes based on lesson mode
    function generateLessonCheckboxes() {
      const checkboxContainer = document.getElementById('numbersCheckboxes');
      const itemsLabel = document.getElementById('lessonItemsLabel');
      checkboxContainer.innerHTML = '';
      
      if (gameState.lessonMode === 'numbers') {
        itemsLabel.textContent = 'Select Numbers to Teach:';
        // Generate number checkboxes (0-99)
        for (let i = 0; i < 100; i++) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `item_${i}`;
          checkbox.className = 'backend-modal__checkbox';
          checkbox.value = i;
          checkbox.checked = gameState.selectedNumbers.includes(i);
          
          const label = document.createElement('label');
          label.htmlFor = `item_${i}`;
          label.className = 'backend-modal__checkbox-label';
          label.textContent = i;
          
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
        }
      } else {
        itemsLabel.textContent = 'Select Letters to Teach:';
        // Generate letter checkboxes (A-Z)
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabet.forEach(letter => {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `item_${letter}`;
          checkbox.className = 'backend-modal__checkbox';
          checkbox.value = letter;
          checkbox.checked = gameState.selectedLetters.includes(letter);
          
          const label = document.createElement('label');
          label.htmlFor = `item_${letter}`;
          label.className = 'backend-modal__checkbox-label';
          label.textContent = letter;
          
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
        });
      }
    }
    
    // Load current settings into UI
    function loadSettingsToUI() {
      // Set student name
      document.getElementById('studentNameInput').value = gameState.studentName || '';
      
      // Set lesson mode from saved state
      const lessonModeSelect = document.getElementById('lessonModeSelect');
      lessonModeSelect.value = gameState.lessonMode;
      
      // Set choices count buttons
      const choiceButtons = document.querySelectorAll('.backend-modal__choice-button');
      choiceButtons.forEach(btn => {
        btn.classList.remove('backend-modal__choice-button--active');
        if (parseInt(btn.dataset.choices) === gameState.choicesCount) {
          btn.classList.add('backend-modal__choice-button--active');
        }
      });
      
      // Set allow retry toggle
      const retryToggle = document.getElementById('allowRetryToggle');
      const retryToggleSwitch = document.getElementById('retryToggleSwitch');
      retryToggle.checked = gameState.allowRetry;
      if (gameState.allowRetry) {
        retryToggleSwitch.classList.add('backend-modal__toggle-switch--active');
      } else {
        retryToggleSwitch.classList.remove('backend-modal__toggle-switch--active');
      }
      
      // Generate checkboxes based on saved lesson mode
      generateLessonCheckboxes();
    }

    // Handle lesson mode dropdown change (temporary, not saved until Save is clicked)
    let tempLessonMode = gameState.lessonMode;
    
    document.getElementById('lessonModeSelect').addEventListener('change', (e) => {
      tempLessonMode = e.target.value;
      
      // Update UI temporarily to show correct checkboxes
      const checkboxContainer = document.getElementById('numbersCheckboxes');
      const itemsLabel = document.getElementById('lessonItemsLabel');
      checkboxContainer.innerHTML = '';
      
      if (tempLessonMode === 'numbers') {
        itemsLabel.textContent = 'Select Numbers to Teach:';
        // Generate number checkboxes (0-99)
        for (let i = 0; i < 100; i++) {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `item_${i}`;
          checkbox.className = 'backend-modal__checkbox';
          checkbox.value = i;
          checkbox.checked = gameState.selectedNumbers.includes(i);
          
          const label = document.createElement('label');
          label.htmlFor = `item_${i}`;
          label.className = 'backend-modal__checkbox-label';
          label.textContent = i;
          
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
        }
      } else {
        itemsLabel.textContent = 'Select Letters to Teach:';
        // Generate letter checkboxes (A-Z)
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabet.forEach(letter => {
          const checkbox = document.createElement('input');
          checkbox.type = 'checkbox';
          checkbox.id = `item_${letter}`;
          checkbox.className = 'backend-modal__checkbox';
          checkbox.value = letter;
          checkbox.checked = gameState.selectedLetters.includes(letter);
          
          const label = document.createElement('label');
          label.htmlFor = `item_${letter}`;
          label.className = 'backend-modal__checkbox-label';
          label.textContent = letter;
          
          checkboxContainer.appendChild(checkbox);
          checkboxContainer.appendChild(label);
        });
      }
    });

    // Handle choice button clicks (temporary, not saved until Save is clicked)
    let tempChoicesCount = gameState.choicesCount;
    
    document.getElementById('choicesButtons').addEventListener('click', (e) => {
      if (e.target.classList.contains('backend-modal__choice-button')) {
        const choiceButtons = document.querySelectorAll('.backend-modal__choice-button');
        choiceButtons.forEach(btn => btn.classList.remove('backend-modal__choice-button--active'));
        e.target.classList.add('backend-modal__choice-button--active');
        tempChoicesCount = parseInt(e.target.dataset.choices);
      }
    });

    // Handle retry toggle switch clicks
    document.getElementById('retryToggleSwitch').addEventListener('click', () => {
      const toggle = document.getElementById('allowRetryToggle');
      const toggleSwitch = document.getElementById('retryToggleSwitch');
      toggle.checked = !toggle.checked;
      toggleSwitch.classList.toggle('backend-modal__toggle-switch--active');
    });

    // Select all numbers
    document.getElementById('selectAllBtn').addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('#numbersCheckboxes input[type="checkbox"]');
      checkboxes.forEach(cb => cb.checked = true);
    });

    // Deselect all numbers
    document.getElementById('deselectAllBtn').addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('#numbersCheckboxes input[type="checkbox"]');
      checkboxes.forEach(cb => cb.checked = false);
    });

    // Cancel button - close modal without saving and reset UI
    document.getElementById('cancelBtn').addEventListener('click', () => {
      // Reset temp variables to saved state
      tempLessonMode = gameState.lessonMode;
      tempChoicesCount = gameState.choicesCount;
      backendModal.classList.remove('backend-modal--show');
    });

    // Save settings
    document.getElementById('saveBtn').addEventListener('click', () => {
      // Get student name
      gameState.studentName = document.getElementById('studentNameInput').value.trim();
      
      // Get lesson mode from temp variable
      gameState.lessonMode = tempLessonMode;
      
      // Get selected items based on mode
      const checkboxes = document.querySelectorAll('#numbersCheckboxes input[type="checkbox"]:checked');
      if (gameState.lessonMode === 'numbers') {
        gameState.selectedNumbers = Array.from(checkboxes).map(cb => parseInt(cb.value));
      } else {
        gameState.selectedLetters = Array.from(checkboxes).map(cb => cb.value);
      }
      
      // Get choices count from temp variable
      gameState.choicesCount = tempChoicesCount;
      
      // Get allow retry setting
      gameState.allowRetry = document.getElementById('allowRetryToggle').checked;
      
      saveGameState();
      backendModal.classList.remove('backend-modal--show');
      
      // Restart game with new settings
      restartGame();
    });

    // Element SDK implementation
    async function onConfigChange(config) {
      const customFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = 'Arial, sans-serif';
      const baseSize = config.font_size || defaultConfig.font_size;

      // Update CSS custom properties
      document.documentElement.style.setProperty('--color-primary', config.primary_color || defaultConfig.primary_color);
      document.documentElement.style.setProperty('--color-secondary', config.secondary_color || defaultConfig.secondary_color);
      document.documentElement.style.setProperty('--color-background', config.background_color || defaultConfig.background_color);
      document.documentElement.style.setProperty('--color-text', config.text_color || defaultConfig.text_color);
      document.documentElement.style.setProperty('--color-surface', config.surface_color || defaultConfig.surface_color);
      document.documentElement.style.setProperty('--font-family', `${customFont}, ${baseFontStack}`);
      document.documentElement.style.setProperty('--font-size-base', `${baseSize}px`);

      // Update text content
      document.getElementById('gameTitle').textContent = config.game_title || defaultConfig.game_title;
    }

    // Initialize Element SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color || defaultConfig.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.surface_color || defaultConfig.surface_color,
              set: (value) => {
                config.surface_color = value;
                window.elementSdk.setConfig({ surface_color: value });
              }
            },
            {
              get: () => config.text_color || defaultConfig.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_color || defaultConfig.primary_color,
              set: (value) => {
                config.primary_color = value;
                window.elementSdk.setConfig({ primary_color: value });
              }
            },
            {
              get: () => config.secondary_color || defaultConfig.secondary_color,
              set: (value) => {
                config.secondary_color = value;
                window.elementSdk.setConfig({ secondary_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family || defaultConfig.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size || defaultConfig.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["game_title", config.game_title || defaultConfig.game_title],
          ["correct_feedback", config.correct_feedback || defaultConfig.correct_feedback],
          ["incorrect_feedback", config.incorrect_feedback || defaultConfig.incorrect_feedback]
        ])
      });
    }

    // View results button
    document.getElementById('viewResultsBtn').addEventListener('click', () => {
      showResults();
    });

    // Close results modal
    document.getElementById('closeResultsModal').addEventListener('click', () => {
      closeResults();
    });

    // Close results modal when clicking outside
    document.getElementById('resultsModal').addEventListener('click', (e) => {
      if (e.target.id === 'resultsModal') {
        closeResults();
      }
    });

    // Play button - speak the number again
    document.getElementById('playButton').addEventListener('click', () => {
      if (gameState.currentNumber !== null) {
        speakNumber(gameState.currentNumber);
      }
    });

    // Triple-click confetti emoji to restart game
    let confettiClickCount = 0;
    let confettiClickTimeout = null;
    
    document.getElementById('confettiEmoji').addEventListener('click', () => {
      confettiClickCount++;
      
      if (confettiClickTimeout) {
        clearTimeout(confettiClickTimeout);
      }
      
      if (confettiClickCount >= 3) {
        confettiClickCount = 0;
        restartGame();
        return;
      }
      
      confettiClickTimeout = setTimeout(() => {
        confettiClickCount = 0;
      }, 1000);
    });

    // Initialize game on load
    loadGameState();
    generateQuestion();