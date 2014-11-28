module.exports = {
    blur: function (blurSelection) {
        'use strict';
        var $window = $(window);
        $window.scroll(function () {
            var blurVal = $window.scrollTop() / 50,
                blurString = 'blur(' + blurVal + 'px)';
            $(blurSelection).css({
                'filter': blurString,
                '-webkit-filter': blurString,
                '-moz-filter': blurString,
                '-o-filter': blurString,
                '-ms-filter': blurString
            })
        });
    }
}