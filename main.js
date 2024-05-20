VanillaTilt.init(document.querySelector(".scene"), {
    maxTilt: 5,
    perspective:    1000,
    easing:         "cubic-bezier(.03,.98,.52,.99)",
    speed:          300,
    transition:     true,
    reset:          true
});

const W = window.innerWidth;
const H = window.innerHeight;

function updateAnimationTiming() {
    const animationDuration = 5 + Math.random() * 5; // [5 - 10)
    const animationDelay = 5 + Math.random() * 10; // [5 - 15)

    window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--animationDuration', animationDuration + 's');
        document.documentElement.style.setProperty('--animationDelay', animationDelay + 's');
    });

    const timeout = (animationDuration + animationDelay) * 1000 - 100;

    setTimeout(updateAnimationTiming, timeout);
}

updateAnimationTiming();

document.addEventListener('mousemove', e => {
    window.requestAnimationFrame(() => {
        const X = e.offsetX;
        const Y = e.offsetY;

        document.documentElement.style.setProperty('--cursorX', X + 'px');
        document.documentElement.style.setProperty('--cursorY', Y + 'px');

        const X2 = X - (W / 100) * (X / W - 0.5);
        const Y2 = Y - (W / 100) * (Y / H - 0.5);

        document.documentElement.style.setProperty('--cursorX2', X2 + 'px');
        document.documentElement.style.setProperty('--cursorY2', Y2 + 'px');
    });
});

const scene = document.querySelector('.scene');
const cardItem = document.querySelector('.card');

scene.addEventListener('mouseenter', () => {
    cardItem.classList.add('hovered');
});

scene.addEventListener('mouseleave', () => {
    cardItem.classList.remove('hovered');
});