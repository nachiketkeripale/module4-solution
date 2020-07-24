(function(window) {
    var bye = new Object();
    var speakWord = "Good Bye";
    bye.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.bye = bye;
})(window);
