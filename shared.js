var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        //modal.style.display = 'block'
        //backdrop.style.display = 'block'
        //modal.className = 'open' //this will actually overwrite the complete class
        modal.classList.add('open') //thi will add the class
        backdrop.classList.add('open')
    })
}

backdrop.addEventListener('click', () => {
    //mobileNav.style.display = 'none'
    mobileNav.classList.remove('open')
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

toggleButton.addEventListener('click', () => {
    //mobileNav.style.display = 'block'
    //backdrop.style.display = 'block'
    mobileNav.classList.add('open')
    backdrop.classList.add('open')
})

function closeModal() {
    //modal.style.display = 'none'
    //backdrop.style.display = 'none'
    modal.classList.remove('open')
    backdrop.classList.remove('open')
}