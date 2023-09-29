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
    const headingText = "Welcome to JFSS's Brain Teaser Club!";
    const paragraphText = "Explore our website to learn more about us, enjoy brain teasers, check out our competitions, and get in touch with us.";
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