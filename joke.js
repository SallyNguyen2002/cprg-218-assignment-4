function fetchJoke(category) {
      fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayJoke(data, category);
        })
    }

function displayJoke(data, category) {
    const jokeText = document.getElementById('joke-text');
    const title = document.getElementById('title');
    if (category === "Any") {
        title.textContent = "Joke Of The Day";
    } else if (category === "Pun") {
        title.textContent = "A Random Pun";
    } else {
        title.textContent = `A Random ${category} Joke`;
    }
    
    if (data.type === 'single') {
        jokeText.textContent = data.joke;
    } 
    else if (data.type === 'twopart') {
        jokeText.innerHTML = `${data.setup} ... ${data.delivery}`;
    }
}

window.onload = function() {
    fetchJoke('Any');
}

function getJoke(category) {
    fetchJoke(category);
};