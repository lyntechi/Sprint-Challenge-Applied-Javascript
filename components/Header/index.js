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
// import axios from 'axios'




let headContainer = document.querySelector(".header-container")
//create a variable that selects an element that attaches to dom.
//create a function that holds our components
// create variables inside of your function that attaches each element that you need to grab from The 
// attached the class name that you wish to display
// ex div.textContent
//append variable container to the HTML Variable created in step 1
//append each variable element that you wish to display
//return main element so that i can be displayed in the DOM. THE ACTUAL DOM 
//

//

function header() { 
    const headerDiv = document.createElement("div")
    headerDiv.classList = "header"
    headContainer.appendChild(headerDiv)
    const date = document.createElement("span")
    date.classList = "date"
    headerDiv.appendChild(date)
    date.textContent = "MARCH 28, 2019"
    const heading = document.createElement("h1")
    heading.textContent = "Lambda Times"
    headerDiv.appendChild(heading)
    const temp = document.createElement("span")
    temp.classList = "temp" 
    temp.textContent = "98°"
    headerDiv.appendChild(temp)
    console.log(headerDiv)
    return headerDiv;
}
header()



