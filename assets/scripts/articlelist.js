const articleListURL = 'https://gist.githubusercontent.com/vschaefer/8d26be957bbc8607f60da5dd1b251a78/raw/49ddd7c2636fb722912d91107aff55c79ddf05a8/articles.json'

document.addEventListener('DOMContentLoaded', function(){
    console.log('Hallo')
    initCreateArticleList()
})

function initCreateArticleList(){
    const responsePromise = fetch(articleListURL);
    console.log(responsePromise)
    responsePromise.then(function(response){
        const dataPromise = response.json();
        console.log(dataPromise)
        dataPromise.then(function(data){
            currentData = data;
            renderArticleList(data.articles);
            initFilters();
        });
    });
}

function renderArticleList(articles){
    const articleListElement = document.querySelector('[data-js-generate-articlelist]');

    const cards = articles.map(function(article){
        return `
        <li>
        <figure>
          <img src="./images/${article.teaserImg}" alt="${article.title}">
          <figcaption>
            <h3>${article.title}</h3>
            <address>${article.author}</address>
            <ul class="tag-list">
              ${article.tags.fileFormat.map((tag) => `<li>${tag}</li>`).join('')}
              ${article.tags.keywords.map((tag) => `<li>${tag}</li>`).join('')}
              ${article.tags.modules.map((tag) => `<li>${tag}</li>`).join('')}
              ${article.tags.projectphase.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
          </figcaption>
        </figure>
      </li>`;
    }).join('');

    articleListElement.innerHTML = cards;
}

function initFilters(){
    const filterButton = document.querySelectorAll('[data-js-category="keywords"]')
    filterButton.forEach(function(button){
        button.addEventListener('click', function(event){
            const filter = event.currentTarget.getAttribute('data-js-filter');
            const filteredArticles = filterArticles(filter);
            renderArticleList(filteredArticles)
            console.log(filter)
        });
    });
}

function filterArticles(filterValue){
    const filteredArticles = currentData.articles.filter(function(article){
        console.log(article)
        return article.tags.keywords.include(filterValue);
    });
    return filteredArticles
}