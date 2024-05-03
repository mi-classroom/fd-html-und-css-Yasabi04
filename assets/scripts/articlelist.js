const articleListURL = 'https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/49ddd7c2636fb722912d91107aff55c79ddf05a8/articles.json'

document.addEventListener('DOMContentLoaded', function(){
    initCreateArticleList()
})

function initCreateArticleList(){
    const responsePromise = fetch(articleListURL);
    console.log(responsePromise)
    responsePromise.then(function(response){
        const dataPromise = response.json();
        console.log(dataPromise)
        dataPromise.then(function(data){
            console.log(data)
            //renderArticleList(data.article);
        });
    });
}

function renderArticleList(article){
    articleListElement = document.querySelector('[data-js-generate-articlelist]');
    console.log(articleListElement);
    console.log(article);
    const authors = article.map(function(article){
        return `<li>${article.author}</li>`
    }).join(``); 
    articleListElement.innerHTML = authors;
    console.log(authors);
}