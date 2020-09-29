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

console.log(viewportWidth)