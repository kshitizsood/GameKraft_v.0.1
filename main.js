// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Toggle hamburger animation
        const bars = menuToggle.querySelectorAll('.bar');
        bars[0].classList.toggle('animate');
        bars[1].classList.toggle('animate');
        bars[2].classList.toggle('animate');
    });
    
    // Close menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const bars = menuToggle.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.remove('animate'));
        });
    });
    
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        // Initialize GSAP animations
        initAnimations();
    } else {
        console.warn('GSAP library not loaded. Animations will not work.');
    }
    
    // Load game data
    loadGameData();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize active nav link tracking
    initActiveNavTracking();
});

// GSAP Animations
function initAnimations() {
    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-title', { 
        opacity: 0, 
        y: -50, 
        duration: 1,
        ease: "power3.out"
    });
    
    heroTl.from('.hero-subtitle', { 
        opacity: 0, 
        y: 30, 
        duration: 1,
        ease: "power3.out"
    }, "-=0.6");
    
    heroTl.from('.hero .btn', { 
        opacity: 0, 
        y: 30, 
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.6");
    
    // Floating elements animation
    gsap.to('.floating-element:nth-child(1)', {
        y: -30,
        x: 20,
        rotation: 15,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
    
    gsap.to('.floating-element:nth-child(2)', {
        y: 30,
        x: -20,
        rotation: -15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
    });
    
    gsap.to('.floating-element:nth-child(3)', {
        y: -20,
        x: -15,
        rotation: 10,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
    });
    
    gsap.to('.floating-element:nth-child(4)', {
        y: 25,
        x: 15,
        rotation: -10,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
    });
    
    // Check if ScrollTrigger is available
    if (typeof ScrollTrigger !== 'undefined') {
        // Animate section titles on scroll
        const sectionTitles = document.querySelectorAll('.section-title');
        
        sectionTitles.forEach(title => {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
        });
        
        // Animate about section
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent) {
            gsap.from('.about-text p', {
                scrollTrigger: {
                    trigger: '.about-content',
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 30,
                stagger: 0.3,
                duration: 0.8,
                ease: "power2.out"
            });
            
            gsap.from('.image-container', {
                scrollTrigger: {
                    trigger: '.about-content',
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                scale: 0.8,
                duration: 1,
                ease: "back.out(1.7)",
                delay: 0.3
            });
        }
        
        // Animate console sections
        document.querySelectorAll('.console-section').forEach((section, index) => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
            });
        });
        
        // Animate contact section
        gsap.from('.contact-item', {
            scrollTrigger: {
                trigger: '.contact-content',
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: -30,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out"
        });
        
        gsap.from('.social-links a', {
            scrollTrigger: {
                trigger: '.social-links',
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.6,
            ease: "back.out(1.7)"
        });
        
        gsap.from('.contact-form', {
            scrollTrigger: {
                trigger: '.contact-form',
                start: "top 70%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            x: 30,
            duration: 0.8,
            ease: "power2.out"
        });
        
        // Animate footer
        gsap.from('.footer-content', {
            scrollTrigger: {
                trigger: 'footer',
                start: "top 90%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out"
        });
        
        gsap.from('.footer-map', {
            scrollTrigger: {
                trigger: '.footer-map',
                start: "top 95%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 0.2
        });
    } else {
        console.warn('ScrollTrigger plugin not loaded. Scroll animations will not work.');
    }
}

// Game Data
const ps5Games = [
    {
        title: "God of War Ragnarök",
        genre: "Action-Adventure"
    },
    {
        title: "Horizon Forbidden West",
        genre: "Action RPG"
    },
    {
        title: "Spider-Man: Miles Morales",
        genre: "Action-Adventure"
    },
    {
        title: "Demon's Souls",
        genre: "Action RPG"
    },
    {
        title: "Ratchet & Clank: Rift Apart",
        genre: "Action-Adventure"
    },
    {
        title: "Returnal",
        genre: "Third-person Shooter"
    }
];

const ps4Games = [
    {
        title: "The Last of Us Part II",
        genre: "Action-Adventure"
    },
    {
        title: "Ghost of Tsushima",
        genre: "Action-Adventure"
    },
    {
        title: "God of War",
        genre: "Action-Adventure"
    },
    {
        title: "Bloodborne",
        genre: "Action RPG"
    },
    {
        title: "Uncharted 4",
        genre: "Action-Adventure"
    },
    {
        title: "Horizon Zero Dawn",
        genre: "Action RPG"
    }
];

const ps3Games = [
    "The Last of Us",
    "Uncharted 3: Drake's Deception",
    "Metal Gear Solid 4: Guns of the Patriots",
    "Red Dead Redemption",
    "Grand Theft Auto V",
    "Journey",
    "Batman: Arkham City",
    "BioShock Infinite",
    "Dark Souls",
    "Demon's Souls",
    "God of War III",
    "Mass Effect 2"
];

const ps2Games = [
    "God of War II",
    "Shadow of the Colossus",
    "Metal Gear Solid 3: Snake Eater",
    "Final Fantasy X",
    "Grand Theft Auto: San Andreas",
    "Kingdom Hearts II",
    "Resident Evil 4",
    "Devil May Cry 3",
    "Ico",
    "Okami",
    "Persona 4",
    "Silent Hill 2"
];

// Load Game Data
function loadGameData() {
    // Load PS5 Games
    const ps5Grid = document.querySelector('.console-section:nth-child(1) .games-grid');
    if (ps5Grid) {
        ps5Games.forEach(game => {
            const gameCard = createGameCard(game);
            ps5Grid.appendChild(gameCard);
        });
    }
    
    // Load PS4 Games
    const ps4Grid = document.querySelector('.console-section:nth-child(2) .games-grid');
    if (ps4Grid) {
        ps4Games.forEach(game => {
            const gameCard = createGameCard(game);
            ps4Grid.appendChild(gameCard);
        });
    }
    
    // Load PS3 Games
    const ps3List = document.querySelector('.console-section:nth-child(3) .games-list');
    if (ps3List) {
        ps3Games.forEach(game => {
            const gameItem = createGameItem(game);
            ps3List.appendChild(gameItem);
        });
    }
    
    // Load PS2 Games
    const ps2List = document.querySelector('.console-section:nth-child(4) .games-list');
    if (ps2List) {
        ps2Games.forEach(game => {
            const gameItem = createGameItem(game);
            ps2List.appendChild(gameItem);
        });
    }
}

// Create Game Card
function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    
    // Create a placeholder div
    const imagePlaceholder = document.createElement('div');
    imagePlaceholder.className = 'image-placeholder';
    imagePlaceholder.innerHTML = `<span>${game.title}</span>`;
    gameCard.appendChild(imagePlaceholder);
    
    const gameInfo = document.createElement('div');
    gameInfo.className = 'game-info';
    
    const gameTitle = document.createElement('h4');
    gameTitle.className = 'game-title';
    gameTitle.textContent = game.title;
    
    const gameGenre = document.createElement('p');
    gameGenre.className = 'game-genre';
    gameGenre.textContent = game.genre;
    
    gameInfo.appendChild(gameTitle);
    gameInfo.appendChild(gameGenre);
    
    gameCard.appendChild(gameInfo);
    
    return gameCard;
}

// Create Game Item
function createGameItem(game) {
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';
    gameItem.textContent = game;
    
    return gameItem;
}

// Initialize Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Get the height of the navbar
                const navbarHeight = document.querySelector('header').offsetHeight;
                
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize Active Nav Tracking
function initActiveNavTracking() {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navbarHeight = document.querySelector('header').offsetHeight;
            
            if (pageYOffset >= sectionTop - navbarHeight - 50) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
} 