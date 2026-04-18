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
            heroHeading: (name) => `Keep <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">${name}</span> Alive`,
            heroSubheading: 'A tiny tool built with passion. No ads, no tracking.',
            kofiTitle: 'Support on Ko-fi',
            kofiText: 'Fast and secure one-time support.<br>Support via PayPal or Credit Card',
            kofiButton: 'Buy a Coffee',
            whyHeader: 'Why Support?',
            whySupport: 'Your support helps keep the servers running and encourages me to build more free, open tools for the community.'
        },
        'gemini_delete': {
            name: 'Delete Shortcut for Gemini™',
            iconHTML: '<img src="assets/gemini-delete-icon.png" alt="Delete Shortcut for Gemini™" class="w-14 h-14 rounded-lg object-contain drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">',
            heroHeading: (name) => `Keep <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-sm">${name}</span> Alive`,
            heroSubheading: 'A tiny tool built with passion. No ads, no tracking.',
            kofiTitle: 'Support on Ko-fi',
            kofiText: 'Fast and secure one-time support.<br>Support via PayPal or Credit Card',
            kofiButton: 'Buy a Coffee',
            whyHeader: 'Why Support?',
            whySupport: 'Covering the maintenance of UI hotfixes.'
        },
        'shopee_checkout': {
            name: '自動完成訂單助手 (蝦皮版)',
            iconHTML: '<img src="assets/shopee-checkout-icon.png" alt="自動完成訂單助手 (蝦皮版)" class="w-14 h-14 rounded-lg object-contain drop-shadow-[0_0_15px_rgba(238,77,45,0.4)]">',
            heroHeading: (name) => `支持 <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 drop-shadow-sm">${name}</span> 延續發展`,
            heroSubheading: '一個充滿熱情的個人開發作品。無廣告、不追蹤。',
            kofiTitle: '在 Ko-fi 上提供支持',
            kofiText: '快速且安全的單次性支持。<br>支援 PayPal 或 信用卡',
            kofiButton: '請我喝杯咖啡',
            whyHeader: '為什麼要支持？',
            whySupport: '致力於提升蝦皮購物體驗，專為台灣用戶優化。您的支持能幫助我持續開發與維護這項工具。'
        }
    };

    // Select the current configuration
    const config = appConfigs[appParam] || appConfigs['default'];

    // DOM Elements
    const heroHeading = document.getElementById('hero-heading');
    const heroSubheading = document.getElementById('hero-subheading');
    const appIconContainer = document.getElementById('app-icon-container');
    const kofiTitle = document.getElementById('kofi-title');
    const kofiText = document.getElementById('kofi-text');
    const kofiButtonText = document.getElementById('kofi-button-text');
    const whySupportHeader = document.getElementById('why-support-header');
    const whySupportText = document.getElementById('why-support-text');

    // Update DOM
    if (heroHeading) {
        heroHeading.innerHTML = config.heroHeading(config.name);
    }

    if (heroSubheading) {
        heroSubheading.textContent = config.heroSubheading;
    }

    if (appIconContainer) {
        // Add a slight pop animation when swapping icon
        appIconContainer.style.transform = 'scale(0.8)';
        appIconContainer.style.opacity = '0';
        
        setTimeout(() => {
            appIconContainer.innerHTML = config.iconHTML;
            appIconContainer.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            appIconContainer.style.transform = 'scale(1)';
            appIconContainer.style.opacity = '1';
        }, 150);
    }

    if (kofiTitle) kofiTitle.textContent = config.kofiTitle;
    if (kofiText) kofiText.innerHTML = config.kofiText;
    if (kofiButtonText) kofiButtonText.textContent = config.kofiButton;
    if (whySupportHeader) whySupportHeader.textContent = config.whyHeader;

    if (whySupportText) {
        whySupportText.textContent = config.whySupport;
    }
});
