// Membership Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu toggle
    initMobileMenuToggle();
    
    // Initialize GSAP animations
    initAnimations();
    
    // Initialize FAQ toggles
    initFaqToggles();
});

// Mobile Menu Toggle
function initMobileMenuToggle() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when a nav link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// GSAP Animations
function initAnimations() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5
    });
    
    gsap.from('.console-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8
    });
    
    // Membership cards animations
    gsap.from('.membership-card', {
        scrollTrigger: {
            trigger: '.membership-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
    });
    
    // FAQ animations
    gsap.from('.faq-item', {
        scrollTrigger: {
            trigger: '.faq-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1
    });
    
    // CTA section animations
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.8
    });
}

// FAQ Toggles
function initFaqToggles() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });
} 