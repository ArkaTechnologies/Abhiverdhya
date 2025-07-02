// Products Data
const products = [
    {
        id: 1,
        name: "Food-Grade Containers",
        image: "images/products/zipper01.avif",
        description: "FDA-approved plastic containers for safe food storage and packaging.",
        features: [
            "BPA-free materials",
            "Microwave & freezer safe",
            "Airtight lids available",
            "Various sizes from 100ml to 20L"
        ]
    },
    {
        id: 2,
        name: "Pharma Bottles",
        image: "images/products/cover.avif",
        description: "Medical-grade plastic bottles compliant with pharmaceutical standards.",
        features: [
            "Child-resistant caps",
            "Amber/clear options",
            "Tamper-evident seals",
            "Custom labeling"
        ]
    },
    {
        id: 3,
        name: "Industrial Sheets",
        image: "images/products/industrial-sheets.jpg",
        description: "High-strength plastic sheets for industrial applications.",
        features: [
            "1mm to 50mm thickness",
            "Chemical resistant",
            "UV stabilized options",
            "Custom cutting available"
        ]
    },
    /* {
        id: 4,
        name: "Retail Packaging",
        image: "images/products/retail-packaging.jpg",
        description: "Attractive plastic packaging solutions for retail products.",
        features: [
            "Custom shapes & sizes",
            "Transparent/colored options",
            "Eco-friendly materials",
            "Branding options"
        ]
    },
    {
        id: 5,
        name: "Plastic Covers",
        image: "images/products/plastic-covers.jpg",
        description: "Durable plastic covers for various protection needs.",
        features: [
            "Weather resistant",
            "Custom sizes",
            "Reinforced edges",
            "Multiple color options"
        ]
    },
    {
        id: 6,
        name: "Custom Molding",
        image: "images/products/custom-molding.jpg",
        description: "Tailored plastic components to your specifications.",
        features: [
            "Injection molding",
            "Blow molding",
            "Thermoforming",
            "Prototype to production"
        ]
    } */
];

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
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadTestimonials();
    setupContactForm();
    setupNavbarScroll();
});

// Load products into the products section
function loadProducts() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCol = document.createElement('div');
        productCol.className = 'col-md-6 col-lg-4 mb-4';
        productCol.innerHTML = `
            <div class="card product-card h-100 slide-in-up">
                <img src="${product.image}" class="card-img-top product-img" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <ul class="features-list ps-3">
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <button class="btn btn-outline-primary">Request Quote</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCol);
    });
}

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

// Setup contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Simple validation
            if (!name || !email) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the data to a server
            // For this static example, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll contact you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// Navbar scroll effect
function setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Script to show popup after 10 seconds
window.onload = function () {
    setTimeout(() => {
      document.getElementById("productPopup").style.display = "block";
    }, 10000);
};

  function closePopup() {
    document.getElementById("productPopup").style.display = "none";
}

/* Back to top */
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
            // Optional: Add pulse effect when button appears
            backToTopButton.classList.add('pulse');
        } else {
            backToTopButton.classList.remove('show');
            backToTopButton.classList.remove('pulse');
        }
    });
    
    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});