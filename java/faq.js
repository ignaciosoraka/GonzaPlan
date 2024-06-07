function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-icon');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
        icon.style.backgroundColor = "violet";
        icon.style.color = "#000";
        icon.style.border = "none";
    } else {
        answer.style.display = "block";
        icon.textContent = "-";
        icon.style.backgroundColor = "transparent";
        icon.style.color = "violet";
        icon.style.border = "1px solid violet";
    }
}

// CSS transition for smooth opening and closing
const style = document.createElement('style');
style.innerHTML = `
.faq-answer {
    transition: all 0.3s ease-in-out;
    overflow: hidden;
}
.faq-answer.open {
    display: block;
}
`;
document.head.appendChild(style);