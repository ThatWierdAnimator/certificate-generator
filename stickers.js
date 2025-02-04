const sticker1 = {obj: document.getElementsByClassName('sticker-1'), sticky: false}
const sticker2 = {obj: document.getElementsByClassName('sticker-2'), sticky: false}
const sticker3 = {obj: document.getElementsByClassName('sticker-3'), sticky: false}
const sticker4 = {obj: document.getElementsByClassName('sticker-4'), sticky: false}
const sticker5 = {obj: document.getElementsByClassName('sticker-5'), sticky: false}
const certificateWidth = document.getElementById('lil-guy').clientWidth;
let mouseCoords = {x: 0, y: 0};

for (i=0;i<sticker1.obj.length;i++) {
    sticker1.obj[i].addEventListener('mousedown', () => {
        sticker1.sticky = true;
    });

    sticker1.obj[i].addEventListener('mouseup', () => {
        sticker1.sticky = false;
    })
}

for (i=0;i<sticker2.obj.length;i++) {
    sticker2.obj[i].addEventListener('mousedown', () => {
        sticker2.sticky = true;
    });

    sticker2.obj[i].addEventListener('mouseup', () => {
        sticker2.sticky = false;
    })
}

for (i=0;i<sticker3.obj.length;i++) {
    sticker3.obj[i].addEventListener('mousedown', () => {
        sticker3.sticky = true;
    });

    sticker3.obj[i].addEventListener('mouseup', () => {
        sticker3.sticky = false;
    })
}

for (i=0;i<sticker4.obj.length;i++) {
    sticker4.obj[i].addEventListener('mousedown', () => {
        sticker4.sticky = true;
    });

    sticker4.obj[i].addEventListener('mouseup', () => {
        sticker4.sticky = false;
    })
}

for (i=0;i<sticker5.obj.length;i++) {
    sticker5.obj[i].addEventListener('mousedown', () => {
        sticker5.sticky = true;
    });

    sticker5.obj[i].addEventListener('mouseup', () => {
        sticker5.sticky = false;
    })
}

document.querySelector('body').addEventListener('mousemove', (e) => {
    mouseCoords.x = e.clientX;
    mouseCoords.y = e.clientY;

    stickToMouse();
})

function stickToMouse() {
    let left = (certificateWidth - (mouseCoords.x * -1 + 1550)) / certificateWidth;

    stickerProcess(sticker1, left);
    stickerProcess(sticker2, left);
    stickerProcess(sticker3, left);
    stickerProcess(sticker4, left);
    stickerProcess(sticker5, left);
}

function stickerProcess(sticker, left) {
    if (sticker.sticky) {
        for (i=0;i<sticker.obj.length;i++) {
            sticker.obj[i].style = `left: ${left * 100}%; top: ${mouseCoords.y - 20}px;`;
        }
        for (i=0;i<sticker.obj.length;i++) {
            let widthPercent = sticker.obj[i].style.left.toString();
            widthPercent = widthPercent.substring(0, widthPercent.length - 1);
            widthPercent = parseFloat(widthPercent);
            if (widthPercent > 100 - ((sticker.obj[i].clientWidth / certificateWidth) * 100)) {
                sticker.obj[i].style = `left: calc(100% - ${sticker.obj[i].clientWidth}px); top: ${mouseCoords.y - 20}px;`;
            } else if (widthPercent < 0) {
                sticker.obj[i].style = `left: 0; top: ${mouseCoords.y - 20}px;`;
            }
        }
    }
}