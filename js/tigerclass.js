// Default data
const defaultStudents = [
    'Harry', 'Ron', 'Hermione', 'Ginny', 'Neville', 'Draco', 'Fred', 'George'
];

const defaultFeelings = [
    { name: 'Happy', emoji: '😊', color: 'bg-yellow-400', textColor: 'text-white' },
    { name: 'Excited', emoji: '🤩', color: 'bg-fuchsia-400', textColor: 'text-white' },
    { name: 'Calm', emoji: '😌', color: 'bg-sky-400', textColor: 'text-white' },
    { name: 'Proud', emoji: '😎', color: 'bg-violet-400', textColor: 'text-white' },
    { name: 'Grateful', emoji: '🥰', color: 'bg-pink-400', textColor: 'text-white' },
    { name: 'Curious', emoji: '🤔', color: 'bg-emerald-400', textColor: 'text-white' },
    { name: 'Sad', emoji: '😢', color: 'bg-blue-400', textColor: 'text-white' },
    { name: 'Worried', emoji: '😰', color: 'bg-cyan-400', textColor: 'text-white' },
    { name: 'Frustrated', emoji: '😤', color: 'bg-red-400', textColor: 'text-white' },
    { name: 'Tired', emoji: '😴', color: 'bg-indigo-400', textColor: 'text-white' },
    { name: 'Confused', emoji: '😕', color: 'bg-orange-400', textColor: 'text-white' },
    { name: 'Nervous', emoji: '😬', color: 'bg-lime-400', textColor: 'text-white' }
];

const defaultSettings = {
    mainTitle: 'How does everyone feel?',
    subtitle: 'Click on your name to share your feelings!',
    feelingsTitle: 'How does {name} feel?',
    feelingsSubtitle: 'Choose the feeling that matches how you feel right now',
    backgroundColor: 'bg-orange-400'
};

const colorPalette = [
    // Light colors
    { name: 'Light Red', bg: 'bg-red-300', text: 'text-red-900', textWhite: 'text-white' },
    { name: 'Light Orange', bg: 'bg-orange-300', text: 'text-orange-900', textWhite: 'text-white' },
    { name: 'Light Amber', bg: 'bg-amber-300', text: 'text-amber-900', textWhite: 'text-white' },
    { name: 'Light Yellow', bg: 'bg-yellow-300', text: 'text-yellow-900', textWhite: 'text-white' },
    { name: 'Light Lime', bg: 'bg-lime-300', text: 'text-lime-900', textWhite: 'text-white' },
    { name: 'Light Green', bg: 'bg-green-300', text: 'text-green-900', textWhite: 'text-white' },
    { name: 'Light Emerald', bg: 'bg-emerald-300', text: 'text-emerald-900', textWhite: 'text-white' },
    { name: 'Light Teal', bg: 'bg-teal-300', text: 'text-teal-900', textWhite: 'text-white' },

    // Medium colors
    { name: 'Red', bg: 'bg-red-400', text: 'text-red-900', textWhite: 'text-white' },
    { name: 'Orange', bg: 'bg-orange-400', text: 'text-orange-900', textWhite: 'text-white' },
    { name: 'Amber', bg: 'bg-amber-400', text: 'text-amber-900', textWhite: 'text-white' },
    { name: 'Yellow', bg: 'bg-yellow-400', text: 'text-yellow-900', textWhite: 'text-white' },
    { name: 'Lime', bg: 'bg-lime-400', text: 'text-lime-900', textWhite: 'text-white' },
    { name: 'Green', bg: 'bg-green-400', text: 'text-green-900', textWhite: 'text-white' },
    { name: 'Emerald', bg: 'bg-emerald-400', text: 'text-emerald-900', textWhite: 'text-white' },
    { name: 'Teal', bg: 'bg-teal-400', text: 'text-teal-900', textWhite: 'text-white' },

    // More medium colors
    { name: 'Cyan', bg: 'bg-cyan-400', text: 'text-cyan-900', textWhite: 'text-white' },
    { name: 'Sky', bg: 'bg-sky-400', text: 'text-sky-900', textWhite: 'text-white' },
    { name: 'Blue', bg: 'bg-blue-400', text: 'text-blue-900', textWhite: 'text-white' },
    { name: 'Indigo', bg: 'bg-indigo-400', text: 'text-indigo-900', textWhite: 'text-white' },
    { name: 'Violet', bg: 'bg-violet-400', text: 'text-violet-900', textWhite: 'text-white' },
    { name: 'Purple', bg: 'bg-purple-400', text: 'text-purple-900', textWhite: 'text-white' },
    { name: 'Fuchsia', bg: 'bg-fuchsia-400', text: 'text-fuchsia-900', textWhite: 'text-white' },
    { name: 'Pink', bg: 'bg-pink-400', text: 'text-pink-900', textWhite: 'text-white' },

    // Dark colors
    { name: 'Dark Red', bg: 'bg-red-600', text: 'text-red-100', textWhite: 'text-white' },
    { name: 'Dark Orange', bg: 'bg-orange-600', text: 'text-orange-100', textWhite: 'text-white' },
    { name: 'Dark Amber', bg: 'bg-amber-600', text: 'text-amber-100', textWhite: 'text-white' },
    { name: 'Dark Yellow', bg: 'bg-yellow-600', text: 'text-yellow-100', textWhite: 'text-white' },
    { name: 'Dark Lime', bg: 'bg-lime-600', text: 'text-lime-100', textWhite: 'text-white' },
    { name: 'Dark Green', bg: 'bg-green-600', text: 'text-green-100', textWhite: 'text-white' },
    { name: 'Dark Emerald', bg: 'bg-emerald-600', text: 'text-emerald-100', textWhite: 'text-white' },
    { name: 'Dark Teal', bg: 'bg-teal-600', text: 'text-teal-100', textWhite: 'text-white' },

    // More dark colors
    { name: 'Dark Cyan', bg: 'bg-cyan-600', text: 'text-cyan-100', textWhite: 'text-white' },
    { name: 'Dark Sky', bg: 'bg-sky-600', text: 'text-sky-100', textWhite: 'text-white' },
    { name: 'Dark Blue', bg: 'bg-blue-600', text: 'text-blue-100', textWhite: 'text-white' },
    { name: 'Dark Indigo', bg: 'bg-indigo-600', text: 'text-indigo-100', textWhite: 'text-white' },
    { name: 'Dark Violet', bg: 'bg-violet-600', text: 'text-violet-100', textWhite: 'text-white' },
    { name: 'Dark Purple', bg: 'bg-purple-600', text: 'text-purple-100', textWhite: 'text-white' },
    { name: 'Dark Fuchsia', bg: 'bg-fuchsia-600', text: 'text-fuchsia-100', textWhite: 'text-white' },
    { name: 'Dark Pink', bg: 'bg-pink-600', text: 'text-pink-100', textWhite: 'text-white' },

    // Neutral colors
    { name: 'Light Gray', bg: 'bg-gray-300', text: 'text-gray-900', textWhite: 'text-white' },
    { name: 'Gray', bg: 'bg-gray-400', text: 'text-gray-900', textWhite: 'text-white' },
    { name: 'Dark Gray', bg: 'bg-gray-600', text: 'text-gray-100', textWhite: 'text-white' },
    { name: 'Slate', bg: 'bg-slate-500', text: 'text-slate-100', textWhite: 'text-white' }
];

