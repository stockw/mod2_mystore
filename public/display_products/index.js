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