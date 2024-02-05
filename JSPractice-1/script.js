const rectangle = document.querySelector('#center')

rectangle.addEventListener('mousemove', (details) => {
    // console.log(rectangle.getBoundingClientRect()) // The getBoundingClientRect() method is a JavaScript method that is used to get the size and position of an element relative to the viewport. The getBoundingClientRect() method returns a DOMRect object that contains the following properties:
    // top: The top coordinate of the rectangle.
    // right: The right coordinate of the rectangle.
    // bottom: The bottom coordinate of the rectangle.
    // left: The left coordinate of the rectangle.
    // width: The width of the rectangle.
    // height: The height of the rectangle.

    let rectangleLocation = rectangle.getBoundingClientRect()
    // console.log(details.clientX)
    // console.log(details.clientY)
    // console.log(details.clientX - rectangleLocation.left) // get current location

    let insideRectangleValue = details.clientX - rectangleLocation.left

    if (insideRectangleValue < rectangleLocation.width / 2) {
        console.log("left")
        let redColor = gsap.utils.mapRange(0, rectangleLocation.width / 2, 255, 0, insideRectangleValue)
        gsap.to(rectangle, {
            backgroundColor: `rgb(${redColor}, 0, 0)`,
            ease: Power4,

        })
    } else {
        console.log("right")
        let blueColor = gsap.utils.mapRange(
            rectangleLocation.width / 2,
            rectangleLocation.width,
            0, 
            255, 
            insideRectangleValue 
        )
        gsap.to(rectangle, {
            backgroundColor: `rgb(0, 0, ${blueColor})`,
            ease: Power4,

        })
    }
})

rectangle.addEventListener('mouseleave', () => {
    gsap.to(rectangle, {
        backgroundColor: "white"
    })
})

