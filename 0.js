function toggleMusic() {
    const toggle = document.getElementById('toggle');
    const label = document.getElementById('label');
    const music = document.getElementById('background-music');
    const isPlaying = toggle.classList.toggle('on');

    if (isPlaying) {
        music.play();
        label.textContent = '播放';
        document.getElementById('switch').setAttribute('aria-checked', 'true');
    } else {
        music.pause();
        label.textContent = '暂停';
        document.getElementById('switch').setAttribute('aria-checked', 'false');
    }
}
