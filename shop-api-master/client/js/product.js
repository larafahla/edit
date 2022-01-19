const queryString = window.location.search;

//console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('productId');
console.log(urlParams);
console.log(productId);

fetch("http://localhost:5000/api/getProduct?productId="+productId)
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(data => inputInfo(data));

console.log('asd')
function inputInfo(data) {
    document.getElementById("name").innerText = data.name;
    document.getElementById("partnership").innerText = data.partnership;
    document.getElementById("brand").innerText = data.brand;
    document.getElementById("madeIn").innerText = data.madeIn;
    document.getElementById("description").innerText = data.description;
    document.getElementById("image").src = data.image;
    document.getElementById("price").innerText = data.price;
    
    
    // score
    var allStars = document.querySelectorAll('#score .icn-star')
    for(var i = 0; i < Math.round(data.score); i++) {
        allStars[i].className+=" primary";
    }
    
    document.querySelectorAll('#score span')[0].innerText = "score " + data.score + " of 5";

    //sizes
    const sizeButtons = document.getElementsByClassName("sizebtns")[0].getElementsByTagName("button");
    for(var i = 0; i < sizeButtons.length; i++) {
        sizeButtons[i].disabled = ((data.sizes[i+1] === 0 || data.sizes[i+1] === undefined) ? true:false);
    }

}
