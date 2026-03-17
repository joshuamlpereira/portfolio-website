// === After Dark: Starfield Effect ===
(function () {
    function randomStars(count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            var x = (Math.random() * 3840) | 0;
            var y = (Math.random() * 2160) | 0;
            arr.push(x + 'px ' + y + 'px #fff');
        }
        return arr.join(',');
    }
    var root = document.documentElement;
    root.style.setProperty('--stars1', randomStars(700));
    root.style.setProperty('--stars2', randomStars(200));
    root.style.setProperty('--stars3', randomStars(100));
})();

// --- Typing Animation (home page only) ---
var typingSpan = document.querySelector('.text-animation span');
if (typingSpan) {
    var typingTexts = ['Software Developer', 'Cybersecurity Enthusiast', 'Problem Solver'];
    var textIndex  = 0;
    var charIndex  = 0;
    var isDeleting = false;

    function type() {
        var current = typingTexts[textIndex];
        if (isDeleting) {
            typingSpan.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingSpan.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            setTimeout(type, 400);
        } else {
            setTimeout(type, isDeleting ? 60 : 100);
        }
    }

    type();
}