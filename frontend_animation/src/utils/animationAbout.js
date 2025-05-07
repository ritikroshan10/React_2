import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animationAbout = () => {
    gsap.from(".about", {
        y: -30,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            // toggleActions: "play none none none"
            toggleActions: "restart reverse restart reverse"
        }
    });

    gsap.from(".content", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            // toggleActions: "play none none none"
            toggleActions: "restart reverse restart reverse"
        }
    });

    gsap.from(".image", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%",
            // toggleActions: "play none none none"
            toggleActions: "restart reverse restart reverse"
        }
    });
    // Core Values title
    gsap.from(".Values", {
        x: 250,
        opacity: 0,
        duration: 1.7,
        scrollTrigger: {
            trigger: ".Values", 
            start: "top 80%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // Innovation
    gsap.from(".Innovation", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".Innovation", 
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // Integrity
    gsap.from(".Integrity", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".Integrity",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // User Focus
    gsap.from(".User-Focus", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".User-Focus",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

}

export default animationAbout