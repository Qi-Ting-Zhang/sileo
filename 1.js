function toggleSwitch(buttonId) {
    // 获取对应的按钮、标签、音频元素
    const toggle = document.getElementById(`toggle${buttonId}`);
    const label = document.getElementById(`label${buttonId}`);
    const switchElement = document.getElementById(`switch${buttonId}`);
    const music = document.getElementById(`music${buttonId}`);  // 获取对应的音频元素
    const isPlaying = toggle.classList.toggle('on');

    // 控制音频的播放与暂停
    if (isPlaying) {
        music.play();
        label.textContent = '播放';  // 更新按钮的文本
        switchElement.setAttribute('aria-checked', 'true');  // 更新无障碍属性
    } else {
        music.pause();
        label.textContent = '暂停';  // 更新按钮的文本
        switchElement.setAttribute('aria-checked', 'false');  // 更新无障碍属性
    }
}
