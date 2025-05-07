import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animationTest = () => {
    gsap.from(".testimonial-heading", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".testimonial-heading",
            start: "top 80%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    gsap.from(".testimonial-left", {
        x: -350,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: ".testimonial-left",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    gsap.from(".testimonial-middle", {
        y: 350,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: ".testimonial-middle",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    gsap.from(".testimonial-right", {
        x: 350,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: ".testimonial-right",
            start: "top 90%",
            toggleActions: "restart reverse restart reverse"
        }
    });
}

export default animationTest