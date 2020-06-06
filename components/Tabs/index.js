// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>





      axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
        
      .then(function(response){
        console.log('this is response from the API', response)

        let topics = response.data.topics

        topics.forEach(function(item){
        let tab = document.createElement("div")
        tab.classList = "tab"
        let tabsTopics = document.querySelector(".tabs .topics")
        tabsTopics.appendChild(tab)
        tab.textContent = item;
        return tab
        })
        
    })

    .catch(function(error){
        
        console.log('something went wrong', error)
    })

    .finally(function(){
        console.log('done')
    })








