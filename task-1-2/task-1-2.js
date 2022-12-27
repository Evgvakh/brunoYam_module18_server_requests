const promise = new Promise((res, rej) => {
    setTimeout(function () {
        let randomNumber = Math.floor(Math.random() * 5);
        if (randomNumber !== 0) {
            res(1 / randomNumber);
        } else {
            rej("Error");
        }
    }, 1000);
}
);

promise
    .then((msg) => console.log(msg))
    .catch((errmsg) => console.log(errmsg));
