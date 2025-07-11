gsap.registerPlugin(ScrollTrigger);

const video = document.getElementById('bgVideo');

// Привязка видео к прокрутке
let playhead = {frame: 0};
const fps = 30; // частота кадров видео
const durationInFrames = 300; // допустим, видео = 10 секунд при 30fps

ScrollTrigger.create({
    trigger: "#scroll-video-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    onUpdate: self => {
        const frame = Math.floor(self.progress * durationInFrames);
        playhead.frame = frame;
        video.currentTime = frame / fps;
    }
});

// Анимация появления текста
gsap.to("#scroll-text", {
    scrollTrigger: {
        trigger: "#scroll-video-section",
        start: "top 70%",
        end: "top 30%",
        scrub: true
    },
    opacity: 1,
    y: 0,
    duration: 1
});