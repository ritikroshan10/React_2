import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const animationFooter = () => {
    const tl = gsap.timeline()

    tl.from(".foot-logo", {
        y:-30,
        scale:0,
        opacity:0,
        duration:1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".foot-logo",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });

    tl.from(".foot-content",{
        y:-20,
        opacity:0,
        duration:1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".foot-content",
            start: "top 85%",
            toggleActions: "play none none none"
        }
    })


}

export default animationFooter