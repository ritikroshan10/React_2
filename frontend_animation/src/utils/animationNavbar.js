import gsap from 'gsap';

const animationNavbar = () => {
    const tl = gsap.timeline()

    tl.from(".logo-img",{
        x:-30,
        opacity:0,
        duration:0.6
    })
   
    tl.from(".nav-heading li",{
        y:-30,
        opacity:0,
        duration:0.6
    })

   

    tl.from(".login",{
        x:30,
        opacity:0,
        duration:0.5
    })
}

export default animationNavbar

