const input = document.getElementById("display");
const calculator = document.getElementById("buttons");
const operators = document.getElementsByClassName("operator");
let output = '';

function handleClick(e) {
    e.preventDefault();
    let lastChar = output.slice(-1);
    let firstchar = output.slice(0, 1);
    const validOperators = [".", "*", "/", "+", "-", "%"];
    const validChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "00", "AC", "DEL", "=", ".", "*", "/", "+", "-", "%"];
    if (validChar.includes(e.target.innerHTML)) {
        if (e.target.innerHTML == '=') {
            if (validOperators.includes(firstchar)) {
                output = '';
                input.value = output;
            }
            if (output == '')
                return;
            if (validOperators.includes(lastChar))
                return;
            output = String(eval(output));
            input.value = output;
        } else if (e.target.innerHTML == 'AC') {
            output = '';
            input.value = output;
        } else if (e.target.innerHTML == 'DEL') {
            output = output.slice(0, -1);
            input.value = output;
        } else {
            if (!(validOperators.includes(e.target.innerHTML) && validOperators.includes(lastChar))) {
                output += e.target.innerHTML;
                input.value = output;
            }

        }
    }
}
calculator.addEventListener('click', handleClick);