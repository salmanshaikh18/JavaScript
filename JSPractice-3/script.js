const center = document.querySelector('#center')

const throttleFunction = (func, delay) => {
    let prev = 0
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now
            return func(...args)
        }
    }
}

center.addEventListener('mousemove', throttleFunction((e) => {
    // console.log(e.clientX, e.clientY)
    let div = document.createElement('div')
    div.classList.add('imageDiv')
    div.style.left = e.clientX + 'px'
    div.style.top = e.clientY + 'px'

    let img = document.createElement('img')
    img.setAttribute("src", "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    div.appendChild(img)
    document.body.appendChild(div)

    gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .6
    })

    gsap.to(img, {
        y: "100%",
        delay: .6,
        ease: Power2,
    })

    setTimeout(() => {
        div.remove()
    }, 2000)
}, 400))



