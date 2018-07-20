document.addEventListener('DOMContentLoaded', () => {

  let randomStr = 'Leggings stumptown vape umami meggings lover croix tote bag enamel pin lyft letterpress knausgaard photo booth disrupt roof party Craft beer art party meh tumeric gluten actually four dollar toast plaid Wolf migas distillery humblebrag tilde fanny pack listicle keffiyeh labyrinth paleo sustainable Plaid four dollar toast truffaut listicle irony mixtape tousled hella locavore put bird poutine Etsy wayfarers kickstarter hammock asfuck'
  const randomWords = randomStr.split(' ');
  let hangedRandomWord = randomWords[Math.floor(Math.random()*randomWords.length)].split('')

  let counter = 0;
  let turns = 7;
  let playerResult = [];
  let playerLtrGuess = [];
  let lengthOfLines = hangedRandomWord.length;

  let letterContainer = document.querySelector(".letters-container");
  let hungWord = document.querySelector(".word-container")

  letterContainer.addEventListener('click', (event) => {
    console.log(event.target.innerText)
  })

  const initGame = () => {

    return hangedRandomWord.forEach((char) => {
      let charContainer = document.createElement('div');
      let charText = document.createElement('p')
      let borderBottom = document.createElement('div');
      charText.innerText = char;
      charContainer.className = 'word-container-letter';

      hungWord.appendChild(charContainer);
      charContainer.appendChild(charText);
      charContainer.appendChild(borderBottom)
    } )
  }

  const isInWord = (ltr) => {

  }

  const wrongGuess = (letter) => {

  }

  const winner = () => {

  }

  const lostGame = () => {

  }

  const replayGame = () => {

  }


  initGame()


  // letter.addEventListener('click', (e) => {
  //   alert((e.target).innerText)
  // })

})