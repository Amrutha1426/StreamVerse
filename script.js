// Enhanced sample data with real anime/cartoon/drama information
const sampleData = {
    anime: [
        {
            id: 1,
            title: "Attack on Titan",
            originalTitle: "進撃の巨人",
            type: "anime",
            genre: ["action", "fantasy"],
            year: 2023,
            status: "completed",
            rating: 9.2,
            episodes: 24,
            duration: "24 min",
            description: "Humanity fights for survival against giant humanoid Titans in this epic dark fantasy series.",
            poster: "https://image.tmdb.org/t/p/w400/aiy35Evcofzl7hASZZvsFgltHTX.jpg", // Unique poster
            country: "Japan",
            language: "Japanese",
            videoUrl: "https://www.youtube.com/embed/MGRm4IzK1SQ"
        },
        {
            id: 2,
            title: "Demon Slayer",
            originalTitle: "鬼滅の刃",
            type: "anime",
            genre: ["action", "fantasy"],
            year: 2023,
            status: "ongoing",
            rating: 8.8,
            episodes: 32,
            duration: "24 min",
            description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
            poster: "https://image.tmdb.org/t/p/w400/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
            country: "Japan",
            language: "Japanese",
            videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4"
        },
        {
            id: 3,
            title: "Jujutsu Kaisen",
            originalTitle: "呪術廻戦",
            type: "anime",
            genre: ["action", "fantasy"],
            year: 2024,
            status: "ongoing",
            rating: 8.9,
            episodes: 12,
            duration: "24 min",
            description: "Students at a supernatural school fight cursed spirits threatening humanity.",
            poster: "https://image.tmdb.org/t/p/w400/3Cj7F4fA6CwE6iY2cQb2nF1rF2A.jpg",
            country: "Japan",
            language: "Japanese",
            videoUrl: "https://www.youtube.com/embed/4A_X-Dvl0ws"
        },
        {
            id: 4,
            title: "Spirited Away",
            originalTitle: "千と千尋の神隠し",
            type: "anime",
            genre: ["fantasy", "family"],
            year: 2021,
            status: "completed",
            rating: 9.8,
            episodes: 1,
            duration: "125 min",
            description: "A young girl enters a world ruled by gods and witches where humans are turned into beasts.",
            poster: "https://image.tmdb.org/t/p/w400/oRvMaJOmapypFUcQqpgHMZA6qL9.jpg",
            country: "Japan",
            language: "Japanese",
            videoUrl: "https://www.youtube.com/embed/ByXuk9QqQkk"
        }
    ],
    cartoons: [
        {
            id: 5,
            title: "Avatar: The Last Airbender",
            originalTitle: "Avatar: The Last Airbender",
            type: "cartoon",
            genre: ["fantasy", "action"],
            year: 2023,
            status: "completed",
            rating: 9.5,
            episodes: 61,
            duration: "22 min",
            description: "A young airbender's journey to master all four elements and save the world.",
            poster: "https://i.imgur.com/8Q2QyQp.jpg",
            country: "USA",
            language: "English",
            videoUrl: "https://www.youtube.com/embed/d1EnW4kn2rg"
        },
        {
            id: 6,
            title: "The Owl House",
            originalTitle: "The Owl House",
            type: "cartoon",
            genre: ["fantasy", "comedy"],
            year: 2024,
            status: "ongoing",
            rating: 8.4,
            episodes: 15,
            duration: "22 min",
            description: "A teenage girl discovers a magical world and learns to become a witch.",
            poster: "https://static.wikia.nocookie.net/disney/images/7/7e/Owl_House_S2_Poster.png",
            country: "USA",
            language: "English",
            videoUrl: "https://www.youtube.com/embed/3K-OXabQvgE"
        },
        {
            id: 7,
            title: "Gravity Falls",
            originalTitle: "Gravity Falls",
            type: "cartoon",
            genre: ["mystery", "comedy"],
            year: 2021,
            status: "completed",
            rating: 9.3,
            episodes: 40,
            duration: "22 min",
            description: "Twins discover supernatural mysteries in a strange Oregon town during summer vacation.",
            poster: "https://static.wikia.nocookie.net/gravityfalls/images/6/6b/Gravity_Falls_-_Season_2_Poster.jpg",
            country: "USA",
            language: "English",
            videoUrl: "https://www.youtube.com/embed/X2DUpDxFJyg"
        },
        {
            id: 8,
            title: "Steven Universe",
            originalTitle: "Steven Universe",
            type: "cartoon",
            genre: ["fantasy", "slice-of-life"],
            year: 2022,
            status: "completed",
            rating: 8.7,
            episodes: 160,
            duration: "11 min",
            description: "A young boy with magical powers protects the world with his gem guardians.",
            poster: "https://static.wikia.nocookie.net/steven-universe/images/2/2e/Steven_Universe_Poster.png",
            country: "USA",
            language: "English",
            videoUrl: "https://www.youtube.com/embed/rcs_4wKjbvs"
        }
    ],
    kdramas: [
        {
            id: 9,
            title: "Squid Game",
            originalTitle: "오징어 게임",
            type: "kdrama",
            genre: ["thriller", "action"],
            year: 2023,
            status: "ongoing",
            rating: 8.9,
            episodes: 16,
            duration: "60 min",
            description: "Desperate contestants compete in deadly children's games for a massive cash prize.",
            poster: "https://image.tmdb.org/t/p/w400/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
            country: "South Korea",
            language: "Korean",
            videoUrl: "https://www.youtube.com/embed/oqxAJKy0ii4"
        },
        {
            id: 10,
            title: "Business Proposal",
            originalTitle: "사내맞선",
            type: "kdrama",
            genre: ["romance", "comedy"],
            year: 2022,
            status: "completed",
            rating: 8.5,
            episodes: 12,
            duration: "70 min",
            description: "A fake relationship between an employee and her CEO leads to unexpected romance.",
            poster: "https://image.tmdb.org/t/p/w400/6Z6jXrL8Q8iZb6tF2tGf2iMEG9E.jpg",
            country: "South Korea",
            language: "Korean",
            videoUrl: "https://www.youtube.com/embed/bJxWCgjeYKE"
        },
        {
            id: 11,
            title: "Hometown's Embrace",
            originalTitle: "고향의 품",
            type: "kdrama",
            genre: ["romance", "slice-of-life"],
            year: 2024,
            status: "ongoing",
            rating: 8.3,
            episodes: 8,
            duration: "65 min",
            description: "A city dweller returns to their hometown and rediscovers love and family.",
            poster: "https://i.imgur.com/8Q2QyQp.jpg", // Generic K-drama poster
            country: "South Korea",
            language: "Korean",
            videoUrl: "https://www.youtube.com/embed/Ke1Y3P9D0Bc"
        },
        {
            id: 12,
            title: "Crash Landing on You",
            originalTitle: "사랑의 불시착",
            type: "kdrama",
            genre: ["romance", "comedy"],
            year: 2021,
            status: "completed",
            rating: 9.4,
            episodes: 16,
            duration: "70 min",
            description: "A South Korean heiress crash lands in North Korea and falls in love with a soldier.",
            poster: "https://image.tmdb.org/t/p/w400/9qk6K1lqXWiwxupCSvJz5lG1fZz.jpg",
            country: "South Korea",
            language: "Korean",
            videoUrl: "https://www.youtube.com/embed/GVQGp4wntxA"
        }
    ],
    cdramas: [
        {
            id: 13,
            title: "The Untamed",
            originalTitle: "陈情令",
            type: "cdrama",
            genre: ["fantasy", "romance"],
            year: 2022,
            status: "completed",
            rating: 8.7,
            episodes: 50,
            duration: "45 min",
            description: "A tale of cultivation, friendship, and love in ancient China with supernatural elements.",
            poster: "https://image.tmdb.org/t/p/w400/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg",
            country: "China",
            language: "Mandarin",
            videoUrl: "https://www.youtube.com/embed/lE90tKCqxNs"
        },
        {
            id: 14,
            title: "Love Like the Galaxy",
            originalTitle: "星汉灿烂",
            type: "cdrama",
            genre: ["romance", "historical"],
            year: 2024,
            status: "ongoing",
            rating: 8.6,
            episodes: 20,
            duration: "45 min",
            description: "A smart young woman navigates court politics and romance in ancient China.",
            poster: "https://img2.doubanio.com/view/photo/l/public/p2875299646.webp", // Official Love Like the Galaxy poster
            country: "China",
            language: "Mandarin",
            videoUrl: "https://www.youtube.com/embed/kJMx7fQD7P8"
        },
        {
            id: 15,
            title: "The Story of Yanxi Palace",
            originalTitle: "延禧攻略",
            type: "cdrama",
            genre: ["historical", "romance"],
            year: 2021,
            status: "completed",
            rating: 9.1,
            episodes: 70,
            duration: "45 min",
            description: "A palace maid rises through the ranks in the Qing Dynasty imperial court.",
            poster: "https://image.tmdb.org/t/p/w400/3Q2IlbFhF38sZ4N2VNivg8XcX4J.jpg",
            country: "China",
            language: "Mandarin",
            videoUrl: "https://www.youtube.com/embed/JgQNHIbNjKw"
        },
        {
            id: 16,
            title: "Eternal Love",
            originalTitle: "三生三世十里桃花",
            type: "cdrama",
            genre: ["fantasy", "romance"],
            year: 2023,
            status: "completed",
            rating: 8.9,
            episodes: 58,
            duration: "45 min",
            description: "An immortal love story spanning three lifetimes in the realm of gods and mortals.",
            poster: "https://image.tmdb.org/t/p/w400/6agKYU5IQFpuDyUYPu39w7UCRrJ.jpg",
            country: "China",
            language: "Mandarin",
            videoUrl: "https://www.youtube.com/embed/3KfOGLgU_oo"
        }
    ]
};

