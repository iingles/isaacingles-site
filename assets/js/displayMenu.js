const menuButton = document.getElementById('mobileMenuBtn')
const menu = document.getElementById('mainNav')
const closeButton = document.getElementById('closeBtn')
let viewportWidth = window.innerWidth

const links = document.querySelectorAll('.nav-link')

menuButton.addEventListener('click', evt => {
    menu.style.visibility = 'visible'
})

closeButton.addEventListener('click', evt => {
    menu.style.visibility = 'hidden'
})

links.forEach(el => {    
    
    el.addEventListener('click', evt => {

        evt.preventDefault()
        
        const element = document.getElementById(el.href.split('#')[1])
        
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top

        const headerOffset = document.getElementById('header').offsetHeight
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })

        if (viewportWidth < 992) { 
            menu.style.visibility = 'hidden'
        } else { return }      
    })

})

setViewPortWidth = function () {
    viewportWidth = window.innerWidth

    if (viewportWidth >= 992) {
        menu.style.visibility = 'visible'
    }
}

window.addEventListener('resize', setViewPortWidth);

