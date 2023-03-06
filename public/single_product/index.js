console.log("single product js running");


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
console.log(params);

let id = params.id;
console.log(id);

const getSingleProduct = async () => {
    let response = await fetch(`http://localhost:5000/get_single_product/${id}`);
    let finalData = await response.json();
    
    console.log(finalData);

    let container = document.getElementById('container')
    container.innerHTML =  `
    <div class="single-product">
        <h1>${finalData.name}</h1>
        <div style=
        "font-weight: bold;
        text-decoration: underline;
        font-style: italic;
        font-size: large;
        padding-bottom: 10px;">${finalData.price}</div>
        <img class="product-img" src="${finalData.img}" alt="">
        <div style=
        "font-weight: bold;
        font-size: small;
        color: grey;
        padding-bottom: 10px;">In-Stock ${finalData.inStock}</div>
        <div style=
        "font-weight: bold;
        font-size: large;
        padding-bottom: 10px;">${finalData.description}</div>
        
    </div>
    `
}

getSingleProduct()





