         // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out'
        });

        // Scroll to top button
        const scrollTopBtn = document.querySelector('.scroll-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Professional Banner Slider
        const bannerSlides = document.querySelectorAll('.banner-slide');
        const bannerDots = document.querySelectorAll('.banner-dot');
        const bannerPrev = document.querySelector('.banner-prev');
        const bannerNext = document.querySelector('.banner-next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            bannerSlides.forEach(slide => slide.classList.remove('active'));
            bannerDots.forEach(dot => dot.classList.remove('active'));
            
            bannerSlides[index].classList.add('active');
            bannerDots[index].classList.add('active');
            currentSlide = index;
        }

        function nextSlide() {
            let nextIndex = (currentSlide + 1) % bannerSlides.length;
            showSlide(nextIndex);
        }

        function prevSlide() {
            let prevIndex = (currentSlide - 1 + bannerSlides.length) % bannerSlides.length;
            showSlide(prevIndex);
        }

        bannerNext.addEventListener('click', nextSlide);
        bannerPrev.addEventListener('click', prevSlide);

        bannerDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });

        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function stopSlider() {
            clearInterval(slideInterval);
        }

        // Stop slider when user interacts
        bannerSlides.forEach(slide => {
            slide.addEventListener('mouseenter', stopSlider);
            slide.addEventListener('mouseleave', startSlider);
        });

        bannerPrev.addEventListener('mouseenter', stopSlider);
        bannerPrev.addEventListener('mouseleave', startSlider);
        bannerNext.addEventListener('mouseenter', stopSlider);
        bannerNext.addEventListener('mouseleave', startSlider);

        // Start the slider
        startSlider();

        // Favorite icon toggle
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('favorite-icon')) {
                if (e.target.classList.contains('far')) {
                    e.target.classList.remove('far');
                    e.target.classList.add('fas');
                    e.target.style.color = 'var(--primary)';
                } else {
                    e.target.classList.remove('fas');
                    e.target.classList.add('far');
                    e.target.style.color = '#ccc';
                }
            }
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navLinks = document.querySelector('.nav-links');
        const authButtons = document.querySelector('.auth-buttons');
        
        mobileToggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            authButtons.style.display = authButtons.style.display === 'flex' ? 'none' : 'flex';
            
            if (navLinks.style.display === 'flex') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Responsive adjustments
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navLinks.style.display = 'flex';
                authButtons.style.display = 'flex';
                document.body.style.overflow = 'auto';
            } else {
                navLinks.style.display = 'none';
                authButtons.style.display = 'none';
            }
        });