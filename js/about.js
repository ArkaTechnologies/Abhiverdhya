// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', function () {
    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    }

    // Function to add animation class when element is in view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.journey-card, .mv-card, .owner-card');

        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animated');
            }
        });
    }

    // Initial check
    animateOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add hover effect to journey cards
    const journeyCards = document.querySelectorAll('.journey-card');
    journeyCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.borderLeftColor = 'var(--accent)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.borderLeftColor = 'var(--secondary)';
        });
    });

    // Add hover effect to mission/vision cards
    const mvCards = document.querySelectorAll('.mv-card');
    mvCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.1)';
            icon.style.color = 'var(--accent)';
        });

        card.addEventListener('mouseleave', function () {
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1)';
            icon.style.color = 'var(--secondary)';
        });
    });
});