let selectedFeelingColor = colorPalette[3]; // Default to yellow
let selectedBackgroundColor = colorPalette[13]; // Default to purple

// Password system
const defaultPassword = '1234';
let currentPassword = '';
let pendingAction = null;
let adminPassword = localStorage.getItem('feelingsDashboard_password') || defaultPassword;
let passwordEnabled = JSON.parse(localStorage.getItem('feelingsDashboard_passwordEnabled')) || false;

// Color mapping for text colors
const colorTextMap = {
    'bg-yellow-400': 'text-yellow-800',
    'bg-orange-400': 'text-orange-800',
    'bg-red-400': 'text-red-800',
    'bg-pink-400': 'text-pink-800',
    'bg-purple-400': 'text-purple-800',
    'bg-blue-400': 'text-blue-800',
    'bg-green-400': 'text-green-800',
    'bg-indigo-400': 'text-indigo-800',
    'bg-gray-400': 'text-gray-800'
};

// Load data from localStorage or use defaults
let students = JSON.parse(localStorage.getItem('feelingsDashboard_students')) || [...defaultStudents];
let feelings = JSON.parse(localStorage.getItem('feelingsDashboard_feelings')) || [...defaultFeelings];
let studentFeelings = JSON.parse(localStorage.getItem('feelingsDashboard_studentFeelings')) || {};
let settings = JSON.parse(localStorage.getItem('feelingsDashboard_settings')) || { ...defaultSettings };
let isLocked = JSON.parse(localStorage.getItem('feelingsDashboard_isLocked')) || false;

// Save data to localStorage
function saveData() {
    localStorage.setItem('feelingsDashboard_students', JSON.stringify(students));
    localStorage.setItem('feelingsDashboard_feelings', JSON.stringify(feelings));
    localStorage.setItem('feelingsDashboard_studentFeelings', JSON.stringify(studentFeelings));
    localStorage.setItem('feelingsDashboard_settings', JSON.stringify(settings));
    localStorage.setItem('feelingsDashboard_isLocked', JSON.stringify(isLocked));
    localStorage.setItem('feelingsDashboard_passwordEnabled', JSON.stringify(passwordEnabled));
}

function initializeDashboard() {
    // Update appearance
    updatePageAppearance();
    updateLockState();

    const grid = document.getElementById('studentsGrid');
    grid.innerHTML = '';

    students.forEach(student => {
        const feeling = studentFeelings[student];
        const card = document.createElement('div');
        card.className = 'feeling-card rounded-xl p-6 text-center cursor-pointer shadow-lg border-2';

        // Set background and border color based on feeling
        if (feeling) {
            if (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) {
                card.style.backgroundColor = feeling.color;
                card.style.borderColor = 'black';
                card.className += ' border-black';
            } else {
                card.className += ` ${feeling.color} border-black`;
            }
        } else {
            card.className += ' bg-slate-200 border-black';
        }

        card.onclick = () => {
            if (!isLocked) {
                openFeelings(student);
            }
        };

        const textColorClass = feeling && (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) ? '' : (feeling ? feeling.textColor : 'text-gray-500');
        const textColorStyle = feeling && (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) ? `color: ${feeling.textColor};` : '';

        card.innerHTML = `
                    <div class="text-5xl mb-3 emoji">${feeling ? feeling.emoji : '😊'}</div>
                    <h3 class="font-medium text-2xl mb-1 ${feeling ? textColorClass : 'text-gray-800'}" style="${feeling ? textColorStyle : ''}"">${student}</h3>
                    <p class="text-lg ${feeling ? textColorClass : 'text-transparent'}" style="${feeling ? textColorStyle : ''}">
                        ${feeling ? feeling.name : 'Tap to share'}
                    </p>
                `;

        grid.appendChild(card);
    });
}

function updatePageAppearance() {
    // Update background with custom color or fallback to class
    const mainBody = document.getElementById('mainBody');
    const feelingsModal = document.getElementById('feelingsModal');

    if (settings.backgroundColorHex) {
        mainBody.style.backgroundColor = settings.backgroundColorHex;
        mainBody.className = 'h-full p-6';
        feelingsModal.style.backgroundColor = settings.backgroundColorHex;
        feelingsModal.className = 'hidden';
    } else {
        mainBody.style.backgroundColor = '';
        mainBody.className = `h-full ${settings.backgroundColor} p-6`;
        feelingsModal.style.backgroundColor = '';
        feelingsModal.className = `hidden`;
    }

    // Update text content
    document.getElementById('mainTitle').textContent = settings.mainTitle;
    document.getElementById('subtitle').textContent = settings.subtitle;
    document.getElementById('feelingsSubtitle').textContent = settings.feelingsSubtitle;
}

