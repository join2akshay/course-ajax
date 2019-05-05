(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
  // let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;


        const unsplashRequest = new XMLHttpRequest();
    
        unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        unsplashRequest.onload = addImage;
        unsplashRequest.setRequestHeader('Authorization', 'Client-ID 7a7e82bf707c1d4b987e67b45fb7674abd134b163f6180491bcf1cd05946f1f2');
        unsplashRequest.send();
        
        function addImage(){
            let htmlContent = '';
      const data = JSON.parse(this.responseText);
      const firstImage = data.results[0];
    
      htmlContent = `<figure>
        <img src="${firstImage.urls.regular}" alt="${searchedForText}">
        <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
      </figure>`;
    
      responseContainer.insertAdjacentHTML('afterbegin', htmlContent);
    
        }

    });

    
  
})();
