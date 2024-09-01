// Function to handle button clicks
function btn_click(val) {
    const screen = document.getElementById('screen');
    screen.value += val;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById('screen').value = '';
}

// Function to delete the last character
function deleteLast() {
    const screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    const screen = document.getElementById('screen');
    try {
        // Evaluate the expression and update the screen with the result
        screen.value = eval(screen.value) || '';
    } catch (error) {
        // Handle errors (e.g., invalid expressions)
        screen.value = 'Error';
    }
}