function openFeelings(studentName) {
    document.getElementById('selectedStudent').textContent = studentName;
    document.getElementById('selectedStudent').dataset.student = studentName;

    // Update feelings title with student name
    const feelingsTitle = settings.feelingsTitle.replace('{name}', studentName);

    // Get the background color for the student name
    let nameBackgroundColor = 'bg-orange-400'; // default
    if (settings.backgroundColorHex) {
        nameBackgroundColor = settings.backgroundColor || 'bg-orange-400';
    } else {
        nameBackgroundColor = settings.backgroundColor;
    }

    document.getElementById('feelingsTitle').innerHTML = `${feelingsTitle.split(studentName)[0]}<span id="selectedStudent" class="inline-block bg-white text-black px-4 py-2 rounded-lg -rotate-1 text-6xl font-semibold">${studentName}</span>${feelingsTitle.split(studentName)[1] || ''}`;

    const feelingsGrid = document.getElementById('feelingsGrid');
    feelingsGrid.innerHTML = '';

    feelings.forEach(feeling => {
        const option = document.createElement('div');
        option.className = 'feeling-option rounded-xl p-6 text-center cursor-pointer shadow-lg border-2 border-black';

        // Set background color (handle both hex/hsl colors and Tailwind classes)
        if (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) {
            option.style.backgroundColor = feeling.color;
            option.style.color = feeling.textColor;
        } else {
            option.className += ` ${feeling.color}`;
        }

        option.onclick = () => selectFeeling(studentName, feeling);

        const textStyle = (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) ? `style="color: ${feeling.textColor};"` : '';
        const textClass = (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) ? '' : feeling.textColor;

        option.innerHTML = `
                    <div class="text-5xl mb-3 emoji">${feeling.emoji}</div>
                    <p class="font-medium text-2xl ${textClass}" ${textStyle}>${feeling.name}</p>
                `;

        feelingsGrid.appendChild(option);
    });

    // Show feelings modal
    document.getElementById('feelingsModal').classList.remove('hidden');

    // Update modal background color
    const modal = document.getElementById('feelingsModal');
    if (settings.backgroundColorHex) {
        modal.style.backgroundColor = settings.backgroundColorHex;
        modal.className = 'fixed inset-0 z-40';
    } else {
        modal.style.backgroundColor = '';
        modal.className = `fixed inset-0 ${settings.backgroundColor} z-40`;
    }
}

function selectFeeling(studentName, feeling) {
    studentFeelings[studentName] = feeling;
    saveData();
    closeFeelings();
    initializeDashboard();
}

function closeFeelings() {
    document.getElementById('feelingsModal').classList.add('hidden');
}

function resetStudent() {
    const selectedStudentElement = document.getElementById('selectedStudent');
    const studentName = selectedStudentElement ? selectedStudentElement.textContent.trim() : null;

    if (studentName) {
        delete studentFeelings[studentName];
        saveData();
        closeFeelings();
        initializeDashboard();

        // Show reset confirmation
        const message = document.createElement('div');
        message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
        message.innerHTML = `<i class="fas fa-redo"></i> ${studentName}'s feeling has been reset!`;

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}

// Lock functions
function toggleLock() {
    isLocked = !isLocked;
    saveData();
    updateLockState();

    // Show lock status message
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = isLocked ? '<i class="fas fa-lock"></i> Dashboard locked!' : '<i class="fas fa-unlock"></i> Dashboard unlocked!';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 2000);
}

function updateLockState() {
    const lockButton = document.getElementById('lockButton');
    const editButton = document.getElementById('editButton');
    const resetButton = document.getElementById('resetButton');
    const studentsGrid = document.getElementById('studentsGrid');

    if (isLocked) {
        lockButton.innerHTML = '<i class="fas fa-lock"></i> Unlock';
        editButton.style.opacity = '0.3';
        editButton.style.pointerEvents = 'none';
        resetButton.style.opacity = '0.3';
        resetButton.style.pointerEvents = 'none';
        studentsGrid.style.opacity = '0.7';
        studentsGrid.style.pointerEvents = 'none';
    } else {
        lockButton.innerHTML = '<i class="fas fa-unlock"></i> Lock';
        editButton.style.opacity = '1';
        editButton.style.pointerEvents = 'auto';
        resetButton.style.opacity = '1';
        resetButton.style.pointerEvents = 'auto';
        studentsGrid.style.opacity = '1';
        studentsGrid.style.pointerEvents = 'auto';
    }
}

