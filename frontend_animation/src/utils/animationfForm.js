import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animationfForm = () => {
    gsap.from(".heading", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".heading",
            start: "top 80%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // Paragraph from bottom
    gsap.from(".para", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
            trigger: ".para",
            start: "top 80%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // Form from left
    gsap.from("form", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "form",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    });

    // Right contact info from right
    gsap.from(".contact-info", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
            toggleActions: "restart reverse restart reverse"
        }
    })
}

export default animationfForm