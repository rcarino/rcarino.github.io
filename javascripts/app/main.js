var scrollBlurer = require('./services/ScrollBlurer.js'),
    isPageBlurable = $.inArray(window.location.pathname, ['/', '/blog/']) !== -1;

$(document).ready(function () {
    if (isPageBlurable) {
        scrollBlurer.blur('.hero video, .hero img');
    }
});