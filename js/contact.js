document.addEventListener('DOMContentLoaded', function () {
    // Expert button animation
    const expertBtn = document.getElementById('expertBtn');

    expertBtn.addEventListener('mouseenter', function () {
        this.classList.add('animate-pulse');
    });

    expertBtn.addEventListener('mouseleave', function () {
        this.classList.remove('animate-pulse');
    });

    expertBtn.addEventListener('click', function (e) {
        e.preventDefault();
        this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Connecting...';
        this.classList.remove('animate-pulse');

        // Simulate API call
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check me-2"></i> Connected!';
            alert('Our representative will call you shortly. Thank you!');
        }, 2000);
    });

    // Form validation
    const form = document.getElementById('gcpsForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Form is valid - simulate submission
            const submitBtn = form.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i> Processing...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check me-2"></i> Submitted!';
                alert('Thank you for your inquiry! Our team will contact you within 24 hours.');

                // Reset form after 2 seconds
                setTimeout(() => {
                    form.reset();
                    form.classList.remove('was-validated');
                    submitBtn.innerHTML = 'Submit Request <i class="fas fa-paper-plane ms-2"></i>';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        }

        form.classList.add('was-validated');
    }, false);

    // Input field animations
    const inputs = document.querySelectorAll('.form-control-custom');

    inputs.forEach(input => {
        // Add focus/blur effects
        input.addEventListener('focus', function () {
            this.parentElement.querySelector('label').style.color = 'var(--primary)';
        });

        input.addEventListener('blur', function () {
            if (!this.value) {
                this.parentElement.querySelector('label').style.color = 'var(--gray)';
            }
        });

        // Add character counter for message textarea
        if (input.id === 'messageTextarea') {
            const counter = document.createElement('div');
            counter.className = 'form-text text-end text-muted small';
            counter.textContent = '0/500';
            input.parentElement.appendChild(counter);

            input.addEventListener('input', function () {
                const remaining = 500 - this.value.length;
                counter.textContent = `${this.value.length}/500`;

                if (remaining < 50) {
                    counter.style.color = '#dc3545';
                } else if (remaining < 100) {
                    counter.style.color = '#ffc107';
                } else {
                    counter.style.color = 'var(--gray)';
                }
            });
        }
    });

    // Phone number formatting
    const phoneInput = document.getElementById('phoneInput');

    phoneInput.addEventListener('input', function (e) {
        const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });

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