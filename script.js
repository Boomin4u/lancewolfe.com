// Hide the loading spinner after the page loads
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Example: Simple alert for contact button
document.querySelector('a[href="mailto:lance@example.com"]').addEventListener('click', function() {
    alert("Thank you for reaching out! I'll respond as soon as possible.");
});

