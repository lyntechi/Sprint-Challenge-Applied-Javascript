// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.

// Write a function that returns the following markup:

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

// Use your function to create a card for each of the articles and add the card to the DOM.



          

/*


  !    creating a variable and assigning a function. a function that will 
  !    have all our components  to create the cards
  !   we have to transform our data which are the articles we saw from the response we received from the live server
  !    into DOM elements. our data needs to be passed into that function to our parameters here which will be the pieces we need to
  !    retrieve from the arrays
  !    which are name, photo and headline info
*/
      
        let createCardMaker = function(headlineInfo, name, photo ){
        //!elements
        let card = document.createElement("div")
        let headlineDiv = document.createElement("div")
        let author = document.createElement("div")
        let imgContainer = document.createElement("div")
        let imgsrc = document.createElement("img")
        let authorsName = document.createElement("span")
        
        //!structure
     
        card.appendChild(headlineDiv)
        card.appendChild(author)
        author.appendChild(imgContainer)
        imgContainer.appendChild(imgsrc)
        author.appendChild(authorsName)

        //!add classes
        card.classList = "card"
        headlineDiv.classList = "headline"
        author.classList ="author"
        imgContainer.classList = "img-container"

        //!feeding our elements we created the arguments
       
       
        headlineDiv.textContent = headlineInfo;
        authorsName.textContent = name;
        imgsrc.src = photo;
      
        //!our components are going to be all wrapped up in our card div which will have our authors name photo and headlineinfo
        //!and thats why we are are returning card so it can be displayed on our screen
        return card

      }
    
           let cardsContainer = document.querySelector(".cards-container")//!!container that was already created
             //!for us in this sprint in the html file. this container will be holding all our cards thats being created by the
            //!createCardMaker function
         
      
          //!the promise is axios.get to get data from live server. data would be the articles data we are trying to get
          axios.get("https://lambda-times-backend.herokuapp.com/articles")

          .then(function(response){
          
          let javascriptArticles = response.data.articles.javascript
          console.log('this is the response from data', response.data)

            //!put the foreach inside the .then response so the foreach recognizes what array its going to iterate from
             javascriptArticles.forEach(function(item){
              //!we need to append our components we built in the above function to 
            //!  let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             cardsContainer.appendChild(newArticleCard)
            console.log('this is item', item)
            //!we now have to append our createcardMaker to the cardsContainer. the arguments we are feeding to createCardMaker parameters are
            //!the item thats attached to forEach that will go in javascript array and grab the name, photo and headlineinfo for us 
            
         
          })//!this closes foreach

          let bootstrapArticles = response.data.articles.bootstrap
          console.log('this is the response from data', response.data)

            //!put the foreach inside the .then response so the foreach recognizes what array its going to iterate from
             bootstrapArticles.forEach(function(item){
              //!we need to append our components we built in the above function to 
            // ! let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             cardsContainer.appendChild(newArticleCard)
            console.log('this is item', item)
            //!we now have to append our createcardMaker to the cardsContainer. the arguments we are feeding to createCardMaker parameters are
            // !the item thats attached to forEach that will go in javascript array and grab the name, photo and headlineinfo for us 
            
         
          })//!this closes foreach


          let technologyArticles = response.data.articles.technology
          console.log('this is the response from data', response.data)

            //!put the foreach inside the .then response so the foreach recognizes what array its going to iterate from
            technologyArticles.forEach(function(item){
              //!we need to append our components we built in the above function to 
            // ! let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             cardsContainer.appendChild(newArticleCard)
            console.log('this is item', item)
            //!we now have to append our createcardMaker to the cardsContainer. the arguments we are feeding to createCardMaker parameters are
            // !the item thats attached to forEach that will go in javascript array and grab the name, photo and headlineinfo for us 
            
         
          })//!this closes foreach


          let jqueryArticles = response.data.articles.jquery
          console.log('this is the response from data', response.data)

            //!put the foreach inside the .then response so the foreach recognizes what array its going to iterate from
             jqueryArticles.forEach(function(item){
              //!we need to append our components we built in the above function to 
            // ! let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             cardsContainer.appendChild(newArticleCard)
            console.log('this is item', item)
            // !we now have to append our createcardMaker to the cardsContainer. the arguments we are feeding to createCardMaker parameters are
            //!the item thats attached to forEach that will go in javascript array and grab the name, photo and headlineinfo for us 
            
         
          })//!this closes foreach
          let nodeArticles = response.data.articles.node
          console.log('this is the response from data', response.data)

            //!put the foreach inside the .then response so the foreach recognizes what array its going to iterate from
             nodeArticles.forEach(function(item){
              //!we need to append our components we built in the above function to 
            // ! let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto) //anonymous
             cardsContainer.appendChild(newArticleCard)
            console.log('this is item', item)
            // !we now have to append our createcardMaker to the cardsContainer. the arguments we are feeding to createCardMaker parameters are
            // !the item thats attached to forEach that will go in javascript array and grab the name, photo and headlineinfo for us 
            
         
          })//!this closes foreach

          })//!this closes .then response



          //!this will catch any errors attached to datas response
          .catch(function(error){
          
            console.log('something went wrong', error)
        })
        

          .finally(function(){
              console.log('done')
          })

     

        

        




