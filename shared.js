var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'none'
    closeModal()
})

modalNoButton.addEventListener('click', closeModal)

toggleButton.addEventListener('click', () => {
    mobileNav.style.display = 'block'
    backdrop.style.display = 'block'
})

function closeModal() {
    modal.style.display = 'none'
    backdrop.style.display = 'none'
}