var backdrop = document.querySelector('.backdrop')
var modal = document.querySelector('.modal')
var modalNoButton = document.querySelector('.modal__action--negative')
var selectPlanButtons = document.querySelectorAll('.plan button')


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

modalNoButton.addEventListener('click', closeModal)

function closeModal() {
    modal.style.display = 'none'
    backdrop.style.display = 'none'
}