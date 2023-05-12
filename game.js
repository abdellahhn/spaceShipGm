var animer, left = 0, imgObj = null, top =0;

function init() {
    imgObj = document.getElementById("spaceship");
    imgObj.style.position = "absolute";
    imgObj.style.top = '37%';
    imgObj.style.left = '50%';
    imgObj.style.visibility = 'hidden';

    roundMove();
}

function roundMove() {
    left = parseInt(imgObj.style.left, 10);
    top = parseInt(imgObj.style.top, 100)

    if (window.innerWidth >= left) {
        imgObj.style.left = (left + 5) + 'px';
        imgObj.style.top = (top + 5) + 'px'
        imgObj.style.visibility = 'visible';

        animer = setTimeout(function () {
            roundMove();
        }, 20);
    } else {
        stop();
    }
}

function stop() {
    clearTimeout(animer);
}

// window.onload = function() {
//     init();
// };
