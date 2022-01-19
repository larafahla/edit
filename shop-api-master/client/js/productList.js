/* const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const nProducts = urlParams.get('nProducts');
const sortBy = urlParams.get('sortBy');
console.log(urlParams); */

// moises

const CATEGORIES = {
    1: "snickers",
    2: "coats",
    3: "pants",
    4: "jackets",
  };

  let CATEGORIES_SELECTED = [1,2,3,4];
  let SIZES_SELECTED = [1,2,3,4];
  let SORTBY_SELECTED = "price";
  
  const getCard = ({ id, image, price, name, category }) => `
    <a class="product-card col-6 col-d-4" href="product.html?productId=${id}" title="View Product">
    <div class="product-card-image">
        <img class="imgfit" src="${image}">
    </div>
    <p class="margintophalf marginbottomnone">${name}</p>
    <p class="gray marginnone">${category.reduce((acc, id) => {
      acc += `${CATEGORIES[id]} `;
      return acc;
    }, "")}</p>
    <p class="secondary marginnone">${price}</p>
    </a>
  `;
  
  const fetchProducts = () => {
    fetch(`/api/getProductsList?nProducts=10&sortBy=${SORTBY_SELECTED}`)
      .then(response => response.json())
      .then(({ data }) => {
        
        // filtrar size
        products = products.filter(product => Object.keys(product.sizes(id => CATEGORIES_SELECTED.includes(id)));



  
        // filtrar categories
        products = products.filter(product => product.category.some(id => CATEGORIES_SELECTED.includes(id)));
        renderProducts(data);
      })
  }
  
  const renderProducts = (products) => {
    const list = document.getElementById("mainproductlist");
    list.innerHTML = "";
    products.forEach((product) => {
      list.innerHTML += getCard(product);
    });
  };
  
  document.addEventListener("DOMContentLoaded", fetchProducts);
  

  // eventos do user
  document.getElementById("sortBy").addEventListener("change", (e) => {
    SORTBY_SELECTED = e.target.value.toLowerCase();
    fetchProducts();
  });

  document.querySelectorAll("#categories > li").forEach(li, index) => {
      li.addEventListener("click", () => {
          const categoryId = index + 1;

          if(CATEGORIES_SELECTED.includes(categoryId)) {
            CATEGORIES_SELECTED = CATEGORIES_SELECTED.filter(id => id)
          }
      })
  }

  document.getElementsByClassName("icn-chevron-right").forEach(element) => {
      element.addEventListener("click", function(e))
  }



// add eventlisteners onclick dos filtros

// fim moises





/* function getInfo(nProducts, sortBy) {
    const apiRequest = "http://localhost:5000/api/getProductsList";
    if (nProducts !== "") {
        apiRequest += "nProducts=" + nProducts;
    }
    if (sortBy !== "") {
        apiRequest += "sortBy=" + sortBy;
    }
    console.log(apiRequest);

    fetch("http://localhost:5000/api/getProductsList?nProducts=" + nProducts +"&sortBy=" + sortBy)
    .then(response => response.json())
    .then(data => function1(data))
}

document.addEventListener("DOMContentLoaded", getInfo ("",""))

/* document.getElementById("sortBy").addEventListener("change", function () {
    fetch("http://localhost:5000/api/getProductsList?nProducts=4&sortBy=" + newValue)
    .then().then
}) */

/* function function1(data) {
    const div = document.getElementById("card");
    data.forEach(element => {
        var newCard = new create
    })
}

function createSingleCard(element) {
    var a = document.createElement("a");
    a.href = "product.html?productId=" + element.Id;
    a.className = "product-card";
} */


// 6 create element igual ao html