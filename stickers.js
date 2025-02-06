const sticker1 = {obj: document.getElementsByClassName('sticker-1'), sticky: false, on: false, width: 10};
const sticker2 = {obj: document.getElementsByClassName('sticker-2'), sticky: false, on: false, width: 10};
const sticker3 = {obj: document.getElementsByClassName('sticker-3'), sticky: false, on: false, width: 10};
const sticker4 = {obj: document.getElementsByClassName('sticker-4'), sticky: false, on: false, width: 10};
const sticker5 = {obj: document.getElementsByClassName('sticker-5'), sticky: false, on: false, width: 10};

const sticker1_input = {toggle: document.getElementById('sticker-1-input').children[1], img: document.getElementById('sticker-1-input').children[2], size: document.getElementById('sticker-1-input').children[3]};
const sticker2_input = {toggle: document.getElementById('sticker-2-input').children[1], img: document.getElementById('sticker-2-input').children[2], size: document.getElementById('sticker-2-input').children[3]};
const sticker3_input = {toggle: document.getElementById('sticker-3-input').children[1], img: document.getElementById('sticker-3-input').children[2], size: document.getElementById('sticker-3-input').children[3]};
const sticker4_input = {toggle: document.getElementById('sticker-4-input').children[1], img: document.getElementById('sticker-4-input').children[2], size: document.getElementById('sticker-4-input').children[3]};
const sticker5_input = {toggle: document.getElementById('sticker-5-input').children[1], img: document.getElementById('sticker-5-input').children[2], size: document.getElementById('sticker-5-input').children[3]};

const certificateWidth = document.getElementById('lil-guy').clientWidth;
let certificateHeight = document.getElementById('lil-guy').clientHeight;

let mouseCoords = {x: 0, y: 0};
let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

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
});

document.querySelector('body').addEventListener('mousemove', (e) => {
    mouseCoords.x = e.clientX;
    mouseCoords.y = e.clientY;

    stickToMouse();
});

template.addEventListener('change', () => {
    if (template.value === 'lil-guy') {
        certificateHeight = document.getElementById('lil-guy').clientHeight;
    } else if (template.value === 'huge-stinker') {
        certificateHeight = document.getElementById('huge-stinker').clientHeight;
    } else if (template.value === 'enigma') {
        certificateHeight = document.getElementById('enigma').clientHeight;
    }
});

function stickToMouse() {
    // We first shift the mouse coordinates right because of the padding on the left of the certificate
    // The shift is the screen width minus the width of the certificate divided by 2 plus the margin of the body
    // We take that number and divide it by the certificate width to get the percent left of the sticker
    let left = mouseCoords.x - (window.screen.width - certificateWidth) / 2 + 8;
    left = `${left / certificateWidth * 100}%`;
    scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    stickerProcess(sticker1, left);
    stickerProcess(sticker2, left);
    stickerProcess(sticker3, left);
    stickerProcess(sticker4, left);
    stickerProcess(sticker5, left);
}

