'use strict';
document.addEventListener("DOMContentLoaded",
    function() {
        var reset = function(e) {
            e.target.className = '';
            setTimeout(function() {
                e.target.className = 'meteor';
            }, 0);
        };
        var meteors = document.querySelectorAll('.meteor');
        for (var i = 0; i < meteors.length; i++) {
            meteors[i].addEventListener('animationend', reset);
        }
    });
