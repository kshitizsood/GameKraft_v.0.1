// Console Pages JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Initialize GSAP animations
    initAnimations();
    
    // Load games data based on the current page
    loadGamesData();
    
    // Initialize filter buttons
    initFilterButtons();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('#mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
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
    }
}

// GSAP Animations
function initAnimations() {
    if (typeof gsap !== 'undefined') {
        // Register ScrollTrigger plugin if available
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        // Hero section animations
        gsap.from('.console-hero-title', { 
            opacity: 0, 
            y: -30, 
            duration: 1,
            ease: "power3.out"
        });
        
        gsap.from('.console-hero-subtitle', { 
            opacity: 0, 
            y: 30, 
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        });
        
        // Console info section animations
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from('.console-image', {
                scrollTrigger: {
                    trigger: '.console-info-content',
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                x: -50,
                duration: 1,
                ease: "power3.out"
            });
            
            gsap.from('.console-details', {
                scrollTrigger: {
                    trigger: '.console-info-content',
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                x: 50,
                duration: 1,
                delay: 0.3,
                ease: "power3.out"
            });
            
            gsap.from('.console-features li', {
                scrollTrigger: {
                    trigger: '.console-features',
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                x: 30,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out"
            });
            
            gsap.from('.filter-btn', {
                scrollTrigger: {
                    trigger: '.games-filter',
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 20,
                stagger: 0.1,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
            
            gsap.from('.cta-content', {
                scrollTrigger: {
                    trigger: '.cta-section',
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out"
            });
        }
    }
}

// Game Data
const ps5Games = [
    {
        title: "God of War Ragnarök",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2022,
        rating: 9.5
    },
    {
        title: "Horizon Forbidden West",
        genre: "Action RPG",
        categories: ["action", "rpg", "adventure"],
        releaseYear: 2022,
        rating: 9.2
    },
    {
        title: "Spider-Man: Miles Morales",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2020,
        rating: 8.8
    },
    {
        title: "Demon's Souls",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2020,
        rating: 9.3
    },
    {
        title: "Ratchet & Clank: Rift Apart",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2021,
        rating: 8.9
    },
    {
        title: "Returnal",
        genre: "Third-person Shooter",
        categories: ["action", "adventure"],
        releaseYear: 2021,
        rating: 8.5
    },
    {
        title: "Final Fantasy XVI",
        genre: "Action RPG",
        categories: ["rpg", "adventure"],
        releaseYear: 2023,
        rating: 8.7
    },
    {
        title: "Gran Turismo 7",
        genre: "Racing",
        categories: ["sports"],
        releaseYear: 2022,
        rating: 8.6
    },
    {
        title: "Hogwarts Legacy",
        genre: "Action RPG",
        categories: ["rpg", "adventure"],
        releaseYear: 2023,
        rating: 8.9
    },
    {
        title: "Elden Ring",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2022,
        rating: 9.6
    },
    {
        title: "FIFA 23",
        genre: "Sports",
        categories: ["sports"],
        releaseYear: 2022,
        rating: 8.0
    },
    {
        title: "NBA 2K23",
        genre: "Sports",
        categories: ["sports"],
        releaseYear: 2022,
        rating: 8.2
    }
];

const ps4Games = [
    {
        title: "The Last of Us Part II",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2020,
        rating: 9.3
    },
    {
        title: "Ghost of Tsushima",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2020,
        rating: 9.2
    },
    {
        title: "God of War",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2018,
        rating: 9.8
    },
    {
        title: "Bloodborne",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2015,
        rating: 9.4
    },
    {
        title: "Uncharted 4",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2016,
        rating: 9.5
    },
    {
        title: "Horizon Zero Dawn",
        genre: "Action RPG",
        categories: ["action", "rpg", "adventure"],
        releaseYear: 2017,
        rating: 9.3
    },
    {
        title: "Red Dead Redemption 2",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2018,
        rating: 9.7
    },
    {
        title: "Spider-Man",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2018,
        rating: 9.2
    },
    {
        title: "FIFA 22",
        genre: "Sports",
        categories: ["sports"],
        releaseYear: 2021,
        rating: 8.1
    },
    {
        title: "NBA 2K22",
        genre: "Sports",
        categories: ["sports"],
        releaseYear: 2021,
        rating: 8.0
    },
    {
        title: "Final Fantasy VII Remake",
        genre: "Action RPG",
        categories: ["rpg", "adventure"],
        releaseYear: 2020,
        rating: 9.0
    },
    {
        title: "Persona 5 Royal",
        genre: "RPG",
        categories: ["rpg"],
        releaseYear: 2020,
        rating: 9.5
    }
];

const ps3Games = [
    {
        title: "The Last of Us",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2013,
        rating: 9.7
    },
    {
        title: "Uncharted 3: Drake's Deception",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2011,
        rating: 9.2
    },
    {
        title: "Metal Gear Solid 4: Guns of the Patriots",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2008,
        rating: 9.4
    },
    {
        title: "Red Dead Redemption",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2010,
        rating: 9.5
    },
    {
        title: "Grand Theft Auto V",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2013,
        rating: 9.6
    },
    {
        title: "Journey",
        genre: "Adventure",
        categories: ["adventure"],
        releaseYear: 2012,
        rating: 9.0
    },
    {
        title: "Batman: Arkham City",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2011,
        rating: 9.3
    },
    {
        title: "BioShock Infinite",
        genre: "First-person Shooter",
        categories: ["action", "adventure"],
        releaseYear: 2013,
        rating: 9.4
    },
    {
        title: "Dark Souls",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2011,
        rating: 9.0
    },
    {
        title: "Demon's Souls",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2009,
        rating: 8.9
    },
    {
        title: "God of War III",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2010,
        rating: 9.3
    },
    {
        title: "Mass Effect 2",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2010,
        rating: 9.5
    },
    {
        title: "FIFA 14",
        genre: "Sports",
        categories: ["sports"],
        releaseYear: 2013,
        rating: 8.5
    },
    {
        title: "NBA 2K14",
        genre: "Sports",
        categories: ["sports"],
        releaseYear: 2013,
        rating: 8.6
    }
];

const ps2Games = [
    {
        title: "Shadow of the Colossus",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2005,
        rating: 9.7
    },
    {
        title: "Grand Theft Auto: San Andreas",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2004,
        rating: 9.6
    },
    {
        title: "Final Fantasy X",
        genre: "RPG",
        categories: ["rpg"],
        releaseYear: 2001,
        rating: 9.5
    },
    {
        title: "Metal Gear Solid 3: Snake Eater",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2004,
        rating: 9.6
    },
    {
        title: "God of War II",
        genre: "Action-Adventure",
        categories: ["action"],
        releaseYear: 2007,
        rating: 9.4
    },
    {
        title: "Kingdom Hearts II",
        genre: "Action RPG",
        categories: ["action", "rpg"],
        releaseYear: 2005,
        rating: 9.3
    },
    {
        title: "Resident Evil 4",
        genre: "Survival Horror",
        categories: ["action", "adventure"],
        releaseYear: 2005,
        rating: 9.5
    },
    {
        title: "Gran Turismo 4",
        genre: "Racing",
        categories: ["sports"],
        releaseYear: 2004,
        rating: 9.3
    },
    {
        title: "Okami",
        genre: "Action-Adventure",
        categories: ["action", "adventure"],
        releaseYear: 2006,
        rating: 9.4
    },
    {
        title: "Persona 4",
        genre: "RPG",
        categories: ["rpg"],
        releaseYear: 2008,
        rating: 9.3
    },
    {
        title: "Devil May Cry 3",
        genre: "Action",
        categories: ["action"],
        releaseYear: 2005,
        rating: 9.2
    },
    {
        title: "Ico",
        genre: "Action-Adventure",
        categories: ["adventure"],
        releaseYear: 2001,
        rating: 9.1
    }
];

// Function to load games data based on current page
function loadGamesData() {
    const currentPage = getCurrentPage();
    let gamesData;
    let gridId;

    if (currentPage === 'ps5') {
        gamesData = ps5Games;
        gridId = 'ps5-games-grid';
    } else if (currentPage === 'ps4') {
        gamesData = ps4Games;
        gridId = 'ps4-games-grid';
    } else if (currentPage === 'ps3') {
        gamesData = ps3Games;
        gridId = 'ps3-games-grid';
    } else if (currentPage === 'ps2') {
        gamesData = ps2Games;
        gridId = 'ps2-games-grid';
    } else {
        return; // Exit if not on a console page
    }

    // Get the games grid element
    const gamesGrid = document.getElementById(gridId) || document.querySelector('.games-grid');
    
    if (gamesGrid) {
        // Clear existing content
        gamesGrid.innerHTML = '';
        
        // Add game cards with staggered animations
        gamesData.forEach((game, index) => {
            const gameCard = createGameCard(game);
            gamesGrid.appendChild(gameCard);
            
            // Add visible class with a delay for staggered animation
            setTimeout(() => {
                gameCard.classList.add('visible');
            }, 100 * index);
        });
    }
}

// Function to create a game card
function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.dataset.categories = game.categories.join(' ');
    
    // Create game image
    const gameImage = document.createElement('div');
    gameImage.className = 'game-image';
    const img = document.createElement('img');
    img.src = 'images/game-placeholder.jpg';
    img.alt = game.title;
    gameImage.appendChild(img);
    
    // Create game info
    const gameInfo = document.createElement('div');
    gameInfo.className = 'game-info';
    
    const title = document.createElement('h3');
    title.className = 'game-title';
    title.textContent = game.title;
    
    const genre = document.createElement('p');
    genre.className = 'game-genre';
    genre.textContent = game.genre;
    
    const details = document.createElement('div');
    details.className = 'game-details';
    
    const releaseYear = document.createElement('span');
    releaseYear.className = 'release-year';
    releaseYear.innerHTML = `<i class="far fa-calendar-alt"></i> ${game.releaseYear}`;
    
    const rating = document.createElement('span');
    rating.className = 'rating';
    rating.innerHTML = `<i class="fas fa-star"></i> ${game.rating}`;
    
    details.appendChild(releaseYear);
    details.appendChild(rating);
    
    gameInfo.appendChild(title);
    gameInfo.appendChild(genre);
    gameInfo.appendChild(details);
    
    gameCard.appendChild(gameImage);
    gameCard.appendChild(gameInfo);
    
    return gameCard;
}

// Initialize Filter Buttons
function initFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                // Get the filter value
                const filterValue = button.getAttribute('data-filter');
                
                // Filter the games
                filterGames(filterValue);
            });
        });
    }
}

// Function to filter games
function filterGames(filter) {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        const categories = card.dataset.categories.split(' ');
        
        if (filter === 'all' || categories.includes(filter)) {
            card.style.display = 'block';
            // Add visible class with a slight delay for staggered animation
            setTimeout(() => {
                card.classList.add('visible');
            }, 100 * Array.from(gameCards).indexOf(card));
        } else {
            card.classList.remove('visible');
            // Hide after animation completes
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Get Current Page
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    
    if (filename.includes('ps5')) {
        return 'ps5';
    } else if (filename.includes('ps4')) {
        return 'ps4';
    } else if (filename.includes('ps3')) {
        return 'ps3';
    } else if (filename.includes('ps2')) {
        return 'ps2';
    }
    
    return 'ps5'; // Default to PS5
} 