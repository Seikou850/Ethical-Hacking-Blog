$(document).ready(function () {

  const url = 'https://newsapi.org/v2/everything?q=cyber-attacks&apiKey=20697c0cecb94a64af10bbe95ce426ad';

  axios.get(url)
    .then(response => {
      const articles = response.data.articles;

      console.log(response)


      articles.forEach(article => {
        const { title, description, url} = article;

        const articleMarkup = `
          <div class="card mb-2">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">${description}</p>
              <a href="${url}" class="btn btn-primary" target="_blank">Read More</a>
            </div>
          </div>
        `;

        $('#news-container').append(articleMarkup);
      });
    })
    .catch(error => {
      console.error(error);
    });
});
