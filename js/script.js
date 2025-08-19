const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Testimonials Data
const testimonials = [
    {
        name: "Rajesh Mehta",
        position: "CEO, FoodPack India",
        text: "Prime Polymers has been our trusted supplier for food containers for over 8 years. Their quality is consistently excellent and their delivery timelines are reliable.",
        image: "images/testimonials/img004.avif",
        active: true
    },
    {
        name: "Priya Sharma",
        position: "Purchase Manager, MediCare Pharma",
        text: "We switched to Prime Polymers for our pharmaceutical bottles and haven't looked back. Their products meet all our stringent quality requirements.",
        image: "images/testimonials/img004.avif",
        active: false
    },
    {
        name: "Amit Patel",
        position: "Operations Head, SuperMart Retail",
        text: "The retail packaging solutions from Prime Polymers have helped elevate our product presentation. Their team understands branding needs perfectly.",
        image: "images/testimonials/img004.avif",
        active: false
    },
    {
        name: "Deepak Singh",
        position: "Plant Manager, IndusTech",
        text: "For our industrial plastic components, Prime Polymers delivers precision-engineered products that withstand tough operating conditions.",
        image: "images/testimonials/img004.avif",
        active: false
    },
    {
        name: "Neha Gupta",
        position: "Director, EcoPack Solutions",
        text: "Their eco-friendly plastic options helped us transition to sustainable packaging without compromising on quality or durability.",
        image: "images/testimonials/img004.avif",
        active: false
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // loadProducts();
    loadTestimonials();
    setupContactForm();
    setupNavbarScroll();
});

// Load testimonials into carousel
function loadTestimonials() {
    const testimonialCarousel = document.querySelector('#testimonialCarousel .carousel-inner');

    testimonials.forEach((testimonial, index) => {
        const testimonialItem = document.createElement('div');
        testimonialItem.className = `carousel-item ${testimonial.active ? 'active' : ''}`;
        testimonialItem.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="testimonial-card">
                        <div class="testimonial-text">
                            <p>${testimonial.text}</p>
                        </div>
                        <div class="client-info">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="client-img">
                            <div>
                                <h6 class="mb-1">${testimonial.name}</h6>
                                <p class="text-muted small mb-0">${testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        testimonialCarousel.appendChild(testimonialItem);
    });
}


// Popup Contact Form
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('contactPopup');
    const closeBtn = document.getElementById('closePopup');
    const contactForm = document.getElementById('contactForm1');

    // Show popup after 60 seconds
    setTimeout(function () {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
    }, 60000);

    // Close popup when X button is clicked
    closeBtn.addEventListener('click', function () {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close popup when clicking outside the popup content
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });

    // Form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const product = document.getElementById('productType').value;

        // Here you would typically send the data to a server
        console.log('Form submitted:', { name, email, phone, message, product });

        // Show success message
        alert('Thank you for your message! We will get back to you soon.');

        // Reset form and close popup
        contactForm.reset();
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close popup when pressing Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
});