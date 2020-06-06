// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.







let cardsContainer = document.querySelector(".cards-container")
console.log(cardsContainer)


function cardMaker(){
    
  
    const card = document.createElement("div")
    card.classList = "card"
    cardsContainer.appendChild(card)
    const headline = document.createElement("div")
    headline.classList = "headline"
    // headline.textContent = "Headline of article"
    card.appendChild(headline)
    const author = document.createElement("div")
    author.classList ="author"
    card.appendChild(author)
    const imgContainer = document.createElement("div")
    imgContainer.classList = "img-container"
    author.appendChild(imgContainer)
    const imgsrc = document.createElement("img")
    imgsrc.src = ""
    imgContainer.appendChild(imgsrc)
    const authorsName = document.createElement("span")
    author.appendChild(authorsName)
    authorsName.textContent = " author's name";



    axios.get("https://lambda-times-backend.herokuapp.com/articles")

    .then(function(response){

       let articlesBootstrap = response.data.articles.bootstrap
      console.log('this is the response for articles', response)

        articlesBootstrap.forEach(function(item){
        authorsName.textContent = item.authorName;
        imgsrc.src = item.authorPhoto;
        headline.textContent = item.headline;
        
      })
    })



      .catch(function(error){
      
          console.log('something went wrong', error)
      })
  
       .finally(function(){
          console.log('done')
      })



        return card

      }

    cardMaker();

   



  
    










    // .then(function(response){

    //     let articles = response.data.articles.bootstrap
    //     console.log('this is articles', articles)
    //     console.log('this is the response for second promise', response)

    //     articles.forEach(function(item){
    //         headline.textContent = item[0]
    //     })


    // })
    //     .catch(function(error){
        
    //         console.log('something went wrong', error)
    //     })
    
    //     .finally(function(){
    //         console.log('done')
    //     })
    
   
       
    

    

    
    

   

    

