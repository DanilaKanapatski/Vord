document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.querySelector('.scroll-container');
    let isScrolling = false;

    // Параллакс эффект для видео (опционально)
    scrollContainer.addEventListener('scroll', () => {
        const scrollPosition = scrollContainer.scrollLeft;
        const video = document.querySelector('.video-background video');
        video.style.transform = `translateX(${scrollPosition * 0.2}px)`;
    });

    // Плавный скролл к блокам
    scrollContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (isScrolling) return;

        isScrolling = true;
        const direction = e.deltaY > 0 ? 1 : -1;
        const currentScroll = scrollContainer.scrollLeft;
        const windowWidth = window.innerWidth;

        scrollContainer.scrollTo({
            left: currentScroll + (windowWidth * direction),
            behavior: 'smooth'
        });

        setTimeout(() => { isScrolling = false; }, 1000);
    });
});