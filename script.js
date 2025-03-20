// Script for NationalSquire website

document.addEventListener('DOMContentLoaded', function() {
    // Sticky header behavior
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Search functionality
    const searchButton = document.querySelector('.search button');
    const searchInput = document.querySelector('.search input');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // In a real site, this would redirect to search results
            alert('Search functionality is not implemented in this demo. You searched for: ' + query);
            searchInput.value = '';
        }
    }
    
    // Add current date to footer
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    const footerDate = document.createElement('p');
    footerDate.textContent = 'Today is ' + formattedDate;
    footerDate.className = 'footer-date';
    
    const copyright = document.querySelector('.copyright');
    copyright.prepend(footerDate);
    
    // Randomly highlight trending stories for visual interest
    const trendingItems = document.querySelectorAll('.trending li');
    if (trendingItems.length > 0) {
        const randomIndex = Math.floor(Math.random() * trendingItems.length);
        trendingItems[randomIndex].classList.add('trending-highlight');
    }
    
    // Handle "Read More" functionality on article pages
    const readMoreButton = document.querySelector('.read-more-button');
    if (readMoreButton) {
        const hiddenContent = document.querySelector('.hidden-content');
        
        readMoreButton.addEventListener('click', function() {
            hiddenContent.style.display = 'block';
            readMoreButton.style.display = 'none';
        });
    }
    
    // Add simple animation for page load
    document.body.classList.add('loaded');
    
    // Add back-to-top button that appears when scrolling
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.title = 'Back to top';
    document.body.appendChild(backToTopButton);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Add styles for back-to-top button
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #cc0000;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 99;
        }
        
        .back-to-top.visible {
            opacity: 1;
        }
        
        .trending-highlight {
            background-color: rgba(204, 0, 0, 0.05);
            border-left: 3px solid #cc0000;
            padding-left: 10px !important;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        body.loaded .container {
            animation: fadeIn 0.5s ease-in;
        }
    `;
    document.head.appendChild(style);
});
