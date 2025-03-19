function fetchJoke(category) {
      fetch(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayJoke(data, category);
        })
    }

