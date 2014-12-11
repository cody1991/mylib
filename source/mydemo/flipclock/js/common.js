$(document).ready(function() {
    var clock = $('.your-clock').FlipClock(10, {
        autoStart: true,
        countdown: true,
        clockFace: 'Counter',
        callbacks: {
            stop: function() {
                alert('倒计时结束！');
            }
        }
    });
})
