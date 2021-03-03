// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//folding-table
function toggleClass(element, className) {
    var classList, classIndex;
    if (!element.className) {
        element.className = className;
    } else {
        classList = element.className.split(/\s+/);
        classIndex = classList.indexOf(className);
        if (classIndex === -1) {
            classList.push(className);
        } else {
            classList.splice(classIndex, 1);
        }
        element.className = classList.join(' ');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var rows = document.querySelectorAll('.folding-table > tbody > tr'),
        i;

    function clickHandler() {
        toggleClass(this, 'expanded');
    }

    function enterHandler(e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            clickHandler.call(this);
            e.preventDefault();
            return false;
        }
    }

    for (i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', clickHandler);
        rows[i].addEventListener('keydown', enterHandler);
    }
});