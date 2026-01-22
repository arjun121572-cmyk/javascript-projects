const button = document.querySelector("button")
const closeIcon = document.querySelector(".close-icon")
const popup = document.querySelector(".popup-container")
const overlay = document.querySelector(".overlay")
const newsLetterCard = document.querySelector(".newsletter-card")
const subButton = document.querySelector(".sub-button")


button.addEventListener('click', () => {
    popup.classList.add('popup-open')
    newsLetterCard.classList.add('vanish-button')
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    newsLetterCard.classList.remove('vanish-button')
})

overlay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    newsLetterCard.classList.remove('vanish-button')
})
subButton.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    newsLetterCard.classList.remove('vanish-button')
})