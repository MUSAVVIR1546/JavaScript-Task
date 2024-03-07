buttons.addEventListener('click', function () {
    const buttonsClicked = event.target;

    if (buttonsClicked.tagName === 'BUTTON') {
        const buttonText = buttonsClicked.textContent;

        if (buttonText === 'AC') {
            currentInput = '';
        } else if (buttonText === 'DEL') {
            currentInput = currentInput.slice(0, -1);
        } else if (buttonText === '=') {
            try {
                currentInput = eval(currentInput).toSring();
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += buttonText
        }
        display.value = currentInput;
    }
})