function resetAllFeelings() {
    // Clear all student feelings
    studentFeelings = {};
    saveData();

    // Regenerate the entire dashboard to reflect changes
    initializeDashboard();

    // Show reset confirmation
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = '<i class="fas fa-undo"></i> All student feelings have been reset to default!';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Settings functions
function openSettings() {
    updateSettingsLists();
    populateAppearanceInputs();
    updateSettingsColors();
    switchTab('students'); // Default to students tab
    document.getElementById('settingsModal').classList.remove('hidden');
    document.getElementById('settingsModal').classList.add('flex');
}

function closeSettings() {
    document.getElementById('settingsModal').classList.add('hidden');
    document.getElementById('settingsModal').classList.remove('flex');
}

function switchTab(tabName) {
    // Get current background color for matching
    const currentBgColor = selectedBackgroundColor || colorPalette.find(color => color.bg === settings.backgroundColor) || colorPalette[1];
    const activeBorderColor = currentBgColor.bg.replace('bg-', 'border-');
    const activeBgColor = currentBgColor.bg.replace('bg-', 'bg-').replace('-400', '-50').replace('-300', '-50').replace('-600', '-50');

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    // Remove active styles from all tabs
    document.querySelectorAll('#studentsTab, #feelingsTab, #appearanceTab, #securityTab, #backupTab').forEach(tab => {
        tab.className = 'px-6 py-3 font-semibold text-gray-500 hover:text-gray-700 border-b-2 border-transparent';
    });

    // Show selected tab content and apply active styles
    const activeTextColor = currentBgColor.bg.replace('bg-', 'text-').replace('-400', '-600').replace('-300', '-600').replace('-600', '-600');

    if (tabName === 'students') {
        document.getElementById('studentsTabContent').classList.remove('hidden');
        document.getElementById('studentsTab').className = `px-6 py-3 font-semibold ${activeTextColor} border-b-2 ${activeBorderColor} ${activeBgColor}`;
    } else if (tabName === 'feelings') {
        document.getElementById('feelingsTabContent').classList.remove('hidden');
        document.getElementById('feelingsTab').className = `px-6 py-3 font-semibold ${activeTextColor} border-b-2 ${activeBorderColor} ${activeBgColor}`;
    } else if (tabName === 'appearance') {
        document.getElementById('appearanceTabContent').classList.remove('hidden');
        document.getElementById('appearanceTab').className = `px-6 py-3 font-semibold ${activeTextColor} border-b-2 ${activeBorderColor} ${activeBgColor}`;
    } else if (tabName === 'security') {
        document.getElementById('securityTabContent').classList.remove('hidden');
        document.getElementById('securityTab').className = `px-6 py-3 font-semibold ${activeTextColor} border-b-2 ${activeBorderColor} ${activeBgColor}`;
        updateSecurityDisplay();
    } else if (tabName === 'backup') {
        document.getElementById('backupTabContent').classList.remove('hidden');
        document.getElementById('backupTab').className = `px-6 py-3 font-semibold ${activeTextColor} border-b-2 ${activeBorderColor} ${activeBgColor}`;
    }
}

function populateAppearanceInputs() {
    document.getElementById('mainTitleInput').value = settings.mainTitle;
    document.getElementById('subtitleInput').value = settings.subtitle;
    document.getElementById('feelingsTitleInput').value = settings.feelingsTitle;
    document.getElementById('feelingsSubtitleInput').value = settings.feelingsSubtitle;

    // Set current background color
    const currentBgColor = colorPalette.find(color => color.bg === settings.backgroundColor);
    if (currentBgColor) {
        selectedBackgroundColor = currentBgColor;
    }

    // Update color buttons
    updateFeelingColorButton();
    updateBackgroundColorButton();
    updateTextColorPreview();

    // Add listeners for text inputs to update preview
    document.getElementById('newFeelingName').addEventListener('input', updateTextColorPreview);
    document.getElementById('newFeelingEmoji').addEventListener('input', updateTextColorPreview);

    // Add listeners for text color radio buttons
    document.querySelectorAll('input[name="textColor"]').forEach(radio => {
        radio.addEventListener('change', updateTextColorPreview);
    });
}

let currentColorPickerType = null;
let currentEditingFeelingIndex = null;

function openColorPicker(type) {
    currentColorPickerType = type;
    generateColorGrid();
    document.getElementById('colorPickerModal').classList.remove('hidden');
    document.getElementById('colorPickerModal').classList.add('flex');
}

function closeColorPicker() {
    document.getElementById('colorPickerModal').classList.add('hidden');
    document.getElementById('colorPickerModal').classList.remove('flex');
    currentColorPickerType = null;
}

function generateColorGrid() {
    const colorGrid = document.getElementById('colorGrid');
    colorGrid.innerHTML = '';

    colorPalette.forEach((color, index) => {
        const colorOption = document.createElement('div');
        colorOption.className = `${color.bg} w-12 h-12 rounded-lg cursor-pointer border-2 border-gray-300 hover:border-gray-600 transition-all flex items-center justify-center relative`;
        colorOption.title = color.name;
        colorOption.onclick = () => selectColor(color);

        // Add checkmark if this is the currently selected color
        if ((currentColorPickerType === 'feeling' && selectedFeelingColor.bg === color.bg) ||
            (currentColorPickerType === 'background' && selectedBackgroundColor.bg === color.bg)) {
            colorOption.innerHTML = '<span class="text-white text-xl font-semibold">✓</span>';
        }

        colorGrid.appendChild(colorOption);
    });
}

function selectColor(color) {
    if (currentColorPickerType === 'feeling') {
        selectedFeelingColor = color;
        updateFeelingColorButton();
        updateTextColorPreview();
    } else if (currentColorPickerType === 'background') {
        selectedBackgroundColor = color;
        updateBackgroundColorButton();
        updateBackgroundColor();
    }
    closeColorPicker();
}

function updateFeelingColorButton() {
    const button = document.getElementById('feelingColorButton');
    button.className = `w-full h-12 rounded-lg border-2 border-gray-300 ${selectedFeelingColor.bg} flex items-center justify-center font-semibold ${selectedFeelingColor.text} hover:opacity-80 transition-opacity`;
    button.textContent = 'Click to choose color';
}

function updateBackgroundColorButton() {
    const button = document.getElementById('backgroundColorButton');
    button.className = `w-full h-12 rounded-lg border-2 border-gray-300 ${selectedBackgroundColor.bg} flex items-center justify-center font-semibold ${selectedBackgroundColor.textWhite} hover:opacity-80 transition-opacity`;
    button.textContent = 'Background Color';
}

function updateTextColorPreview() {
    const textColorPreview = document.getElementById('textColorPreview');
    const previewEmoji = document.getElementById('previewEmoji');
    const previewText = document.getElementById('previewText');

    // Get selected text color
    const selectedTextColor = document.querySelector('input[name="textColor"]:checked').value;
    const textColorClass = selectedTextColor === 'white' ? selectedFeelingColor.textWhite : selectedFeelingColor.text;

    textColorPreview.className = `w-full h-20 rounded-lg border-2 border-gray-300 flex flex-col items-center justify-center font-semibold ${selectedFeelingColor.bg}`;

    // Update preview text with current input values
    const nameInput = document.getElementById('newFeelingName');
    const emojiInput = document.getElementById('newFeelingEmoji');

    previewEmoji.textContent = emojiInput.value.trim() || '😊';
    previewEmoji.className = 'text-2xl mb-1 emoji';
    previewText.textContent = nameInput.value.trim() || 'Happy';
    previewText.className = `font-medium ${textColorClass}`;
}

function updateBackgroundColor() {
    settings.backgroundColor = selectedBackgroundColor.bg;
    settings.backgroundColorHex = null;
    saveData();
    updatePageAppearance();
    updateSettingsColors();
}

function updateSettingsColors() {
    // Get current background color for matching
    const currentBgColor = selectedBackgroundColor || colorPalette.find(color => color.bg === settings.backgroundColor) || colorPalette[1];
    const buttonColor = currentBgColor.bg.replace('-400', '-500').replace('-300', '-500').replace('-600', '-500');
    const buttonHoverColor = currentBgColor.bg.replace('-400', '-600').replace('-300', '-600').replace('-600', '-700');
    const focusRingColor = currentBgColor.bg.replace('bg-', 'focus:ring-').replace('-400', '-500').replace('-300', '-500').replace('-600', '-500');

    // Update Add Student button
    const addStudentButton = document.getElementById('addStudentButton');
    if (addStudentButton) {
        addStudentButton.className = `${buttonColor} hover:${buttonHoverColor} text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2`;
    }

    // Update all input focus rings
    const inputs = document.querySelectorAll('#settingsModal input[type="text"], #settingsModal input[type="password"]');
    inputs.forEach(input => {
        input.className = input.className.replace(/focus:ring-\w+-\d+/g, focusRingColor);
    });
}



function updateAppearance() {
    settings.mainTitle = document.getElementById('mainTitleInput').value;
    settings.subtitle = document.getElementById('subtitleInput').value;
    settings.feelingsTitle = document.getElementById('feelingsTitleInput').value;
    settings.feelingsSubtitle = document.getElementById('feelingsSubtitleInput').value;

    saveData();
    updatePageAppearance();

    // Show success message
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = '<i class="fas fa-check"></i> Text updated successfully!';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

function updateSettingsLists() {
    // Update student count
    document.getElementById('studentCount').textContent = students.length;

    // Update students list
    const studentsList = document.getElementById('studentsList');
    studentsList.innerHTML = '';
    students.forEach((student, index) => {
        const item = document.createElement('div');
        const bgColor = index % 2 === 0 ? 'bg-white' : 'bg-gray-200';
        const hoverColor = index % 2 === 0 ? 'hover:bg-gray-100' : 'hover:bg-gray-300';
        item.className = `flex justify-between items-center ${bgColor} ${hoverColor} p-3 rounded-lg cursor-move transition-colors`;
        item.draggable = true;
        item.dataset.index = index;
        item.dataset.type = 'student';
        item.innerHTML = `
                    <div class="flex items-center gap-2">
                        <i class="fas fa-grip-vertical text-gray-400"></i>
                        <span class="font-medium">${student}</span>
                    </div>
                    <button onclick="removeStudent(${index})" class="text-red-500 hover:text-red-700 font-bold"><i class="fas fa-times"></i></button>
                `;

        // Add drag event listeners
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);

        studentsList.appendChild(item);
    });

    // Update feeling count
    document.getElementById('feelingCount').textContent = feelings.length;

    // Update feelings list
    const feelingsList = document.getElementById('feelingsList');
    feelingsList.innerHTML = '';
    feelings.forEach((feeling, index) => {
        const item = document.createElement('div');
        item.className = 'flex justify-between items-center p-3 rounded-lg cursor-move hover:opacity-90 transition-opacity';
        item.draggable = true;
        item.dataset.index = index;
        item.dataset.type = 'feeling';

        // Set background color (handle both hex/hsl colors and Tailwind classes)
        if (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) {
            item.style.backgroundColor = feeling.color;
            item.style.color = feeling.textColor;
        } else {
            item.className += ` ${feeling.color}`;
        }

        const textColorClass = (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) ? '' : feeling.textColor;
        const textColorStyle = (feeling.color.startsWith('#') || feeling.color.startsWith('hsl')) ? `color: ${feeling.textColor};` : '';

        item.innerHTML = `
                    <div class="flex items-center gap-2">
                        <i class="fas fa-grip-vertical text-gray-600"></i>
                        <span class="text-2xl emoji">${feeling.emoji}</span>
                        <span class="font-medium ${textColorClass}" style="${textColorStyle}">${feeling.name}</span>
                    </div>
                    <div class="flex gap-1">
                        <button onclick="event.stopPropagation(); editFeeling(${index})" class="text-blue-600 hover:text-blue-800 font-bold bg-white bg-opacity-50 rounded px-2 py-1"><i class="fas fa-edit"></i></button>
                    </div>
                `;

        // Add drag event listeners
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
        item.addEventListener('dragend', handleDragEnd);

        feelingsList.appendChild(item);
    });
}

function addStudent() {
    const input = document.getElementById('newStudentName');
    const name = input.value.trim();
    if (name && !students.includes(name)) {
        students.push(name);
        saveData();
        input.value = '';
        updateSettingsLists();
        initializeDashboard();
    }
}

function removeStudent(index) {
    const studentName = students[index];
    showConfirmation(
        `Remove "${studentName}"?`,
        `Are you sure you want to remove?`,
        '👤',
        'Remove Student',
        () => {
            students.splice(index, 1);
            delete studentFeelings[studentName];
            saveData();
            updateSettingsLists();
            initializeDashboard();

            // Show success message
            const message = document.createElement('div');
            message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
            message.innerHTML = `<i class="fas fa-check"></i> ${studentName} has been removed!`;

            document.body.appendChild(message);

            setTimeout(() => {
                message.remove();
            }, 3000);
        }
    );
}

function randomizeStudentOrder() {
    if (students.length <= 1) {
        // Show message if there's only one or no students
        const message = document.createElement('div');
        message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
        message.innerHTML = '<i class="fas fa-info-circle"></i> Need at least 2 students to randomize order!';

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
        return;
    }

    // Fisher-Yates shuffle algorithm
    for (let i = students.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
    }

    saveData();
    updateSettingsLists();
    initializeDashboard();

    // Show success message
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = '<i class="fas fa-random"></i> Student order randomized!';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

function addFeeling() {
    const nameInput = document.getElementById('newFeelingName');
    const emojiInput = document.getElementById('newFeelingEmoji');

    const name = nameInput.value.trim();
    const emoji = emojiInput.value.trim();

    if (name && emoji) {
        // Get selected text color
        const selectedTextColor = document.querySelector('input[name="textColor"]:checked').value;
        const textColorClass = selectedTextColor === 'white' ? selectedFeelingColor.textWhite : selectedFeelingColor.text;

        const newFeeling = {
            name: name,
            emoji: emoji,
            color: selectedFeelingColor.bg,
            textColor: textColorClass
        };

        if (currentEditingFeelingIndex !== null) {
            // Update existing feeling
            feelings[currentEditingFeelingIndex] = newFeeling;
            currentEditingFeelingIndex = null;
        } else {
            // Add new feeling
            feelings.push(newFeeling);
        }

        saveData();

        nameInput.value = '';
        emojiInput.value = '';

        // Reset text color to black (default)
        document.querySelector('input[name="textColor"][value="black"]').checked = true;

        // Hide delete button and reset button text
        document.getElementById('deleteFeelingButton').classList.add('hidden');
        document.getElementById('addFeelingButton').textContent = 'Add Feeling';
        document.getElementById('addFeelingButton').textContent = 'Add Feeling';

        updateSettingsLists();
        updateTextColorPreview();

        // Show success message
        const message = document.createElement('div');
        message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
        message.innerHTML = `<i class="fas fa-check"></i> ${emoji} ${name} feeling ${currentEditingFeelingIndex !== null ? 'updated' : 'added'}!`;

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 2000);
    }
}



function editFeeling(index) {
    const feeling = feelings[index];
    currentEditingFeelingIndex = index;

    // Populate the form with the feeling's current values
    document.getElementById('newFeelingName').value = feeling.name;
    document.getElementById('newFeelingEmoji').value = feeling.emoji;

    // Find and set the matching color
    const matchingColor = colorPalette.find(color => color.bg === feeling.color);
    if (matchingColor) {
        selectedFeelingColor = matchingColor;
        updateFeelingColorButton();
    }

    // Set the text color radio button
    const isWhiteText = feeling.textColor.includes('white') || feeling.textColor.includes('100');
    document.querySelector(`input[name="textColor"][value="${isWhiteText ? 'white' : 'black'}"]`).checked = true;

    updateTextColorPreview();

    // Show delete button and update add button text
    document.getElementById('deleteFeelingButton').classList.remove('hidden');
    document.getElementById('addFeelingButton').textContent = 'Save Feeling';

    // Scroll to the Add Feeling section
    const tabContent = document.getElementById('tabContent');
    tabContent.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    // Show edit message
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = `✏️ ${feeling.emoji} ${feeling.name} loaded for editing!`;

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

function deleteCurrentFeeling() {
    if (currentEditingFeelingIndex !== null) {
        const feeling = feelings[currentEditingFeelingIndex];
        showConfirmation(
            'Delete Feeling',
            `Are you sure you want to delete the "${feeling.name}" feeling? Students who have selected this feeling will need to choose a new one.`,
            '😔',
            'Delete Feeling',
            () => {
                feelings.splice(currentEditingFeelingIndex, 1);

                // Remove this feeling from any students who have it selected
                Object.keys(studentFeelings).forEach(studentName => {
                    if (studentFeelings[studentName] && studentFeelings[studentName].name === feeling.name) {
                        delete studentFeelings[studentName];
                    }
                });

                currentEditingFeelingIndex = null;

                // Clear form
                document.getElementById('newFeelingName').value = '';
                document.getElementById('newFeelingEmoji').value = '';
                document.querySelector('input[name="textColor"][value="black"]').checked = true;
                document.getElementById('deleteFeelingButton').classList.add('hidden');
                document.getElementById('addFeelingButton').textContent = 'Add Feeling';

                saveData();
                updateSettingsLists();
                updateTextColorPreview();
                initializeDashboard(); // Refresh dashboard to show cleared feelings

                // Show delete message
                const message = document.createElement('div');
                message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
                message.innerHTML = `<i class="fas fa-check"></i> ${feeling.emoji} ${feeling.name} feeling deleted!`;

                document.body.appendChild(message);

                setTimeout(() => {
                    message.remove();
                }, 3000);
            }
        );
    }
}

function resetAllData() {
    if (confirm('Are you sure you want to reset all data? This will remove all custom students, feelings, appearance settings, and current selections.')) {
        students = [...defaultStudents];
        feelings = [...defaultFeelings];
        studentFeelings = {};
        settings = { ...defaultSettings };
        saveData();
        updateSettingsLists();
        populateAppearanceInputs();
        initializeDashboard();
        closeSettings();

        const message = document.createElement('div');
        message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
        message.innerHTML = '✅ All data has been reset to defaults!';

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}



// Close modal when clicking outside
document.getElementById('feelingsModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeFeelings();
    }
});

document.getElementById('settingsModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeSettings();
    }
});