// Combine all data for trending, newly released, and top rated
const allData = [...sampleData.anime, ...sampleData.cartoons, ...sampleData.kdramas, ...sampleData.cdramas];

// Create trending, newly released, and top rated from all data
const trending = allData.filter(item => [1, 2, 9, 5, 13, 10].includes(item.id));
const newlyReleased = allData.filter(item => item.year >= 2023);
const topRated = allData.filter(item => item.rating >= 9.0);

// Global variables
let currentFilter = 'all';
let currentGenre = '';
let currentStatus = '';
let currentYear = '';
let currentPage = 'home';
let userWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');

// DOM Elements
const searchInput = document.getElementById('searchInput');
const filterTabs = document.querySelectorAll('.filter-tab');
const genreFilter = document.getElementById('genreFilter');
const statusFilter = document.getElementById('statusFilter');
const yearFilter = document.getElementById('yearFilter');
const themeToggle = document.getElementById('themeToggle');
const showModal = document.getElementById('showModal');
const videoModal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
const videoTitle = document.getElementById('videoTitle');
const videoDescription = document.getElementById('videoDescription');
const closeBtns = document.querySelectorAll('.close');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// API Configuration (you can replace with real API keys)
const API_CONFIG = {
    TMDB_API_KEY: 'f6d5c55f5d7b0a75ee5be6f6a91fd36f',
    ANILIST_API_URL: 'https://graphql.anilist.co',
    KITSU_API_URL: 'https://kitsu.io/api/edge'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    populateContent();
    loadAPIData();
});

