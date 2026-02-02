const text = `On this beautiful day, I wish you endless happiness 💐
May your dreams come true and your smile shine brighter every year ✨
You are truly special, and today is all about YOU 🎂🎉`;

let i = 0;
function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 45);

    }
    
}

typingEffect();
