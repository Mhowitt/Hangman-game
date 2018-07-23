document.addEventListener('DOMContentLoaded', () => {

  let randomStr = 'Leggings stumptown vape umami meggings lover croix tote bag enamel pin lyft letterpress knausgaard photo booth disrupt roof party Craft beer art party meh tumeric gluten actually four dollar toast plaid Wolf migas distillery humblebrag tilde fanny pack listicle keffiyeh labyrinth paleo sustainable Plaid four dollar toast truffaut listicle irony mixtape tousled hella locavore put bird poutine Etsy wayfarers kickstarter hammock asfuck'
  const randomWords = randomStr.split(' ');
  let hangedRandomWord = randomWords[Math.floor(Math.random()*randomWords.length)].toLowerCase().split('')

  let counter = 0;
  let turns = 7;
  const hangManParts = ["stand", "noose", 'head', 'torso', 'leg-1', 'leg-2', 'arm-1', 'arm-2']
  let playerResult = [];
  let playerLtrGuess = {};
  //let lengthOfLines = hangedRandomWord.length;

  let letterContainer = document.querySelector(".letters-container");
  let hungWord = document.querySelector(".word-container")

  const initGame = () => {

    return hangedRandomWord.forEach((char) => {
      let charContainer = document.createElement('div');
      let charText = document.createElement('p')
      let borderBottom = document.createElement('div');
      charText.innerText = char;
      charText.className = `hidden letter-${char}`
      charContainer.className = 'word-container-letter';

      hungWord.appendChild(charContainer);
      charContainer.appendChild(charText);
      charContainer.appendChild(borderBottom)
    } )
  }

  letterContainer.addEventListener('click', (event) => {
    let selectedLtr = event.target.innerText;
    if (playerLtrGuess[selectedLtr] !== undefined) {
      alert("You've already hit this")
    } else {
      if (hangedRandomWord.contains(selectedLtr) && playerResult.indexOf(selectedLtr) === -1) {
        isInWord(selectedLtr);
      } else {
        wrongGuess(selectedLtr);
      }
    }
  })

  const isInWord = (ltr) => {

    let letterToShow = document.getElementsByClassName(`letter-${ltr}`);
    letterToShow.style.visibility = 'visible';

  }

  const wrongGuess = (letter) => {
    counter++;

    let hangPartToShow;


  }

  const alreadyGuessed = () => {

  }

  const winner = () => {
    let winnerModal = document.querySelector('win-modal')
  }

  const lostGame = () => {
    let loserModal = document.querySelector('lose-modal')

  }

  const replayGame = () => {

  }


  initGame()


  // letter.addEventListener('click', (e) => {
  //   alert((e.target).innerText)
  // })

})