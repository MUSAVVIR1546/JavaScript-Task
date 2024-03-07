const container = document.getElementById('container');
const img = document.getElementById('fanImg');
const buttons = document.getElementById('buttons');
let isOn = false;

function fanIsOn(e) {
    e.preventDefault();
    const validStr = ["On", "Off", "1", "2", "3"];
    if (!validStr.includes(e.target.innerHTML)) {
        return;
    }
    const eleType = e.target.innerHTML;
    let speed = null;
    switch (eleType) {
        case "Off":
            speed = '0s';
            isOn = false;
            break;
        case "On":
            speed = '3s'
            isOn = true;
            break;
    }
    img.style.animationDuration = speed;

    if (!isOn) {
        return;
    }
    switch (eleType) {
        case "1":
            speed = '2.5s'
            break;
        case "2":
            speed = '1s';
            break;
        case "3":
            speed = '0.5s';
            break;
    }
    img.style.animationDuration = speed;
}

buttons.addEventListener('click', fanIsOn);