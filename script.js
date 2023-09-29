// script.js

// Function to simulate typing animation
function typeText(element, text, index, interval) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(function () {
            typeText(element, text, index, interval);
        }, interval);
    }
}

// Function to start typing animation on page load
function startTypingAnimation() {
    const heading = document.getElementById("typed-heading");
    const paragraph = document.getElementById("typed-paragraph");

    // Text to be typed and typing speed (adjust as needed)
    const headingText = "Hello and welcome to the JFSS Brain Teaser Club.";
    const paragraphText = "We're all about challenging the limits of your intellect! Our club is a hub of creativity and cognitive exploration. We craft puzzles from an array of subjects, offering a diverse range of challenges, from mathematical conundrums to language riddles. Engage in thrilling competitions, where your mental prowess could earn you cash prizes and other exciting rewards. Beyond the fun and games, we're dedicated to making a difference. Look forward to participating in our fundraising events, where we join forces to support worthy causes. And if you're up for the ultimate challenge, get ready to tackle mind-bending escape rooms. Join us on this exciting journey of knowledge, camaraderie, and a whole lot of brainpower!";
    const typingSpeed = 25; // milliseconds per character

    // Remove the hidden class to reveal the elements
    heading.classList.remove("hidden");
    paragraph.classList.remove("hidden");

    // Start the typing animation for the heading and paragraph
    typeText(heading, headingText, 0, typingSpeed);
    setTimeout(function () {
        typeText(paragraph, paragraphText, 0, typingSpeed);
    }, headingText.length * typingSpeed + 500); // Delay the paragraph animation
}

// Call the startTypingAnimation function on page load
window.onload = startTypingAnimation;


