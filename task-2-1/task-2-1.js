const divMain = document.querySelector('.main');

function fetchProducts() {
    return fetch('https://fakestoreapi.com/products?limit=10')
            .then((result) => {return result.json();})
            .then(result=>result);
}

async function main() {
    const products = await fetchProducts();   

    for (let i in products) {    
        const div = document.createElement('div');
        const img = document.createElement('img');
        const parItem = document.createElement('p');
        const parPrice = document.createElement('p');
        const divText = document.createElement('div');        

        div.className = 'item';
        divMain.append(div);

        img.setAttribute('src', products[i].image);
        div.append(img);
        
        divText.className = 'item__text';
        div.append(divText);        

        parItem.textContent = products[i].title;
        divText.append(parItem);

        parPrice.textContent = `Price: ${products[i].price} EUR`;
        divText.append(parPrice);
    }
}

main();