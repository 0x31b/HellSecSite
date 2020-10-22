document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.onkeydown = function(e) {
    if (event.keyCode == 123) {
        alert("Nice Try")
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        alert("Nice Try")
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        alert("Nice Try")
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        alert("Nice Try")
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        alert("Nice Try")
        return false;
    }
}

function opensesame() {
    var s = document.getElementById('enterSite').style;
    s.opacity = 1;
    (function fade() {
        (s.opacity -= .05) < 0 ? s.display = "none" : setTimeout(fade, 40)
    })();


    var videoElem = document.getElementById("video-background");
    var musicElem = document.getElementById("music-background");

    videoElem.play();
    musicElem.play();
    startTime()
}
