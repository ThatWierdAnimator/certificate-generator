const sticker1 = {obj: document.getElementsByClassName('sticker-1'), sticky: false, on: false}
const sticker2 = {obj: document.getElementsByClassName('sticker-2'), sticky: false, on: false}
const sticker3 = {obj: document.getElementsByClassName('sticker-3'), sticky: false, on: false}
const sticker4 = {obj: document.getElementsByClassName('sticker-4'), sticky: false, on: false}
const sticker5 = {obj: document.getElementsByClassName('sticker-5'), sticky: false, on: false}

const sticker1_input = {toggle: document.getElementById('sticker-1-input').children[1], img: document.getElementById('sticker-1-input').children[2]};

const certificateWidth = document.getElementById('lil-guy').clientWidth;
let certificateHeight = document.getElementById('lil-guy').clientHeight;

let mouseCoords = {x: 0, y: 0};

for (i=0;i<sticker1.obj.length;i++) {
    sticker1.obj[i].addEventListener('mousedown', () => {
        sticker1.sticky = true;
    });
}

for (i=0;i<sticker2.obj.length;i++) {
    sticker2.obj[i].addEventListener('mousedown', () => {
        sticker2.sticky = true;
    });
}

for (i=0;i<sticker3.obj.length;i++) {
    sticker3.obj[i].addEventListener('mousedown', () => {
        sticker3.sticky = true;
    });
}

for (i=0;i<sticker4.obj.length;i++) {
    sticker4.obj[i].addEventListener('mousedown', () => {
        sticker4.sticky = true;
    });
}

for (i=0;i<sticker5.obj.length;i++) {
    sticker5.obj[i].addEventListener('mousedown', () => {
        sticker5.sticky = true;
    });
}

document.querySelector('body').addEventListener('mouseup', () => {
    sticker1.sticky = false;
    sticker2.sticky = false;
    sticker3.sticky = false;
    sticker4.sticky = false;
    sticker5.sticky = false;
})

document.querySelector('body').addEventListener('mousemove', (e) => {
    mouseCoords.x = e.clientX;
    mouseCoords.y = e.clientY;

    stickToMouse();
})

template.addEventListener('change', () => {
    if (template.value === 'lil-guy') {
        certificateHeight = document.getElementById('lil-guy').clientHeight;
    } else if (template.value === 'huge-stinker') {
        certificateHeight = document.getElementById('huge-stinker').clientHeight;
    } else if (template.value === 'enigma') {
        certificateHeight = document.getElementById('enigma').clientHeight;
    }
})

function stickToMouse() {
    let left = (certificateWidth - (mouseCoords.x * -1 + 1550)) / certificateWidth;
    left = `${left * 100}%`;

    stickerProcess(sticker1, left);
    stickerProcess(sticker2, left);
    stickerProcess(sticker3, left);
    stickerProcess(sticker4, left);
    stickerProcess(sticker5, left);
}

function stickerProcess(sticker, left) {
    if (sticker.sticky) {
        for (i=0;i<sticker.obj.length;i++) {
            sticker.obj[i].style = `left: ${left}; top: ${mouseCoords.y - 20}px;`;
        }
        for (i=0;i<sticker.obj.length;i++) {
            let widthPercent = sticker.obj[i].style.left.toString();
            widthPercent = widthPercent.substring(0, widthPercent.length - 1);
            widthPercent = parseFloat(widthPercent);
            if (widthPercent > 100 - ((sticker.obj[i].clientWidth / certificateWidth) * 100)) {
                left = `calc(100% - ${sticker.obj[i].clientWidth}px)`;
            } else if (widthPercent < 0) {
                left = 0;
            }

            let top = mouseCoords.y - 20;
            let offset = 4.5;
            if (top < 0) {
                top = 0;
            } else if (top > certificateHeight - sticker.obj[i].clientHeight + offset) {
                top = certificateHeight - sticker.obj[i].clientHeight + offset;
            }

            sticker.obj[i].style = `left: ${left}; top: ${top}px;`;
        }
    }
}

sticker1_input.toggle.addEventListener('change', () => {
    if (sticker1.on) {
        for (i=0;i<sticker1.obj.length;i++) {
            sticker1.obj[i].classList.add('hidden');
        }
        sticker1.on = false;
    } else {
        for (i=0;i<sticker1.obj.length;i++) {
            sticker1.obj[i].classList.remove('hidden');
        }
        sticker1.on = true;
    }
})

sticker1_input.img.addEventListener('change', () => {
    console.log(`/images/${sticker1_input.img.value}`);
    sticker1.obj[0].children[0].src = `/images/${sticker1_input.img.value}`;
})