function fetchProducts() {
    return fetch('https://fakestoreapi.com/products?limit=10')
            .then((result) => {return result.json();})
            .then(result=>result);
}

async function main() {
    const products = await fetchProducts();
    for (let i in products) {
        console.log(`Description of product №${+i+1}: \n ${products[i].description}`);
    }
}

main();