//!THE CODE DOWN HERE IS THE SAME AS THE TOP WITH NO NOTES THOUGH


      // let createCardMaker = function(headlineInfo, name, photo ){
      //   //elements
      //   let card = document.createElement("div")
      //   let headlineDiv = document.createElement("div")
      //   let author = document.createElement("div")
      //   let imgContainer = document.createElement("div")
      //   let imgsrc = document.createElement("img")
      //   let authorsName = document.createElement("span")
        
      //   //structure
      //   card.appendChild(headlineDiv)
      //   card.appendChild(author)
      //   author.appendChild(imgContainer)
      //   imgContainer.appendChild(imgsrc)
      //   author.appendChild(authorsName)

      //   //adding classes
      //   card.classList = "card"
      //   headlineDiv.classList = "headline"
      //   author.classList ="author"
      //   imgContainer.classList = "img-container"

      //   //assignment parameters
      //   headlineDiv.textContent = headlineInfo;
      //   authorsName.textContent = name;
      //   imgsrc.src = photo;
      //   return card

      // }

      //      let cardsContainer = document.querySelector(".cards-container")
      
      //     axios.get("https://lambda-times-backend.herokuapp.com/articles")

      //     .then(function(response){
          
      //     let javascriptArticles = response.data.articles.javascript
      //     console.log('this is the response from data', response.data)

            
      //        javascriptArticles.forEach(function(item){

      //        let newArticleCard = createCardMaker(item.headline, item.authorName, item.authorPhoto ) 
      //        cardsContainer.appendChild(newArticleCard)
      //       console.log('this is item', item)
        
      //     })//this closes foreach

      //     let bootstrapArticles = response.data.articles.bootstrap
      //     console.log('this is the response from data', response.data)

      //        bootstrapArticles.forEach(function(item){
          
      //        let newArticleCard = createCardMaker(item) 
      //       console.log('this is item', item)
          
        
         
      //     })//this closes foreach


      //     let technologyArticles = response.data.articles.technology
      //     console.log('this is the response from data', response.data)


      //       technologyArticles.forEach(function(item){
      //        let newArticleCard = createCardMaker(item)
      //        cardsContainer.appendChild(newArticleCard)
      //       console.log('this is item', item)
      //     })//this closes foreach


      //     let jqueryArticles = response.data.articles.jquery
      //     console.log('this is the response from data', response.data)


      //        jqueryArticles.forEach(function(item){
      //        let newArticleCard = createCardMaker(item) 
      //        cardsContainer.appendChild(newArticleCard)
      //       console.log('this is item', item)

      //     })//this closes foreach
      //     let nodeArticles = response.data.articles.node
      //     console.log('this is the response from data', response.data)

      
      //        nodeArticles.forEach(function(item){
      //        let newArticleCard = createCardMaker(item) 
      //        cardsContainer.appendChild(newArticleCard)
      //       console.log('this is item', item)
      //     })//this closes foreach
      //     })//this closes .then response



      //     .catch(function(error){
          
      //       console.log('something went wrong', error)
      //   })
        

      //     .finally(function(){
      //         console.log('done')
      //     })

    
//!THE CODE DOWN HERE IS COPYING AND PASTING THE COMPONENTS PRETTY MUCH ITS THE LONGERWAY

     

//         axios.get("https://lambda-times-backend.herokuapp.com/articles")

//         .then(function(response){



//         let javascriptArticles = response.data.articles.javascript;
//           console.log('this is the response for articles javascript', response.data)
       

          
          
//         javascriptArticles.forEach(function(item){
       
       
//         let cardsContainer = document.querySelector(".cards-container")
//         console.log(cardsContainer)
//         const card = document.createElement("div")
//         card.classList = "card"
//         cardsContainer.appendChild(card)
//         const headline = document.createElement("div")
//         headline.classList = "headline"
//         card.appendChild(headline)
//         const author = document.createElement("div")
//         author.classList ="author"
//         card.appendChild(author)
//         const imgContainer = document.createElement("div")
//         imgContainer.classList = "img-container"
//         author.appendChild(imgContainer)
//         const imgsrc = document.createElement("img")
//         imgsrc.src = ""
//         imgContainer.appendChild(imgsrc)
//         const authorsName = document.createElement("span")
//         author.appendChild(authorsName)
//         authorsName.textContent = " author's name";
//         authorsName.textContent = item.authorName;
//         imgsrc.src = item.authorPhoto;
//         headline.textContent = item.headline;
      
