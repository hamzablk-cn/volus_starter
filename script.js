// JavaScript for Coming Soon Page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the page
    console.log('VOLUS Coming Soon Page Loaded');
    
    // Add any additional interactive functionality here
    // Currently, all animations are handled by CSS
    
    // Optional: Add click handlers, form submissions, etc.
    // Example: Track user interactions
    
    // Smooth scroll prevention (since this is a single page)
    document.body.style.overflow = 'hidden';
    
    // Optional: Add keyboard navigation or accessibility features
    document.addEventListener('keydown', function(e) {
        // Handle any keyboard interactions if needed
        if (e.key === 'Escape') {
            // Future: Could be used to close modals or reset animations
        }
    });
    
    // Optional: Add performance optimization for animations
    // Pause animations when page is not visible
    document.addEventListener('visibilitychange', function() {
        const elements = document.querySelectorAll('.floating-circle, .sparkle, .dot, .logo-container, .coming-soon-text, .underline');
        
        if (document.hidden) {
            elements.forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        } else {
            elements.forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });
});
