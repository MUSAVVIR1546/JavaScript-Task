window.addEventListener('scroll', run);

function run() {
    const container = document.getElementById('container');

    function createUl() {
        const ul = document.createElement('ul')
        ul.classList.add('flex');
        container.appendChild(ul);

        for (let i = 0; i < 4; i++) {
            const currentColumn = createLI();
            ul.append(currentColumn);
        }
    }

    function createLI() {
        const li = document.createElement('li');
        const img = new Image();
        img.src = '#';
        img.alt = 'Unkown Img'

        li.append(img)
        return li;
    }

    while (scrollY >= document.body.offsetHeight - window.innerHeight) {
        createUl();
    }
    const totalHeight = document.body.offsetHeight - window.innerHeight;
    const currentPosition = scrollY;

    if (currentPosition > totalHeight) {
        createUl();
    }
}
run()