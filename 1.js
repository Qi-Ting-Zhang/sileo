function toggleSwitch(buttonId) {
    const toggle = document.getElementById(`toggle${buttonId}`);
    const label = document.getElementById(`label${buttonId}`);
    const switchElement = document.getElementById(`switch${buttonId}`);
    const music = document.getElementById(`music${buttonId}`);
    const isPlaying = toggle.classList.toggle('on');

    // 根据按钮状态切换图标和播放/暂停音频
    if (isPlaying) {
        music.play();
        label.textContent = '播放';  // 更新按钮文本
        switchElement.setAttribute('aria-checked', 'true');  // 更新无障碍属性
    } else {
        music.pause();
        label.textContent = '暂停';  // 更新按钮文本
        switchElement.setAttribute('aria-checked', 'false');  // 更新无障碍属性
    }
}
