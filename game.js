var animer, left = 0, imgObj = null;

function init() {
    imgObj = document.getElementById("spaceship");
    imgObj.style.position = "absolute";
    imgObj.style.top = '240px';
    imgObj.style.left = '-300px';
    imgObj.style.visibility = 'hidden';

    roundMove();
}

function roundMove() {
    left = parseInt(imgObj.style.left, 10);

    if (10 >= left) {
        imgObj.style.left = (left + 5) + 'px';
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
