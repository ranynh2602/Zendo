var urlApi = 'https://fakestoreapi.com/products';
fetch(urlApi)
  .then(response => response.json())
  .then(json => {
    let cards = '';
    let pro = '';
    json.slice(0, 4).forEach(product => {
      // The `slice(0, 4)` ensures only the first 4 products are displayed
      cards += `
        <div class="col-3">
          <div class="card">
            <img style="height: 250px; width: 200px; object-fit: cover; margin-left: 30px;" 
              class="card-img-top" src="${product.image}" alt="${product.title}">
            <div class="card-body d-flex justify-content-between align-items-center">
              <h5>${product.title}</h5>
              <h4 class="text-primary">$${product.price}</h4>
            </div>
            <p style="padding: 0px 10px;">${product.description}</p>
          </div>
        </div>
      `;
    });

   
    document.querySelector('.Collection').innerHTML = cards; // Assume a `.row` container holds the `.col-3` elements
    //document.querySelector('.life_img').innerHTML = pro; // Assume a `.row` container holds the `.col-3` elements

  })
  .catch(error => console.error('Error:', error));