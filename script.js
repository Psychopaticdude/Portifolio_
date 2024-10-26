document.addEventListener("DOMContentLoaded", function () {
    const targetText = [
        { text: "junior software developer", color: "darkslategray" },
        { text: "Random Dude from DD", color: "darkslategray" },
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const erasingSpeed = 100;
    const delayBetweenWords = 1200;
    const targetElement = document.querySelector(".typing-text span");

    function typeEffect() {
        if (wordIndex >= targetText.length) {
            wordIndex = 0;
        }

        const currentWordObj = targetText[wordIndex];
        const currentWord = currentWordObj.text;

        if (!isDeleting && letterIndex < currentWord.length) {
            targetElement.innerHTML = `<span style="color: ${currentWordObj.color};">${currentWord.substring(0, letterIndex + 1)}</span>`;
            letterIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && letterIndex > 0) {
            targetElement.innerHTML = `<span style="color: ${currentWordObj.color};">${currentWord.substring(0, letterIndex - 1)}</span>`;
            letterIndex--;
            setTimeout(typeEffect, erasingSpeed);
        } else if (!isDeleting && letterIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenWords);
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            wordIndex++;
            setTimeout(typeEffect, typingSpeed);
        }
    }

    typeEffect();
});