function stickerProcess(sticker, left) {
    if (sticker.sticky) {
        for (i=0;i<sticker.obj.length;i++) {
            sticker.obj[i].style = `left: ${left}; top: ${mouseCoords.y - 20 + scrollTop}px; width: ${sticker.width}%`;

            let widthPercent = sticker.obj[i].style.left.toString();
            widthPercent = widthPercent.substring(0, widthPercent.length - 1);
            widthPercent = parseFloat(widthPercent);
            if (widthPercent > 100 - ((sticker.obj[i].clientWidth / certificateWidth) * 100)) {
                left = `calc(100% - ${sticker.obj[i].clientWidth}px)`;
            } else if (widthPercent < 0) {
                left = 0;
            }

            let top = mouseCoords.y - 8 + scrollTop;
            if (top < 0) {
                top = 0;
            } else if (top > certificateHeight - sticker.obj[i].clientHeight) {
                top = certificateHeight - sticker.obj[i].clientHeight;
            }

            sticker.obj[i].style = `left: ${left}; top: ${top}px; width: ${sticker.width}%`;
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
});

sticker1_input.img.addEventListener('change', () => {
    for (i=0;i<sticker1.obj.length;i++) {
        sticker1.obj[i].children[0].src = `/images/${sticker1_input.img.value}`;
    }
});

sticker1_input.size.addEventListener('change', () => {
    if (sticker1_input.size.value > 100) {
        sticker1_input.size.value = 100;
    }
    for (i=0;i<sticker1.obj.length;i++) {
        sticker1.width = sticker1_input.size.value;
        sticker1.obj[i].style.width = `${sticker1_input.size.value}%`;
    }
});

sticker2_input.toggle.addEventListener('change', () => {
    if (sticker2.on) {
        for (i=0;i<sticker2.obj.length;i++) {
            sticker2.obj[i].classList.add('hidden');
        }
        sticker2.on = false;
    } else {
        for (i=0;i<sticker2.obj.length;i++) {
            sticker2.obj[i].classList.remove('hidden');
        }
        sticker2.on = true;
    }
});

sticker2_input.img.addEventListener('change', () => {
    for (i=0;i<sticker2.obj.length;i++) {
        sticker2.obj[i].children[0].src = `/images/${sticker2_input.img.value}`;
    }
});

sticker2_input.size.addEventListener('change', () => {
    if (sticker2_input.size.value > 100) {
        sticker2_input.size.value = 100;
    }
    for (i=0;i<sticker2.obj.length;i++) {
        sticker2.width = sticker2_input.size.value;
        sticker2.obj[i].style.width = `${sticker2_input.size.value}%`;
    }
});

sticker3_input.toggle.addEventListener('change', () => {
    if (sticker3.on) {
        for (i=0;i<sticker3.obj.length;i++) {
            sticker3.obj[i].classList.add('hidden');
        }
        sticker3.on = false;
    } else {
        for (i=0;i<sticker3.obj.length;i++) {
            sticker3.obj[i].classList.remove('hidden');
        }
        sticker3.on = true;
    }
});

sticker3_input.img.addEventListener('change', () => {
    for (i=0;i<sticker3.obj.length;i++) {
        sticker3.obj[i].children[0].src = `/images/${sticker3_input.img.value}`;
    }
});

sticker3_input.size.addEventListener('change', () => {
    if (sticker3_input.size.value > 100) {
        sticker3_input.size.value = 100;
    }
    for (i=0;i<sticker3.obj.length;i++) {
        sticker3.width = sticker3_input.size.value;
        sticker3.obj[i].style.width = `${sticker3_input.size.value}%`;
    }
});

sticker4_input.toggle.addEventListener('change', () => {
    if (sticker4.on) {
        for (i=0;i<sticker4.obj.length;i++) {
            sticker4.obj[i].classList.add('hidden');
        }
        sticker4.on = false;
    } else {
        for (i=0;i<sticker4.obj.length;i++) {
            sticker4.obj[i].classList.remove('hidden');
        }
        sticker4.on = true;
    }
});

sticker4_input.img.addEventListener('change', () => {
    for (i=0;i<sticker4.obj.length;i++) {
        sticker4.obj[i].children[0].src = `/images/${sticker4_input.img.value}`;
    }
});

sticker4_input.size.addEventListener('change', () => {
    if (sticker4_input.size.value > 100) {
        sticker4_input.size.value = 100;
    }
    for (i=0;i<sticker4.obj.length;i++) {
        sticker4.width = sticker4_input.size.value;
        sticker4.obj[i].style.width = `${sticker4_input.size.value}%`;
    }
});

sticker5_input.toggle.addEventListener('change', () => {
    if (sticker5.on) {
        for (i=0;i<sticker5.obj.length;i++) {
            sticker5.obj[i].classList.add('hidden');
        }
        sticker5.on = false;
    } else {
        for (i=0;i<sticker5.obj.length;i++) {
            sticker5.obj[i].classList.remove('hidden');
        }
        sticker5.on = true;
    }
});

sticker5_input.img.addEventListener('change', () => {
    for (i=0;i<sticker5.obj.length;i++) {
        sticker5.obj[i].children[0].src = `/images/${sticker5_input.img.value}`;
    }
});

sticker5_input.size.addEventListener('change', () => {
    if (sticker5_input.size.value > 100) {
        sticker5_input.size.value = 100;
    }
    for (i=0;i<sticker5.obj.length;i++) {
        sticker5.width = sticker5_input.size.value;
        sticker5.obj[i].style.width = `${sticker5_input.size.value}%`;
    }
});