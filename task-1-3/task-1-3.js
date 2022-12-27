function returnPromise () {
    return new Promise((res, rej) => {
        let randomDelay = Math.floor(Math.random()*(10000-1000) + 1000);
        setTimeout(() => {
            res(randomDelay);
        }, randomDelay);
    });
}

const array = [];

for (let i = 0; i < 10; i++) {
    array.push(returnPromise());    
}

console.log(array);

array[0]
    .then((res) => console.log(res));