//       })//this closes javascript articles

//        let articlesBootstrap = response.data.articles.bootstrap
//        console.log('this is the response for articles', response)

//        articlesBootstrap.forEach(function(item){
       
       
//         let cardsContainer = document.querySelector(".cards-container")
//         console.log(cardsContainer)
//         const card = document.createElement("div")
//         card.classList = "card"
//         cardsContainer.appendChild(card)
//         const headline = document.createElement("div")
//         headline.classList = "headline"
//         card.appendChild(headline)
//         const author = document.createElement("div")
//         author.classList ="author"
//         card.appendChild(author)
//         const imgContainer = document.createElement("div")
//         imgContainer.classList = "img-container"
//         author.appendChild(imgContainer)
//         const imgsrc = document.createElement("img")
//         imgsrc.src = ""
//         imgContainer.appendChild(imgsrc)
//         const authorsName = document.createElement("span")
//         author.appendChild(authorsName)
//         authorsName.textContent = " author's name";
//         authorsName.textContent = item.authorName;
//         imgsrc.src = item.authorPhoto;
//         headline.textContent = item.headline;
      
//       })//this closes bootstrap forEach
        


//         let technologyArticles = response.data.articles.technology
//         console.log('this is the response for technology javascript', response)

//         technologyArticles.forEach(function(item){
       
       
//         let cardsContainer = document.querySelector(".cards-container")
//         console.log(cardsContainer)
//         const card = document.createElement("div")
//         card.classList = "card"
//         cardsContainer.appendChild(card)
//         const headline = document.createElement("div")
//         headline.classList = "headline"
//         card.appendChild(headline)
//         const author = document.createElement("div")
//         author.classList ="author"
//         card.appendChild(author)
//         const imgContainer = document.createElement("div")
//         imgContainer.classList = "img-container"
//         author.appendChild(imgContainer)
//         const imgsrc = document.createElement("img")
//         imgsrc.src = ""
//         imgContainer.appendChild(imgsrc)
//         const authorsName = document.createElement("span")
//         author.appendChild(authorsName)
//         authorsName.textContent = " author's name";
//         authorsName.textContent = item.authorName;
//         imgsrc.src = item.authorPhoto;
//         headline.textContent = item.headline;
      
//       })//this closes technology articles


      
//       let jqueryArticles = response.data.articles.jquery
//       console.log('this is the response for  jquery', response)

//        jqueryArticles.forEach(function(item){
     
     
//       let cardsContainer = document.querySelector(".cards-container")
//       console.log(cardsContainer)
//       const card = document.createElement("div")
//       card.classList = "card"
//       cardsContainer.appendChild(card)
//       const headline = document.createElement("div")
//       headline.classList = "headline"
//       card.appendChild(headline)
//       const author = document.createElement("div")
//       author.classList ="author"
//       card.appendChild(author)
//       const imgContainer = document.createElement("div")
//       imgContainer.classList = "img-container"
//       author.appendChild(imgContainer)
//       const imgsrc = document.createElement("img")
//       imgsrc.src = ""
//       imgContainer.appendChild(imgsrc)
//       const authorsName = document.createElement("span")
//       author.appendChild(authorsName)
//       authorsName.textContent = " author's name";
//       authorsName.textContent = item.authorName;
//       imgsrc.src = item.authorPhoto;
//       headline.textContent = item.headline;
    
//     })//this closes technology articles

    
//     let nodeJsArticles = response.data.articles.node
//     console.log('this is the response for  jquery', response)

//      nodeJsArticles.forEach(function(item){
   
   
//     let cardsContainer = document.querySelector(".cards-container")
//     console.log(cardsContainer)
//     const card = document.createElement("div")
//     card.classList = "card"
//     cardsContainer.appendChild(card)
//     const headline = document.createElement("div")
//     headline.classList = "headline"
//     card.appendChild(headline)
//     const author = document.createElement("div")
//     author.classList ="author"
//     card.appendChild(author)
//     const imgContainer = document.createElement("div")
//     imgContainer.classList = "img-container"
//     author.appendChild(imgContainer)
//     const imgsrc = document.createElement("img")
//     imgsrc.src = ""
//     imgContainer.appendChild(imgsrc)
//     const authorsName = document.createElement("span")
//     author.appendChild(authorsName)
//     authorsName.textContent = " author's name";
//     authorsName.textContent = item.authorName;
//     imgsrc.src = item.authorPhoto;
//     headline.textContent = item.headline;
  
//  })//this closes node.js articles

    
//    })//this closes .then response







  
    






       
    

    

    
    

   

    

