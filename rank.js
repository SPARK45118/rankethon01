document.addEventListener('DOMContentLoaded', () => {
    // Slider elements
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.navigation-dots');
    let currentIndex = 0;
    let autoSlideInterval;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // Slide control functions
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Auto-slide functionality
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Pause on hover
    slidesContainer.parentElement.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });
    
    slidesContainer.parentElement.addEventListener('mouseleave', startAutoSlide);

    // Initialize slider
    startAutoSlide();
});
// Slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.bottom-slides');
    const slides = document.querySelectorAll('.bottom-slide');
    const prevBtn = document.querySelector('.bottom-prev');
    const nextBtn = document.querySelector('.bottom-next');
    const dotsContainer = document.querySelector('.bottom-navigation-dots');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if(index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    // Update slider position
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-advance (optional)
    // setInterval(nextSlide, 5000);
});
const swiper = new Swiper('.logoSlider', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
    }
});