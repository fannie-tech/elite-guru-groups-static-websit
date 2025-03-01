function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    chatBox.style.display = (chatBox.style.display === "flex") ? "none" : "flex";
}

function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    if (chatInput.value.trim() !== "") {
        alert("Message sent: " + chatInput.value);
        chatInput.value = ""; // Clear input after sending
    }
}



document.addEventListener("DOMContentLoaded", function() {
    const text = "Empowering the Next Generation in Tech";
    const typingText = document.getElementById("typing-text");
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingText.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Typing speed (adjust for faster/slower effect)
        }
    }

    typeWriter(); // Start typing effect
});

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("active");
}
