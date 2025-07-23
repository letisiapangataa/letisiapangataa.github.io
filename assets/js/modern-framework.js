// Modern Interactive Framework for Portfolio
// Enhanced user experience with smooth animations and interactions

(function() {
    'use strict';

    // Modern utility functions
    const utils = {
        // Smooth scroll to element
        scrollTo: (element, offset = 0) => {
            const targetPosition = element.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        },

        // Throttle function for performance
        throttle: (func, limit) => {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            }
        },

        // Debounce function
        debounce: (func, wait) => {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Check if element is in viewport
        isInViewport: (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    };

    // Modern loading screen
    const loadingScreen = {
        init: () => {
            const loader = document.createElement('div');
            loader.className = 'modern-loader';
            loader.innerHTML = `
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <p>Loading Portfolio...</p>
                </div>
            `;
            document.body.prepend(loader);

            // Add CSS for loader
            const loaderCSS = `
                .modern-loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 9999;
                    transition: opacity 0.5s ease-out;
                }
                .loader-content {
                    text-align: center;
                    color: white;
                }
                .loader-spinner {
                    width: 50px;
                    height: 50px;
                    border: 3px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    border-top-color: white;
                    animation: spin 1s ease-in-out infinite;
                    margin: 0 auto 1rem;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `;
            const style = document.createElement('style');
            style.textContent = loaderCSS;
            document.head.appendChild(style);
        },

        hide: () => {
            const loader = document.querySelector('.modern-loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => loader.remove(), 500);
            }
        }
    };

    // Floating action button
    const floatingActions = {
        init: () => {
            const fab = document.createElement('div');
            fab.className = 'floating-nav';
            fab.innerHTML = `
                <button class="fab scroll-top" title="Back to top">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <button class="fab theme-toggle" title="Toggle theme">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="fab contact-fab" title="Contact">
                    <i class="fas fa-envelope"></i>
                </button>
            `;
            document.body.appendChild(fab);

            // Add event listeners
            fab.querySelector('.scroll-top').addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            fab.querySelector('.theme-toggle').addEventListener('click', () => {
                themeToggle.toggle();
            });

            fab.querySelector('.contact-fab').addEventListener('click', () => {
                window.location.href = '/contact/';
            });

            // Show/hide based on scroll
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    requestAnimationFrame(() => {
                        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                        fab.style.opacity = scrollTop > 300 ? '1' : '0';
                        fab.style.transform = scrollTop > 300 ? 'translateY(0)' : 'translateY(100px)';
                        ticking = false;
                    });
                    ticking = true;
                }
            });
        }
    };

    // Theme toggle functionality
    const themeToggle = {
        init: () => {
            const currentTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeToggle.updateIcon(currentTheme);
        },

        toggle: () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.updateIcon(newTheme);
        },

        updateIcon: (theme) => {
            const icon = document.querySelector('.theme-toggle i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    };

    // Smooth reveal animations
    const revealAnimations = {
        init: () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal');
                    }
                });
            }, observerOptions);

            // Observe elements
            const elementsToReveal = document.querySelectorAll(
                '.feature__item, .page__content > *, .author__profile, h2, h3'
            );
            
            elementsToReveal.forEach(el => {
                el.classList.add('reveal-hidden');
                observer.observe(el);
            });

            // Add CSS for reveal animations
            const revealCSS = `
                .reveal-hidden {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
                }
                .reveal {
                    opacity: 1;
                    transform: translateY(0);
                }
            `;
            const style = document.createElement('style');
            style.textContent = revealCSS;
            document.head.appendChild(style);
        }
    };

    // Enhanced search functionality
    const enhancedSearch = {
        init: () => {
            const searchInput = document.querySelector('.search__input');
            if (!searchInput) return;

            // Add modern search styling
            const searchContainer = searchInput.closest('.search');
            if (searchContainer) {
                searchContainer.classList.add('modern-search');
            }

            // Add search suggestions
            const suggestions = document.createElement('div');
            suggestions.className = 'search-suggestions';
            searchInput.parentNode.appendChild(suggestions);

            // Enhanced search with debouncing
            searchInput.addEventListener('input', utils.debounce((e) => {
                const query = e.target.value.toLowerCase();
                if (query.length > 2) {
                    enhancedSearch.showSuggestions(query, suggestions);
                } else {
                    suggestions.style.display = 'none';
                }
            }, 300));

            // Hide suggestions when clicking outside
            document.addEventListener('click', (e) => {
                if (!searchContainer.contains(e.target)) {
                    suggestions.style.display = 'none';
                }
            });
        },

        showSuggestions: (query, container) => {
            // This would integrate with your search data
            const mockSuggestions = [
                'Azure Well-Architected Framework',
                'Cloud Solution Architecture',
                'Microsoft Experience',
                'Portfolio Projects'
            ].filter(item => item.toLowerCase().includes(query));

            container.innerHTML = mockSuggestions
                .map(item => `<div class="suggestion-item">${item}</div>`)
                .join('');
            
            container.style.display = mockSuggestions.length ? 'block' : 'none';
        }
    };

    // Performance monitoring
    const performanceMonitor = {
        init: () => {
            // Monitor Core Web Vitals
            if ('web-vital' in window) {
                // This would integrate with real performance monitoring
                console.log('Performance monitoring initialized');
            }

            // Image lazy loading enhancement
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            observer.unobserve(img);
                        }
                    });
                });

                document.querySelectorAll('img[data-src]').forEach(img => {
                    imageObserver.observe(img);
                });
            }
        }
    };

    // Progressive Web App features
    const pwaFeatures = {
        init: () => {
            // Service worker registration
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/sw.js')
                        .then(registration => {
                            console.log('SW registered: ', registration);
                        })
                        .catch(registrationError => {
                            console.log('SW registration failed: ', registrationError);
                        });
                });
            }

            // Install prompt
            let deferredPrompt;
            window.addEventListener('beforeinstallprompt', (e) => {
                deferredPrompt = e;
                pwaFeatures.showInstallButton();
            });
        },

        showInstallButton: () => {
            const installBtn = document.createElement('button');
            installBtn.className = 'fab install-app';
            installBtn.innerHTML = '<i class="fas fa-download"></i>';
            installBtn.title = 'Install App';
            
            const fabContainer = document.querySelector('.floating-nav');
            if (fabContainer) {
                fabContainer.appendChild(installBtn);
            }

            installBtn.addEventListener('click', () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the install prompt');
                        }
                        deferredPrompt = null;
                        installBtn.remove();
                    });
                }
            });
        }
    };

    // Initialize all features when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        loadingScreen.init();
        
        // Initialize features after a short delay for better UX
        setTimeout(() => {
            floatingActions.init();
            themeToggle.init();
            revealAnimations.init();
            enhancedSearch.init();
            performanceMonitor.init();
            pwaFeatures.init();
            loadingScreen.hide();
        }, 1000);
    });

    // Export for global access
    window.ModernPortfolio = {
        utils,
        themeToggle,
        revealAnimations,
        enhancedSearch
    };

})();
