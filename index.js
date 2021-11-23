console.log("this is news website!")

// af7ea5f15ae74fc7a6e205e843186990 
// api key 

const newsPara = document.getElementById("demo");

let xhr = new XMLHttpRequest();
let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=af7ea5f15ae74fc7a6e205e843186990`;

xhr.open('GET', url, true);
let news = [];
xhr.onload = function (){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let news = [];
        // console.log(json);
        news.push(json.articles);
        // console.log(news);
        let html = document.getElementById("myDiv");
        html.innerHtml = ``;
        news[0].forEach(function (element){
            let newsTitle = element.title;
            let newsDescription = element.description;
            let imageUrl = element.urlToImage;
            html.innerHTML += `<div class="card mx-3 my-4" style="width: 18rem;">
                                <img src=${imageUrl} class="card-img-top" alt=${newsTitle}>
                                <div class="card-body">
                                    <h5 class="card-title">${newsTitle}</h5>
                                    <p class="card-text">${newsDescription}</p>
                                </div>
                            </div>`;
        })
        
    }
}
xhr.send();
