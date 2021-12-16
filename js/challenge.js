// Seconds Counter

document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM is loaded");
});

let seconds = 0; 
const countElement = document.getElementById('counter');

function incrementSeconds() {
    seconds += 1;
    countElement.innerText = seconds;
}


// Button Increment/Decrement 

minusButton = document.getElementById('minus');
plusButton = document.getElementById('plus');

minusButton.addEventListener('click', (event) => {
    seconds = seconds-1;
    countElement.textContent = seconds;
    console.log("I am working");
});

plusButton.addEventListener('click', (event) => {
    seconds = seconds+1;
    countElement.textContent = seconds;
    console.log("I am working, too!");
});
 
let interval = setInterval(incrementSeconds, 1000);
pauseButton = document.getElementById('pause');
let paused = false

pauseButton.addEventListener("click", clickPause)
function clickPause() {
    paused = !paused
    if (paused) {
        clearInterval(interval)
        pauseButton.innerText ="resume"
    } else {
        interval = setInterval
        pause.innerText = "pause"
        setInterval(incrementSeconds, 1000)
    }

}

//Number Likes 
const likedNumber = document.querySelector('ul.likes')
const heart = document.getElementById('heart')
let numberTrack = []

heart.addEventListener("click", addLike)

function addLike() {
    let liked = countElement.innerText
    numberTrack[liked] = numberTrack[liked] || 0
    numberTrack[liked] += 1
    renderLikes()
}
 function renderLikes() {
    likedNumber.innerHTML = " "
    for (let key in numberTrack){
        const li = document.createElement("li")
        li.innerText = `${key} has been liked ${numberTrack[key]} times.`
        likedNumber.append(li)
    }
 }
 
// Comment Form 

const comment = document.querySelector('#list')
const commentForm = document.querySelector('#comment-form')

commentForm.addEventListener("submit", submitComment)

function submitComment(event) {
    event.preventDefault()
    const comments = event.target.querySelector("input").value
    const li = document.createElement("li")
    li.innerText = comments
    comment.append(li)
    event.target.reset()
}

