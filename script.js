// const words = [
//   { word: 'hangman', hint: 'A classic word-guessing game.' },
//   { word: 'javascript', hint: 'A popular programming language for web development.' },
//   { word: 'programming', hint: 'The process of writing computer programs.' },
//   { word: 'computer', hint: 'An electronic device capable of performing various operations.' },
//   { word: 'internet', hint: 'A global network connecting millions of computers.' },
//   { word: 'coding', hint: 'The act of writing instructions for a computer to execute.' },
//   { word: 'developer', hint: 'A person who creates software applications.' },
//   { word: 'python', hint: 'A versatile programming language known for its readability.' },
//   { word: 'algorithm', hint: 'A step-by-step procedure or formula for solving a problem.' },
//   { word: 'database', hint: 'A structured set of data stored electronically.' }
// ];

let chosenWord = '';
let wordHint = '';
let guessedLetters = [];
let guessesLeft = 6;
const msgDiv= document.querySelector(".result");
const wordDisplay = document.getElementById('word-display');
const hintsDisplay = document.getElementById('hint-display');
const guessesLeftDisplay = document.getElementById('guesses');
const lettersContainer = document.getElementById('letters-container');
const resetButton = document.getElementById('reset-button');

function init() {
  chooseWord();
  displayWord();
  displayHint();
  displayGuessesLeft();
  displayLetters();
}

function chooseWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  chosenWord = words[randomIndex].word;
  wordHint = words[randomIndex].hint;
}

function displayWord() {
  wordDisplay.textContent = chosenWord.split('').map(letter => guessedLetters.includes(letter) ? letter : '_').join(' ');
}

function displayHint() {
  hintsDisplay.textContent = `Hint: ${wordHint}`;
}

function displayGuessesLeft() {
  guessesLeftDisplay.textContent = guessesLeft;
}

function displayLetters() {
  lettersContainer.innerHTML = '';
  for (let i = 65; i <= 90; i++) {
    const letter = String.fromCharCode(i);
    const letterBut = document.createElement('button');
    letterBut.textContent = letter;
    letterBut.classList.add('letter');
    letterBut.addEventListener('click', () => {
      letterBut.style.backgroundColor="#748D92";
      guessLetter(letter)
      letterBut.disabled=true;  
    });
    lettersContainer.appendChild(letterBut);
  }
}

function guessLetter(letter) {
  // letter = letter.toLowerCase();
  if(guessesLeft>=0)
  {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!chosenWord.includes(letter)) {
        guessesLeft--;
      }
      displayWord();
      displayGuessesLeft();
      checkGameEnd();
    }
  }
}

function checkGameEnd() {
  if (guessesLeft === 0 || !wordDisplay.textContent.includes('_')) {
    const message = guessesLeft === 0 ? `You lost! The word was ${chosenWord}` : 'Congratulations! You won!';
    msgDiv.innerText=message;
    document.getElementById("guesses-left").style.display="none";
    for(let ele of document.querySelectorAll(".letter"))
    {
      ele.style.backgroundColor="#748D92";
      ele.disabled=true;
    }
    resetButton.innerText="Replay";
  }
}

function resetGame() {
  resetButton.innerText="Reset";
  guessedLetters = [];
  guessesLeft = 6;
  msgDiv.style.display="none";
  document.getElementById("guesses-left").style.display="inline";
  chooseWord();
  displayWord();
  displayHint();
  displayGuessesLeft();
  displayLetters();
}

resetButton.addEventListener('click', resetGame);
init();
