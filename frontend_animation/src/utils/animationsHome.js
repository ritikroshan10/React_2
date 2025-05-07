import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function animateHomePage() {

    // download
    gsap.from(".download", {
        x: 300,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".download",
            start: "top 80%",
            toggleActions: "play none none none"
            //toggleActions: "restart reverse restart reverse"
        }
    });

    // lorem text
    gsap.from(".lorem", {
        x: -300,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".download",
            start: "top 80%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // btn
    gsap.from(".download-btn", {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: "back.out(2.5)", // "Move it out with a bounce, then settle into place smoothly."
        scrollTrigger: {
            trigger: ".download-btn",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // download img
    gsap.from(".download-img", {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".download-img",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // power3 = medium-strong acceleration/deceleration
    // .out = starts fast and slows down smoothly at the end


    //   feature
    gsap.from(".features", {
        x: 250,
        opacity: 0,
        duration: 1.7,
        scrollTrigger: {
            trigger: ".features",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // Performance
    gsap.from(".feature-performance", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".feature-performance",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    //  Design
    gsap.from(".feature-design", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".feature-design",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    //User Friendly
    gsap.from(".feature-user", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".feature-user",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    //bottom image
    gsap.from(".bottom-img", {
        x: -200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bottom-img",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // bottom heading
    gsap.from(".bottom-heading", {
        x: 200,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".bottom-heading",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    });
    
}
