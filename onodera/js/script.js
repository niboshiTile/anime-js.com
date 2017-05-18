var bouncingBall = anime({
    targets: '.ball',
    translateY: '170%',
    duration: 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic',
    scaleX: {
        value: 1.05,
        duration: 150,
        delay: 268
    }
});

var shadow = anime({
    targets: '.shadow',
    scaleX: 2,
    scaleY: 2,
    duration: 500,
    loop: true,
    direction: 'alternate',
    easing: 'easeInCubic'
});