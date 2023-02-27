console.log("create products page running");

let submitButton = document.getElementById('create-product');
submitButton.addEventListener('click', async () => {
    let nameString = document.getElementById('name-input').value;
    let imgString = document.getElementById('img-input').value;
    let priceNumber = +document.getElementById('price-input').value;
    let descriptionString = document.getElementById('description-input').value;
    let inStockNumber = +document.getElementById('inStock-input').value;

    const product = {
        nameString,
        imgString,
        priceNumber,
        descriptionString,
        inStockNumber
    }
    console.log(JSON.stringify(product));

    let response = await fetch('http://localhost:5000/create_product', {
        method: "POST",
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(product)
    })
})