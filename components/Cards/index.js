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







let createCardMaker = function (headlineInfo, name, photo) {
  let card = document.createElement("div");
  let headlineDiv = document.createElement("div");
  let author = document.createElement("div");
  let imgContainer = document.createElement("div");
  let imgsrc = document.createElement("img");
  let authorsName = document.createElement("span");

  card.appendChild(headlineDiv);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgsrc);
  author.appendChild(authorsName);

  card.classList = "card";
  headlineDiv.classList = "headline";
  author.classList = "author";
  imgContainer.classList = "img-container";

  headlineDiv.textContent = headlineInfo;
  authorsName.textContent = name;
  imgsrc.src = photo;

  return card;
};

let cardsContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")

  .then(function (response) {
    let javascriptArticles = response.data.articles.javascript;
    console.log("this is the response from data", response.data);

    javascriptArticles.forEach(function (item) {
      let newArticleCard = createCardMaker(
        item.headline,
        item.authorName,
        item.authorPhoto
      ); 
      cardsContainer.appendChild(newArticleCard);
      console.log("this is item", item);
    });

    let bootstrapArticles = response.data.articles.bootstrap;
    console.log("this is the response from data", response.data);

    bootstrapArticles.forEach(function (item) {
      let newArticleCard = createCardMaker(
        item.headline,
        item.authorName,
        item.authorPhoto
      ); 
      cardsContainer.appendChild(newArticleCard);
      console.log("this is item", item);
    });

    let technologyArticles = response.data.articles.technology;
    console.log("this is the response from data", response.data);

    technologyArticles.forEach(function (item) {
      let newArticleCard = createCardMaker(
        item.headline,
        item.authorName,
        item.authorPhoto
      ); 
      cardsContainer.appendChild(newArticleCard);
      console.log("this is item", item);
    });

    let jqueryArticles = response.data.articles.jquery;
    console.log("this is the response from data", response.data);

    jqueryArticles.forEach(function (item) {
      let newArticleCard = createCardMaker(
        item.headline,
        item.authorName,
        item.authorPhoto
      ); 
      cardsContainer.appendChild(newArticleCard);
      console.log("this is item", item);
    });
    let nodeArticles = response.data.articles.node;
    console.log("this is the response from data", response.data);

    nodeArticles.forEach(function (item) {
      let newArticleCard = createCardMaker(
        item.headline,
        item.authorName,
        item.authorPhoto
      ); 
      cardsContainer.appendChild(newArticleCard);
      console.log("this is item", item);
    });
  })

  .catch(function (error) {
    console.log("something went wrong", error);
  })

  .finally(function () {
    console.log("done");
  });

 






