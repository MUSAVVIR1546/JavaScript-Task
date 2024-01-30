const input = document.getElementById("display");
const calculator = document.getElementById("buttons");
let output = '';

function handleClick(e) {
    e.preventDefault();

    if (e.target.innerHTML == '=') {
        output = eval(output);
        input.value = output;
    }
    else if(e.target.innerHTML == 'AC'){
        output = '';
        input.value = output;
    }
    else if (e.target.innerHTML == 'DEL'){
        output = output.slice(0,-1);
        input.value = output;
    }else{
        output += e.target.innerHTML;
        input.value = output;
    }
}
calculator.addEventListener('click', handleClick);