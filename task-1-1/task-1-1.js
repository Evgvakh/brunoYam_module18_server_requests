const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Some text");
    }, 5000);
});

promise
    .then((msg) => console.log(msg));