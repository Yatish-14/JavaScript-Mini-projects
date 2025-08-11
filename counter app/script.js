const counter = document.querySelector('#counter')
const incrementBtn = document.querySelector('#incrementBtn')
const decrementBtn = document.querySelector('#decrementBtn')
const resetBtn = document.querySelector('#resetBtn')

let count = 0

// update count

function updateCounter() {
    counter.textContent = count
}

// Increament

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter()
})

// Decreament

decrementBtn.addEventListener('click', () => {
    count--;
    updateCounter()
})

//reset

resetBtn.addEventListener('click',() => {
    count = 0;
    updateCounter()
})