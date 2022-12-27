const input = document.querySelector('input');
const output = document.querySelector('.output');
const button = document.querySelector('button');

async function fetchReposOwner(variable) {
    const res = await fetch(`https://api.github.com/users/${variable}/repos`);
    const repos = await res.json();

    return repos;
}

async function getReposNames() {
    try {
        let inputValue = input.value ? input.value : alert('The input must not be empty! Please retry.');
        output.innerHTML = '';
        let repositories = await fetchReposOwner(inputValue);

        repositories.forEach((element) => {     
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.setAttribute('href', `${element.html_url}`);
            link.setAttribute('target', '_blank');
            link.textContent = element.name;
            listItem.append(link);
            output.append(listItem);
        });
    } catch (msg) { alert('No such user, please retry.'); }
}

async function getAndDisable() {
    button.disabled = true;
    input.disabled = true;
    await getReposNames();
    button.disabled = false;
    input.disabled = false;
}

button.addEventListener('click', () => {
    getAndDisable();
});

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        getAndDisable();
    }
});


