const advantageCards = document.querySelectorAll('.advantage');

advantageCards.forEach(card => {
    const icon = card.querySelector('i');

    card.addEventListener('mouseenter', () => {
        icon.classList.add('spinning');
    });

    card.addEventListener('mouseleave', () => {
        icon.classList.remove('spinning');
    });
});

//product cards
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
    });
});

//purchase buttons
const counter = document.querySelector('.counter');
const productButtons = document.querySelectorAll('.purchase-button');

let count = 0;

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        animateCounter();
    });
});

function animateCounter() {
    counter.classList.add('animated');

    counter.addEventListener('animationend', () => {
        counter.classList.remove('animated');
    });
}

// random names and reviews
const randomNames = ["John", "Jane", "Alex", "Emma", "Michael", "Olivia"];
const randomReviews = [
    "This website is amazing! The selection of games is impressive and the discounts are unbeatable.",
    "Game Vault has quickly become my go-to place for purchasing games. The 24/7 support is outstanding.",
    "The active community on Game Vault makes the gaming experience even more enjoyable.",
    "I'm in love with Game Vault! Their dedication to gaming is truly remarkable.",
    "Game Vault is a paradise for gamers. The variety of games available is mind-blowing.",
    "I can't get enough of Game Vault. The discounts are a game-changer for me."
];


function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array.splice(randomIndex, 1)[0];
}


const reviewCards = document.querySelectorAll('.review-card');

reviewCards.forEach(card => {
    const nameElement = card.querySelector('.review-name');
    const contentElement = card.querySelector('.review-content');

    const randomName = getRandomItem(randomNames);
    const randomReview = getRandomItem(randomReviews);

    nameElement.textContent = randomName;
    contentElement.textContent = randomReview;
});
