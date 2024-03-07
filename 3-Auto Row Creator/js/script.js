const container = document.getElementById('container');
const heading = ['Name', 'Dob', 'Age', 'Salary', 'Address'];

function createHeading() {
    const ul = document.createElement('ul');
    heading.forEach(head => {
        const li = document.createElement('li');
        li.textContent = head;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}
createHeading();

function createContentEdiTable() {
    const ul2 = document.createElement('ul');

    for (let i = 0; i < heading.length; i++) {
        const li2 = document.createElement('li');
        ul2.appendChild(li2);
        li2.setAttribute('contenteditable', 'true');
        li2.addEventListener('input', tableValue);
    };
    container.appendChild(ul2);
};

createContentEdiTable();

function tableValue(e) {
    for (let j = 0; j < heading.length; j++) {
        const checkValues = e.target.parentElement.children[j].textContent;
        if (checkValues === "") {
            return;
        };
    };
    e.target.removeEventListener('input', tableValue)
    e.target.addEventListener("input", removeFirstRow)
    createContentEdiTable();
};

function removeFirstRow(e) {
    if (e.target.textContent === "") {
        container.removeChild(container.lastElementChild)
        e.target.addEventListener("input", tableValue)
    }
}