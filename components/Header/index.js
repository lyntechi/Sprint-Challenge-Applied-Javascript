// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

// function Header() {
//     const header = document.createElement('div')
//     header.classList.add('header')
// }

function header(){
const headerContainer = document.querySelector('.header-container')
const headerDiv = document.createElement('div')
const date = document.createElement('span')
const lambdaTimes = document.createElement('h1')
const temp = document.createElement('span')

headerDiv.classList.add('header')
date.classList.add('date')
temp.classList.add('temp')

date.textContent='March 28, 2019'
lambdaTimes.textContent='Lambda Times'
temp.textContent='98°'

headerContainer.appendChild(headerDiv)
headerDiv.appendChild(date)
headerDiv.appendChild(lambdaTimes)
headerDiv.appendChild(temp)

return headerDiv
}

header()