function initializeApp() {
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }
    
    // Load user watchlist
    userWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    
    // Show home page by default
    showPage('home');
}

function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => handleFilterTab(tab));
    });
    
    // Filter dropdowns
    genreFilter.addEventListener('change', handleFilters);
    statusFilter.addEventListener('change', handleFilters);
    yearFilter.addEventListener('change', handleFilters);
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Modal close buttons
    closeBtns.forEach(btn => {
        btn.addEventListener('click', closeModals);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModals();
        }
    });
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            showPage(page);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Footer navigation links
    document.querySelectorAll('a[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            showPage(page);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            document.querySelector(`.nav-link[data-page="${page}"]`).classList.add('active');
        });
    });
    
    // Hero buttons
    document.querySelectorAll('.hero-buttons button').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filters').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Collection cards functionality
    document.querySelectorAll('.collection-card').forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h3').textContent;
            showNotification(`🎉 Exploring ${title}...`, 'info');
            
            // Filter content based on collection
            if (title.includes('Romance Anime')) {
                showPage('anime');
                currentGenre = 'romance';
            } else if (title.includes('Fantasy C-Dramas')) {
                showPage('cdramas');
                currentGenre = 'fantasy';
            } else if (title.includes('Mystery K-Dramas')) {
                showPage('kdramas');
                currentGenre = 'thriller';
            } else if (title.includes('School Cartoons')) {
                showPage('cartoons');
                currentGenre = 'slice-of-life';
            }
            
            // Update UI
            genreFilter.value = currentGenre;
            populatePageContent();
        });
    });
}

