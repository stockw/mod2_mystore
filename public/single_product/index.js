console.log("single prodect js running");


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
console.log(params);


let id = params.id;
console.log(id);

const getSingleProduct = async () => {
    let response = await fetch(`http://localhost:5000/get_single_product_using_id/${id}`);
    let finalData = await response.json();
    
    console.log(finalData);

    let container = document.querySelector('container')
    container.innerHTML = `
    <div class="single-product">
        <h1>${finalData.name}</h1>
        <img class="product-img" src="" alt="">
        <div>description</div>
    </div>
    `
}

getSingleProduct()