document.getElementById('colorPickerModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeColorPicker();
    }
});

document.getElementById('passwordModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closePasswordModal();
    }
});

document.getElementById('confirmationModal').addEventListener('click', function (e) {
    if (e.target === this) {
        cancelConfirmation();
    }
});

// Add keyboard support for adding students and feelings
document.getElementById('newStudentName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addStudent();
    }
});

document.getElementById('newFeelingName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addFeeling();
    }
});

document.getElementById('newFeelingEmoji').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addFeeling();
    }
});



// Drag and drop functionality
let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (draggedElement !== this && draggedElement.dataset.type === this.dataset.type) {
        const draggedIndex = parseInt(draggedElement.dataset.index);
        const targetIndex = parseInt(this.dataset.index);

        if (draggedElement.dataset.type === 'student') {
            // Reorder students array
            const draggedStudent = students[draggedIndex];
            students.splice(draggedIndex, 1);
            students.splice(targetIndex, 0, draggedStudent);
        } else if (draggedElement.dataset.type === 'feeling') {
            // Reorder feelings array
            const draggedFeeling = feelings[draggedIndex];
            feelings.splice(draggedIndex, 1);
            feelings.splice(targetIndex, 0, draggedFeeling);
        }

        saveData();
        updateSettingsLists();
        initializeDashboard();
    }

    return false;
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    draggedElement = null;
}

