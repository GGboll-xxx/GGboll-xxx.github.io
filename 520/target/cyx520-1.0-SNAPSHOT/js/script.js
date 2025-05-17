// 创建飘动的心形
function createHearts() {
    const hearts = '❤️💕💖💗💙💚💛💜';
    const count = 20;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.animationDuration = Math.random() * 2 + 2 + 's';
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            heart.style.fontSize = Math.random() * 1 + 1 + 'em';

            document.body.appendChild(heart);

            // 心形飘完后移除
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 500);
    }
}

// 点击按钮事件
document.getElementById('love-button').addEventListener('click', function() {
    this.textContent = '我爱你！';
    this.style.backgroundColor = '#ff1493';

    // 创建更多飘动的心形
    createHearts();

    // 3秒后恢复按钮状态
    setTimeout(() => {
        this.textContent = '点击表达爱意';
        this.style.backgroundColor = '#ff69b4';
    }, 3000);
});

// 页面加载时创建初始心形
window.addEventListener('load', createHearts);

// 滚动时创建更多心形
window.addEventListener('scroll', createHearts);