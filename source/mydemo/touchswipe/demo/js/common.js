$(document).ready(function() {
    $(function() {
        // By using the swipe handler, you can detect all 4 directions, or use the individual methods swipeLeft, swipeRight, swipeUp, swipeDown
        $('.touchswipe').swipe({
            swipeStatus: function(event, phase, direction, distance, duration, fingers, fingerData) {
                if (phase == $.fn.swipe.phases.PHASE_START) {
                    $(this).find('.swipeTip').text('moving...');
                }
                if (phase == $.fn.swipe.phases.PHASE_END) {
                    $(this).find('.swipeTip').text('Please Swipe ! ');
                }
                if (phase != $.fn.swipe.phases.PHASE_END && phase != $.fn.swipe.phases.PHASE_CANCEL) {
                    $(this).find('.direction').text("Direction : " + direction);
                    $(this).find('.distance').text("distance : " + distance);
                    $(this).find('.event').text("event : " + event);
                    $(this).find('.duration').text("duration : " + duration);
                    $(this).find('.fingerCount').text("fingers : " + fingers);
                }
            },
            swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
                $(this).find('.direction').text("Direction : " + direction);
                $(this).find('.distance').text("distance : " + distance);
                $(this).find('.event').text("event : " + event);
                $(this).find('.duration').text("duration : " + duration);
                $(this).find('.fingerCount').text("fingerCount : " + fingerCount);
            },
            //Default is 75px, set to 0 for demo so any distance triggers swipe
            threshold: 0,
            maxTimeThreshold:5000,
        })
    })
})
