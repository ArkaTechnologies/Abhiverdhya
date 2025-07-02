// Announcements data - can be updated without changing HTML
const announcements = [
    "Special offer: 15% discount on orders above ₹50,000 this month!",
    "New product line: Eco-friendly biodegradable plastics now available",
    "We're hiring! Visit our careers page for current openings",
    "Factory expansion complete - now with 30% increased production capacity",
    "Holiday notice: Closed on Diwali (November 12)"
];

// Rotate announcements every 8 seconds
function rotateAnnouncements() {
    const announcementElement = document.getElementById('current-announcement');
    let currentIndex = 0;
    
    if (announcementElement) {
        // Set initial announcement
        announcementElement.textContent = announcements[currentIndex];
        
        // Rotate through announcements
        setInterval(() => {
            currentIndex = (currentIndex + 1) % announcements.length;
            
            // Fade out
            announcementElement.style.opacity = 0;
            
            // After fade out completes, change text and fade in
            setTimeout(() => {
                announcementElement.textContent = announcements[currentIndex];
                announcementElement.style.opacity = 1;
            }, 500);
        }, 8000); // Change every 8 seconds
    }
}

// Start rotation when DOM is loaded
document.addEventListener('DOMContentLoaded', rotateAnnouncements);