function showPage(pageId) {
    currentPage = pageId;
    
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        populatePageContent();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function populateContent() {
    // Only populate home page content
    if (currentPage === 'home') {
        populateGrid('trendingGrid', trending);
        populateGrid('newlyReleasedGrid', newlyReleased);
        populateGrid('topRatedGrid', topRated);
    }
}

function populatePageContent() {
    switch(currentPage) {
        case 'home':
            populateContent();
            break;
        case 'anime':
            populateGrid('animeGrid', sampleData.anime);
            break;
        case 'cartoons':
            populateGrid('cartoonsGrid', sampleData.cartoons);
            break;
        case 'kdramas':
            populateGrid('kdramasGrid', sampleData.kdramas);
            break;
        case 'cdramas':
            populateGrid('cdramasGrid', sampleData.cdramas);
            break;
    }
}

function populateGrid(gridId, data) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const filteredData = filterData(data);
    
    if (filteredData.length === 0) {
        grid.innerHTML = '<div class="no-results">🔍 No content found matching your criteria.</div>';
        return;
    }
    
    filteredData.forEach(item => {
        const card = createContentCard(item);
        grid.appendChild(card);
    });
}

function createContentCard(item) {
    const card = document.createElement('div');
    card.className = 'content-card fade-in';
    card.onclick = () => showDetails(item);
    
    const typeEmoji = getTypeEmoji(item.type);
    const statusBadge = item.status === 'ongoing' ? '🔄 Ongoing' : '✅ Completed';
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${item.poster}" alt="${item.title}" loading="lazy">
            <div class="card-badge">${typeEmoji} ${item.type.toUpperCase()}</div>
            <div class="card-rating">
                <i class="fas fa-star"></i>
                ${item.rating}
            </div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${item.title}</h3>
            <div class="card-meta">
                <span>📅 ${item.year}</span>
                <span>📺 ${item.episodes} eps</span>
                <span>${statusBadge}</span>
            </div>
            <p class="card-description">${item.description}</p>
            <div class="card-genres">
                ${item.genre.map(g => `<span class="genre-tag">${getGenreEmoji(g)} ${g}</span>`).join('')}
            </div>
            <div class="card-actions">
                <button class="btn-small btn-watch" onclick="event.stopPropagation(); watchShow(${item.id})">
                    <i class="fas fa-play"></i> 🎬 Watch
                </button>
                <button class="btn-small btn-watchlist" onclick="event.stopPropagation(); toggleWatchlist(${item.id})">
                    <i class="fas fa-${userWatchlist.includes(item.id) ? 'check' : 'plus'}"></i> 
                    ${userWatchlist.includes(item.id) ? '✅ Added' : '➕ List'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function getTypeEmoji(type) {
    const emojis = {
        'anime': '🇯🇵',
        'cartoon': '🎨',
        'kdrama': '🇰🇷',
        'cdrama': '🇨🇳'
    };
    return emojis[type] || '📺';
}

function getGenreEmoji(genre) {
    const emojis = {
        'action': '⚔️',
        'romance': '💕',
        'comedy': '😂',
        'fantasy': '🧙‍♂️',
        'thriller': '🔍',
        'slice-of-life': '🌸',
        'mystery': '🕵️',
        'historical': '🏛️',
        'family': '👨‍👩‍👧‍👦'
    };
    return emojis[genre] || '🎭';
}

function filterData(data) {
    return data.filter(item => {
        const matchesType = currentFilter === 'all' || item.type === currentFilter;
        const matchesGenre = !currentGenre || item.genre.includes(currentGenre);
        const matchesStatus = !currentStatus || item.status === currentStatus;
        const matchesYear = !currentYear || item.year.toString() === currentYear;
        const matchesSearch = !searchInput.value || 
            item.title.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            item.originalTitle.toLowerCase().includes(searchInput.value.toLowerCase()) ||
            item.genre.some(g => g.toLowerCase().includes(searchInput.value.toLowerCase()));
        
        return matchesType && matchesGenre && matchesStatus && matchesYear && matchesSearch;
    });
}

function handleSearch() {
    if (currentPage === 'home') {
        populateContent();
    } else {
        populatePageContent();
    }
}

function handleFilterTab(tab) {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.type;
    
    if (currentPage === 'home') {
        populateContent();
    } else {
        populatePageContent();
    }
}

function handleFilters() {
    currentGenre = genreFilter.value;
    currentStatus = statusFilter.value;
    currentYear = yearFilter.value;
    
    if (currentPage === 'home') {
        populateContent();
    } else {
        populatePageContent();
    }
}

function watchShow(id) {
    const item = findItemById(id);
    if (item && item.videoUrl) {
        // Show video modal
        videoPlayer.src = item.videoUrl;
        videoTitle.textContent = item.title;
        videoDescription.textContent = item.description;
        videoModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        showNotification('🎬 Starting playback...', 'success');
    } else {
        showNotification('🚫 Video not available', 'error');
    }
}

function showDetails(item) {
    const modalBody = document.getElementById('modalBody');
    
    const episodes = generateEpisodes(item.episodes);
    const isInWatchlist = userWatchlist.includes(item.id);
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <img src="${item.poster}" alt="${item.title}" class="modal-poster">
            <div class="modal-info">
                <h2>${item.title}</h2>
                <p class="original-title">${item.originalTitle}</p>
                <div class="modal-meta">
                    <span><i class="fas fa-calendar"></i> 📅 ${item.year}</span>
                    <span><i class="fas fa-clock"></i> ⏱️ ${item.duration}</span>
                    <span><i class="fas fa-list"></i> 📺 ${item.episodes} episodes</span>
                    <span><i class="fas fa-globe"></i> 🌍 ${item.country}</span>
                    <span><i class="fas fa-language"></i> 🗣️ ${item.language}</span>
                </div>
                <div class="modal-rating">
                    <div class="stars">
                        ${generateStars(item.rating)}
                    </div>
                    <span>⭐ ${item.rating}/10</span>
                </div>
                <div class="card-genres">
                    ${item.genre.map(g => `<span class="genre-tag">${getGenreEmoji(g)} ${g}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="modal-description">
            <p>${item.description}</p>
        </div>
        <div class="modal-actions">
            <button class="btn-primary" onclick="watchShow(${item.id})">
                <i class="fas fa-play"></i> 🎬 Watch Now
            </button>
            <button class="btn-secondary" onclick="toggleWatchlist(${item.id})">
                <i class="fas fa-${isInWatchlist ? 'check' : 'plus'}"></i> 
                ${isInWatchlist ? '✅ In Watchlist' : '➕ Add to Watchlist'}
            </button>
            <button class="btn-secondary" onclick="shareShow(${item.id})">
                <i class="fas fa-share"></i> 📤 Share
            </button>
        </div>
        <div class="episode-list">
            <h3>📺 Episodes</h3>
            ${episodes}
        </div>
    `;
    
    showModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function generateEpisodes(count) {
    let episodes = '';
    for (let i = 1; i <= Math.min(count, 10); i++) {
        episodes += `
            <div class="episode-item" onclick="playEpisode(${i})">
                <div class="episode-number">${i}</div>
                <div class="episode-info">
                    <div class="episode-title">📺 Episode ${i}</div>
                    <div class="episode-duration">⏱️ 24 min</div>
                </div>
                <i class="fas fa-play"></i>
            </div>
        `;
    }
    if (count > 10) {
        episodes += `<div class="episode-item">📺 And ${count - 10} more episodes...</div>`;
    }
    return episodes;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 >= 1;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

function playEpisode(episodeNumber) {
    showNotification(`🎬 Playing Episode ${episodeNumber}`, 'success');
    closeModals();
}

function toggleWatchlist(id) {
    const index = userWatchlist.indexOf(id);
    if (index > -1) {
        userWatchlist.splice(index, 1);
        showNotification('❌ Removed from watchlist', 'success');
    } else {
        userWatchlist.push(id);
        showNotification('✅ Added to watchlist', 'success');
    }
    
    localStorage.setItem('watchlist', JSON.stringify(userWatchlist));
    
    // Update modal if open
    if (showModal.style.display === 'block') {
        const item = findItemById(id);
        if (item) showDetails(item);
    }
    
    // Update page content to reflect watchlist changes
    if (currentPage === 'home') {
        populateContent();
    } else {
        populatePageContent();
    }
}

function shareShow(id) {
    const item = findItemById(id);
    if (item && navigator.share) {
        navigator.share({
            title: item.title,
            text: item.description,
            url: window.location.href
        });
    } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
        showNotification('📋 Link copied to clipboard!', 'success');
    }
}

function findItemById(id) {
    return allData.find(item => item.id === id);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    showNotification(`🎨 Switched to ${newTheme} theme`, 'info');
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

function closeModals() {
    showModal.style.display = 'none';
    videoModal.style.display = 'none';
    videoPlayer.src = '';
    document.body.style.overflow = 'auto';
}

// API Integration Functions
async function loadAPIData() {
    try {
        // Load anime data from AniList (example)
        await loadAnimeFromAniList();
        
        // Load TV shows from TMDB (example)
        await loadShowsFromTMDB();
        
        showNotification('📡 API data loaded successfully!', 'success');
    } catch (error) {
        console.log('API loading failed, using sample data');
    }
}

async function loadAnimeFromAniList() {
    const query = `
        query {
            Page(page: 1, perPage: 10) {
                media(type: ANIME, sort: POPULARITY_DESC) {
                    id
                    title {
                        romaji
                        english
                        native
                    }
                    description
                    episodes
                    averageScore
                    genres
                    coverImage {
                        large
                    }
                    startDate {
                        year
                    }
                    status
                }
            }
        }
    `;
    
    try {
        const response = await fetch(API_CONFIG.ANILIST_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
        });
        
        const data = await response.json();
        
        if (data.data && data.data.Page && data.data.Page.media) {
            // Process and integrate the API data with existing data
            console.log('AniList data loaded:', data.data.Page.media);
        }
    } catch (error) {
        console.log('AniList API error:', error);
    }
}

async function loadShowsFromTMDB() {
    if (!API_CONFIG.TMDB_API_KEY || API_CONFIG.TMDB_API_KEY === 'your_tmdb_api_key_here') {
        return;
    }

    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${API_CONFIG.TMDB_API_KEY}&language=en-US&page=1`
        );
        const data = await response.json();

        if (data.results) {
            // Find a grid to display (e.g., trendingGrid on home page)
            const grid = document.getElementById('trendingGrid');
            if (grid) {
                grid.innerHTML = ''; // Clear previous content
                data.results.forEach(show => {
                    const card = document.createElement('div');
                    card.className = 'content-card fade-in';
                    card.innerHTML = `
                        <div class="card-image">
                            <img src="https://image.tmdb.org/t/p/w400${show.poster_path}" alt="${show.name}" loading="lazy">
                            <div class="card-badge">TMDB</div>
                            <div class="card-rating">
                                <i class="fas fa-star"></i>
                                ${show.vote_average}
                            </div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${show.name}</h3>
                            <div class="card-meta">
                                <span>📅 ${show.first_air_date ? show.first_air_date.substring(0, 4) : ''}</span>
                                <span>⭐ ${show.vote_average}</span>
                            </div>
                            <p class="card-description">${show.overview || 'No description available.'}</p>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            }
        }
    } catch (error) {
        console.log('TMDB API error:', error);
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in forwards';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Mobile menu toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll-to-top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Escape key to close modals
    if (e.key === 'Escape') {
        closeModals();
    }
    
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Initialize lazy loading for images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Observe all images for lazy loading
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add sparkle effect on hover for cards
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.content-card')) {
            createSparkles(e.target.closest('.content-card'));
        }
    });
});

function createSparkles(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '20px';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        if (document.body.contains(sparkle)) {
            document.body.removeChild(sparkle);
        }
    }, 1000);
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% { opacity: 1; transform: scale(0) rotate(0deg); }
        50% { opacity: 1; transform: scale(1) rotate(180deg); }
        100% { opacity: 0; transform: scale(0) rotate(360deg); }
    }
`;
document.head.appendChild(sparkleStyle);