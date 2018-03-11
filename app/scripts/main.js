var sourceEl = document.querySelector('video source');

if (window.innerWidth < 768) {
    sourceEl.setAttribute('src', './videos/mobile.mp4');
}
