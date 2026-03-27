/**
 * main.js - Dynamic content injection based on URL parameters
 */

document.addEventListener('DOMContentLoaded', () => {
    // Parse URL Parameters
    const urlParams = new URLSearchParams(window.location.search);
    const appParam = urlParams.get('app');

    // Define App Configurations
    const appConfigs = {
        'default': {
            name: 'My Projects',
            iconHTML: '<i class="ph-fill ph-star text-indigo-400 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]"></i>',
            whySupport: 'Your support helps keep the servers running and encourages me to build more free, open tools for the community.'
        },
        'gemini_delete': {
            name: 'Gemini Quick Delete',
            // Using a sparkle icon for Gemini, styled with Google Gemini-esque colors
            iconHTML: '<i class="ph-fill ph-sparkle text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]"></i>',
            whySupport: 'Covering the maintenance of UI hotfixes.'
        }
    };

    // Select the current configuration
    const currentConfig = appConfigs[appParam] || appConfigs['default'];

    // DOM Elements
    const heroHeading = document.getElementById('hero-heading');
    const appIconContainer = document.getElementById('app-icon-container');
    const whySupportText = document.getElementById('why-support-text');

    // Update DOM
    if (heroHeading) {
        heroHeading.innerHTML = `Keep <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">${currentConfig.name}</span> Alive`;
    }

    if (appIconContainer) {
        // Add a slight pop animation when swapping icon
        appIconContainer.style.transform = 'scale(0.8)';
        appIconContainer.style.opacity = '0';
        
        setTimeout(() => {
            appIconContainer.innerHTML = currentConfig.iconHTML;
            appIconContainer.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            appIconContainer.style.transform = 'scale(1)';
            appIconContainer.style.opacity = '1';
        }, 150);
    }

    if (whySupportText) {
        whySupportText.textContent = currentConfig.whySupport;
    }
});
