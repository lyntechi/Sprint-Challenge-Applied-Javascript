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
const body = document.querySelector("body")




function Header() {

    const headerDiv = document.createElement("div")
    headerDiv.classList = "header"
    body.appendChild(headerDiv)
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
    return headerDiv;


}
console.log(Header())

