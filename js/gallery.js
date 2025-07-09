// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Get all sections and nav items
    const sections = document.querySelectorAll('.process-section');
    const navItems = document.querySelectorAll('.process-nav-item');

    // Function to check which section is in view
    function checkActiveSection() {
        let activeIndex = 0;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                activeIndex = index;

                // Add active class to content elements when section is in view
                const title = section.querySelector('.process-title');
                const desc = section.querySelector('.process-desc');
                const image = section.querySelector('.process-image');

                if (title && !title.classList.contains('active')) {
                    title.classList.add('active');
                }
                if (desc && !desc.classList.contains('active')) {
                    desc.classList.add('active');
                }
                if (image && !image.classList.contains('active')) {
                    image.classList.add('active');
                }
            }
        });

        // Update nav items
        navItems.forEach((item, index) => {
            if (index === activeIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Add click event to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            if (section) {
                window.scrollTo({
                    top: section.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initial check
    checkActiveSection();

    // Check on scroll
    window.addEventListener('scroll', checkActiveSection);

    // Add animation classes when elements come into view
    function animateOnScroll() {
        const elements = document.querySelectorAll('.process-title, .process-desc, .process-image');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight * 0.8) {
                element.classList.add('active');
            }
        });
    }

    // Initial animation check
    animateOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Responsive adjustments
    function handleResize() {
        if (window.innerWidth < 768) {
            // Mobile-specific adjustments
        } else {
            // Desktop adjustments
        }
    }

    // Initial call
    handleResize();

    // Listen for resize
    window.addEventListener('resize', handleResize);
});
// Filter products by category
function filterProducts(category) {
    const products = document.querySelectorAll('[data-category]');

    products.forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Filter products
            const filter = this.dataset.filter;
            filterProducts(filter);
        });
    });

    // Initial animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});