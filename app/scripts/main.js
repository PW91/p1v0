var sourceEl = document.querySelector('video source');
var videoEl = document.querySelector('video');

if (window.innerWidth <= 767) {
    sourceEl.setAttribute('src', './videos/mobile.mp4');
    videoEl.setAttribute('poster', './images/poster_mobile.png');
}

window.lastWindowInnerWidth = window.innerWidth;

window.addEventListener('resize', function() {

    if (window.lastWindowInnerWidth > 767) {
        if (window.innerWidth <= 767 ) {
            window.location.reload();
        }
    } else {
        if (window.innerWidth > 767 ) {
            window.location.reload();
        }
    }
});