// Confirmation system
let pendingConfirmationAction = null;

function showConfirmation(title, message, icon, buttonText, action) {
    document.getElementById('confirmationTitle').textContent = title;
    document.getElementById('confirmationMessage').textContent = message;
    document.getElementById('confirmationIcon').textContent = icon;
    document.getElementById('confirmButton').textContent = buttonText;

    pendingConfirmationAction = action;

    document.getElementById('confirmationModal').classList.remove('hidden');
    document.getElementById('confirmationModal').classList.add('flex');
}

function executeConfirmation() {
    if (pendingConfirmationAction) {
        pendingConfirmationAction();
        pendingConfirmationAction = null;
    }
    cancelConfirmation();
}

function cancelConfirmation() {
    document.getElementById('confirmationModal').classList.add('hidden');
    document.getElementById('confirmationModal').classList.remove('flex');
    pendingConfirmationAction = null;
}

// Secret bypass system
let bypassClickCount = 0;
let bypassTimer = null;

function handleBypassClick() {
    bypassClickCount++;

    // Reset counter after 3 seconds of no clicks
    if (bypassTimer) {
        clearTimeout(bypassTimer);
    }
    bypassTimer = setTimeout(() => {
        bypassClickCount = 0;
    }, 3000);

    // Show visual feedback for clicks
    const lockIcon = document.querySelector('#passwordModal h2 i');
    lockIcon.style.transform = 'scale(1.2)';
    lockIcon.style.color = '#ef4444';
    setTimeout(() => {
        lockIcon.style.transform = 'scale(1)';
        lockIcon.style.color = '';
    }, 200);

    if (bypassClickCount >= 5) {
        activateBypass();
    }
}

