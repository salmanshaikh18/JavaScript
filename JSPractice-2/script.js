window.addEventListener('mousemove', (details) => {
    let rectangle = document.querySelector('#rectangle')

    let xVal = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100 + rectangle.getBoundingClientRect().width / 2, 
        window.innerWidth - (100 + rectangle.getBoundingClientRect().width / 2), 
        details.clientX
    )

    gsap.to('#rectangle', {
        left: xVal + 'px',
        ease: Power3
    })
})