// w06-task script.js

//The following was used just for testing purposes but it was set as comment:
//document.body.style.background = "blue";
//setTimeout(() => document.body.style.background = "", 3000);
//Test completed

async function fetchJokes() {
    const response = await fetch('https://official-joke-api.appspot.com/random_ten');
    const data = await response.json();
    return data;
  }
  
  function displayJokes(jokes) {
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = '';
  
    jokes.forEach((joke) => {
      const jokeElement = document.createElement('div');
      jokeElement.classList.add('joke');
  
      // Display setup and add button to reveal punchline
      jokeElement.innerHTML = `<p>${joke.setup}</p><button class="reveal-button">Reveal Answer</button>`;
  
      // Add click event listener to the button
      const revealButton = jokeElement.querySelector('.reveal-button');
      revealButton.addEventListener('click', () => revealPunchline(joke.punchline, revealButton));
  
      jokeContainer.appendChild(jokeElement);
    });
  }
  
  function revealPunchline(punchline, button) {
    // Replace button text with the punchline
    button.textContent = punchline;
    // Disable the button after revealing the punchline
    button.disabled = true;
    // Optional: Add styling to indicate that the answer has been revealed
    button.classList.add('revealed');
  }
  
  async function loadAndDisplayJokes() {
    try {
      const jokes = await fetchJokes();
      displayJokes(jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  }
  
  loadAndDisplayJokes();
  
  