function activateBypass() {
    // Reset password to default
    adminPassword = defaultPassword;
    localStorage.setItem('feelingsDashboard_password', adminPassword);

    // Reset click counter
    bypassClickCount = 0;
    if (bypassTimer) {
        clearTimeout(bypassTimer);
    }

    // Show bypass message
    const messageDiv = document.createElement('div');
    messageDiv.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    messageDiv.innerHTML = '<i class="fas fa-key"></i> Emergency bypass activated! Password reset to 1234';

    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 4000);

    // Close password modal and execute action
    const actionToExecute = pendingAction;
    closePasswordModal();

    setTimeout(() => {
        executeAction(actionToExecute);
    }, 100);
}

// Password system functions
function requestPassword(action) {
    // If password protection is disabled, execute action directly
    if (!passwordEnabled) {
        executeAction(action);
        return;
    }

    // Special handling for lock - only require password when unlocking
    if (action === 'lock' && !isLocked) {
        // Locking doesn't require password
        toggleLock();
        return;
    }

    pendingAction = action;
    currentPassword = '';
    updatePasswordDisplay();
    hidePasswordError();

    // Set appropriate prompt message
    const promptElement = document.getElementById('passwordPrompt');
    switch (action) {
        case 'edit':
            promptElement.textContent = 'Enter password to access settings';
            break;
        case 'lock':
            promptElement.textContent = 'Enter password to unlock dashboard';
            break;
        case 'reset':
            promptElement.textContent = 'Enter password to reset all feelings';
            break;
        default:
            promptElement.textContent = 'Enter the password to continue';
    }

    document.getElementById('passwordModal').classList.remove('hidden');
    document.getElementById('passwordModal').classList.add('flex');

    // Add keyboard event listener when modal opens
    document.addEventListener('keydown', handlePasswordKeyboard);
}

function handlePasswordKeyboard(e) {
    // Only handle keyboard input if password modal is open
    if (document.getElementById('passwordModal').classList.contains('hidden')) {
        return;
    }

    e.preventDefault(); // Prevent default behavior for all keys in password modal

    // Handle number keys (0-9)
    if (e.key >= '0' && e.key <= '9') {
        addPasswordDigit(e.key);
    }
    // Handle backspace
    else if (e.key === 'Backspace') {
        clearPassword();
    }
    // Handle enter
    else if (e.key === 'Enter') {
        submitPassword();
    }
    // Handle escape
    else if (e.key === 'Escape') {
        closePasswordModal();
    }
}

function addPasswordDigit(digit) {
    if (currentPassword.length < 8) {
        currentPassword += digit;
        updatePasswordDisplay();
    }
}

function clearPassword() {
    if (currentPassword.length > 0) {
        currentPassword = currentPassword.slice(0, -1);
        updatePasswordDisplay();
    }
}

function updatePasswordDisplay() {
    const display = document.getElementById('passwordDisplay');
    if (currentPassword.length === 0) {
        display.textContent = '';
    } else {
        display.textContent = '•'.repeat(currentPassword.length);
    }
}

function submitPassword() {
    if (currentPassword === adminPassword) {
        // Correct password - execute action first, then close modal
        const actionToExecute = pendingAction;
        closePasswordModal();

        // Small delay to ensure modal closes before executing action
        setTimeout(() => {
            executeAction(actionToExecute);
        }, 100);
    } else {
        // Incorrect password
        showPasswordError();
        currentPassword = '';
        updatePasswordDisplay();
    }
}

function executeAction(action) {
    switch (action) {
        case 'edit':
            openSettings();
            break;
        case 'lock':
            toggleLock();
            break;
        case 'reset':
            resetAllFeelings();
            break;
    }
}

function closePasswordModal() {
    document.getElementById('passwordModal').classList.add('hidden');
    document.getElementById('passwordModal').classList.remove('flex');
    currentPassword = '';
    pendingAction = null;
    hidePasswordError();

    // Remove keyboard event listener when modal closes
    document.removeEventListener('keydown', handlePasswordKeyboard);
}

function showPasswordError() {
    document.getElementById('passwordError').classList.remove('hidden');
}

function hidePasswordError() {
    document.getElementById('passwordError').classList.add('hidden');
}

