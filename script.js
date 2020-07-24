(function() {
    var names = ["Nachiket", "John","Pamya", "Jason", "Ajay", "Akshay","Jay", "Aditya",  "Chinmay", "Johnny "];
    for (var i = 0; i < names.length; i++) {
       var first = names[i].charAt(0);
        if (first === 'j' || first === 'J') {
            bye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();
