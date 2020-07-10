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
// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")
//   .then((res) => {
//     const articles = res.data.articles;
//     for (const article in articles) {
//       // console.log("artt", articles[article]);
//       articles[article].forEach((artEl) => {
//         cards.appendChild(Card(artEl));
//       });
//     }
//   })
//   .catch((error) => console.log(error));
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
    const responseArticles = response.data.articles;

    Object.values(responseArticles).forEach((articles) => {
      articles.forEach((article) => {
        cards.appendChild(Card(article));
      });
    });
  })
  .catch((error) => console.log(error));
function Card(article) {
  const card = document.createElement("div"),
    headline = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    authorImg = document.createElement("img"),
    authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  authorImg.src = article.authorPhoto;
  headline.textContent = article.headline;
  authorName.textContent = `By ${article.authorName}`;

  imgContainer.appendChild(authorImg);
  author.appendChild(imgContainer);
  author.appendChild(authorName);

  card.appendChild(headline);
  card.appendChild(author);

  return card;
}

const cards = document.querySelector(".cards-container");








// let createCardMaker = function (headlineInfo, name, photo) {
//   let card = document.createElement("div");
//   let headlineDiv = document.createElement("div");
//   let author = document.createElement("div");
//   let imgContainer = document.createElement("div");
//   let imgsrc = document.createElement("img");
//   let authorsName = document.createElement("span");

//   card.appendChild(headlineDiv);
//   card.appendChild(author);
//   author.appendChild(imgContainer);
//   imgContainer.appendChild(imgsrc);
//   author.appendChild(authorsName);

//   card.classList = "card";
//   headlineDiv.classList = "headline";
//   author.classList = "author";
//   imgContainer.classList = "img-container";

//   headlineDiv.textContent = headlineInfo;
//   authorsName.textContent = name;
//   imgsrc.src = photo;

//   return card;
// };

// let cardsContainer = document.querySelector(".cards-container");

// axios
//   .get("https://lambda-times-backend.herokuapp.com/articles")

//   .then(function (response) {
//     let javascriptArticles = response.data.articles.javascript;
//     console.log("this is the response from data", response.data);

//     javascriptArticles.forEach(function (item) {
//       let newArticleCard = createCardMaker(
//         item.headline,
//         item.authorName,
//         item.authorPhoto
//       ); 
//       cardsContainer.appendChild(newArticleCard);
//       console.log("this is item", item);
//     });

//     let bootstrapArticles = response.data.articles.bootstrap;
//     console.log("this is the response from data", response.data);

//     bootstrapArticles.forEach(function (item) {
//       let newArticleCard = createCardMaker(
//         item.headline,
//         item.authorName,
//         item.authorPhoto
//       ); 
//       cardsContainer.appendChild(newArticleCard);
//       console.log("this is item", item);
//     });

//     let technologyArticles = response.data.articles.technology;
//     console.log("this is the response from data", response.data);

//     technologyArticles.forEach(function (item) {
//       let newArticleCard = createCardMaker(
//         item.headline,
//         item.authorName,
//         item.authorPhoto
//       ); 
//       cardsContainer.appendChild(newArticleCard);
//       console.log("this is item", item);
//     });

//     let jqueryArticles = response.data.articles.jquery;
//     console.log("this is the response from data", response.data);

//     jqueryArticles.forEach(function (item) {
//       let newArticleCard = createCardMaker(
//         item.headline,
//         item.authorName,
//         item.authorPhoto
//       ); 
//       cardsContainer.appendChild(newArticleCard);
//       console.log("this is item", item);
//     });
//     let nodeArticles = response.data.articles.node;
//     console.log("this is the response from data", response.data);

//     nodeArticles.forEach(function (item) {
//       let newArticleCard = createCardMaker(
//         item.headline,
//         item.authorName,
//         item.authorPhoto
//       ); 
//       cardsContainer.appendChild(newArticleCard);
//       console.log("this is item", item);
//     });
//   })

//   .catch(function (error) {
//     console.log("something went wrong", error);
//   })

//   .finally(function () {
//     console.log("done");
//   });

 