// Security functions
function togglePasswordProtection() {
    passwordEnabled = document.getElementById('passwordToggle').checked;
    localStorage.setItem('feelingsDashboard_passwordEnabled', JSON.stringify(passwordEnabled));
    updateSecurityDisplay();

    // Show status message
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = passwordEnabled ?
        '<i class="fas fa-shield-alt"></i> Password protection enabled!' :
        '<i class="fas fa-shield-alt"></i> Password protection disabled!';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

function updateSecurityDisplay() {
    // Update toggle state
    document.getElementById('passwordToggle').checked = passwordEnabled;

    // Update password display
    document.getElementById('currentPasswordDisplay').textContent = passwordEnabled ? adminPassword : '••••';

    // Update status messages
    const statusSpan = document.getElementById('passwordStatus');
    const statusMessage = document.getElementById('passwordStatusMessage');
    const protectionStatusText = document.getElementById('protectionStatusText');
    const changePasswordSection = document.getElementById('changePasswordSection');

    if (passwordEnabled) {
        statusSpan.textContent = 'enabled';
        statusMessage.className = 'mt-3 p-3 rounded-lg bg-green-100 border border-green-300 text-green-700';
        statusMessage.innerHTML = '<i class="fas fa-shield-alt"></i> Password protection is currently <span id="passwordStatus">enabled</span>. Dashboard functions require password authentication.';
        protectionStatusText.textContent = 'Enabled - Password required for protected functions';
        changePasswordSection.style.opacity = '1';
        changePasswordSection.style.pointerEvents = 'auto';
    } else {
        statusSpan.textContent = 'disabled';
        statusMessage.className = 'mt-3 p-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-700';
        statusMessage.innerHTML = '<i class="fas fa-info-circle"></i> Password protection is currently <span id="passwordStatus">disabled</span>. Dashboard functions are accessible without a password.';
        protectionStatusText.textContent = 'Disabled - No password required';
        changePasswordSection.style.opacity = '0.5';
        changePasswordSection.style.pointerEvents = 'none';
    }
}

function changePassword() {
    const currentPasswordInput = document.getElementById('currentPasswordInput');
    const newPasswordInput = document.getElementById('newPasswordInput');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const messageDiv = document.getElementById('passwordChangeMessage');

    const currentPassword = currentPasswordInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    // Clear previous messages
    messageDiv.classList.add('hidden');

    // Validate current password
    if (currentPassword !== adminPassword) {
        showPasswordChangeMessage('Current password is incorrect.', 'error');
        return;
    }

    // Validate new password
    if (newPassword.length === 0) {
        showPasswordChangeMessage('New password cannot be empty.', 'error');
        return;
    }

    // Check if password contains only numbers
    if (!/^\d+$/.test(newPassword)) {
        showPasswordChangeMessage('Password must contain only numbers.', 'error');
        return;
    }

    if (newPassword.length < 4) {
        showPasswordChangeMessage('Password must be at least 4 numbers long.', 'error');
        return;
    }

    if (newPassword.length > 10) {
        showPasswordChangeMessage('Password cannot be longer than 10 numbers.', 'error');
        return;
    }

    // Validate password confirmation
    if (newPassword !== confirmPassword) {
        showPasswordChangeMessage('New password and confirmation do not match.', 'error');
        return;
    }

    // Update password
    adminPassword = newPassword;
    localStorage.setItem('feelingsDashboard_password', adminPassword);

    // Clear form
    currentPasswordInput.value = '';
    newPasswordInput.value = '';
    confirmPasswordInput.value = '';

    // Update display
    updateSecurityDisplay();

    // Show success message
    showPasswordChangeMessage('Password updated successfully!', 'success');
}

function showPasswordChangeMessage(message, type) {
    const messageDiv = document.getElementById('passwordChangeMessage');

    if (type === 'success') {
        messageDiv.className = 'mt-3 p-3 rounded-lg bg-green-100 border border-green-300 text-green-800';
        messageDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    } else {
        messageDiv.className = 'mt-3 p-3 rounded-lg bg-red-100 border border-red-300 text-red-800';
        messageDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    }

    messageDiv.classList.remove('hidden');

    // Auto-hide success messages after 3 seconds
    if (type === 'success') {
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 3000);
    }
}

// Backup and restore functions
let pendingImportData = null;

function exportData() {
    const exportData = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        students: students,
        feelings: feelings,
        studentFeelings: studentFeelings,
        settings: settings
    };

    const dataStr = JSON.stringify(exportData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);

    const now = new Date();
    const dateStr = now.toISOString().split('T')[0]; // YYYY-MM-DD format
    link.download = `feelings-dashboard-backup-${dateStr}.json`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show success message
    const message = document.createElement('div');
    message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    message.innerHTML = '<i class="fas fa-download"></i> Saving backup file...';

    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== 'application/json' && !file.name.endsWith('.json')) {
        showImportError('Please select a valid JSON file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importData = JSON.parse(e.target.result);
            validateAndPreviewImport(importData);
        } catch (error) {
            showImportError('Invalid JSON file. Please check the file format.');
        }
    };
    reader.readAsText(file);
}

function validateAndPreviewImport(data) {
    // Validate required fields
    if (!data.students || !Array.isArray(data.students)) {
        showImportError('Invalid backup file: missing or invalid students data.');
        return;
    }

    if (!data.feelings || !Array.isArray(data.feelings)) {
        showImportError('Invalid backup file: missing or invalid feelings data.');
        return;
    }

    // Store for potential import
    pendingImportData = data;

    // Show preview
    const preview = document.getElementById('importPreview');
    const details = document.getElementById('importDetails');

    const studentCount = data.students.length;
    const feelingCount = data.feelings.length;
    const selectionCount = data.studentFeelings ? Object.keys(data.studentFeelings).length : 0;
    const exportDate = data.exportDate ? new Date(data.exportDate).toLocaleDateString() : 'Unknown';

    details.innerHTML = `
                <p><i class="fas fa-users"></i> <strong>Students:</strong> ${studentCount} students</p>
                <p><i class="fas fa-smile"></i> <strong>Feelings:</strong> ${feelingCount} feelings</p>
                <p><i class="fas fa-heart"></i> <strong>Current selections:</strong> ${selectionCount} students have feelings set</p>
                <p><i class="fas fa-calendar"></i> <strong>Export date:</strong> ${exportDate}</p>
                ${data.version ? `<p><i class="fas fa-tag"></i> <strong>Version:</strong> ${data.version}</p>` : ''}
            `;

    preview.classList.remove('hidden');
}

function confirmImport() {
    if (!pendingImportData) return;

    try {
        // Import the data
        students = [...pendingImportData.students];
        feelings = [...pendingImportData.feelings];
        studentFeelings = pendingImportData.studentFeelings ? { ...pendingImportData.studentFeelings } : {};

        // Import settings if available
        if (pendingImportData.settings) {
            settings = { ...pendingImportData.settings };
        }

        // Save to localStorage
        saveData();

        // Update UI
        updateSettingsLists();
        populateAppearanceInputs();
        initializeDashboard();

        // Hide preview
        cancelImport();

        // Show success message
        const message = document.createElement('div');
        message.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
        message.innerHTML = '<i class="fas fa-check"></i> Data imported successfully!';

        document.body.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 3000);

    } catch (error) {
        showImportError('Error importing data. Please try again.');
    }
}

function cancelImport() {
    pendingImportData = null;
    document.getElementById('importPreview').classList.add('hidden');
    document.getElementById('importFileInput').value = '';
}

function showImportError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 font-semibold';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;

    document.body.appendChild(errorDiv);

    setTimeout(() => {
        errorDiv.remove();
    }, 4000);

    // Reset file input
    document.getElementById('importFileInput').value = '';
}

// Initialize the dashboard
initializeDashboard();