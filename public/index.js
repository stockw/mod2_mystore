// const { response } = require('espress');

console.log("home js file connected");

// let submitButton = document.getElementById('create-product');
// submitButton.addEventListener('click', async () => {
//     let nameString = document.getElementById('name-input').value;
//     let imgString = document.getElementById('img-input').value;
//     let priceNumber = +document.getElementById('price-input').value;
//     let descriptionString = document.getElementById('description-input').value;
//     let inStockNumber = +document.getElementById('inStock-input').value;

//     const product = {
//         nameString,
//         imgString,
//         priceNumber,
//         descriptionString,
//         inStockNumber
//     }
//     console.log(JSON.stringify(product));

//     let response = await fetch('http://localhost:5000/create_product', {
//         method: "POST",
//         headers: {'Content-Type': 'application/json',},
//         body: JSON.stringify(product)
//     })
// })

let container = document.getElementById("items")

const getItems = async () => {
    let data = await fetch("/get_products")
    console.log(data);

    data.json().then((parsedData) => {
        parsedData.forEach(element => {
            console.log(element);
            let pTag=document.createElement("h1")
            let desc=document.createElement("p")
            let image=document.createElement("img")
            image.addEventListener ('click', async () => {
              window.location.href = './single_product'
            })
            image.src=element.img
            pTag.textContent=element.name
            desc.textContent=element.description
            container.appendChild(pTag)
            container.appendChild(desc)
            container.appendChild(image)
        });
    })
}

getItems()

let displayPageButton = document.getElementById('display_product');
console.log(displayPageButton);

displayPageButton.addEventListener('click', (event) => {
    let id = event.target.databaseId
    window.location.href = "./display_products"
})

const getData = async () => {
     const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        let value = params.idOfClickedItem;
}


