const button = document.querySelector("button");

async function createRepos(name, description, isPrivate) {
    const body = {
        name: name,
        description: description,
        private: isPrivate
    };

    await fetch("https://api.github.com/user/repos", {
        method: "POST",
        headers: {
            "content-Type": "text/plain;charset=UTF-8",
            "accept": "application/vnd.github+json",
            "authorization": "Bearer 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"
        },
        body: JSON.stringify(body)
    })
        .then((res) => {
            if (res.status === 201) {
            alert('Repos created');
            return res;
        } else { 
            alert(`Error ${res.status}`);                     
        } 
    });
}

button.addEventListener("click", async () => {
    const inputName = document.querySelector('#name');
    const inputDescr = document.querySelector('#descr');
    const inputCheckbox =  document.querySelector('#true');

    let name = inputName.value;
    let description = inputDescr.value;
    let isPrivate;

    if (inputCheckbox.checked) {
        isPrivate = true;
    } else { isPrivate = false; }
    
    button.disabled = true;
    await createRepos(name, description, isPrivate);
    button.disabled = false;         
});