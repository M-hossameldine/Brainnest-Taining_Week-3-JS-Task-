const gameSelections = ['ROCK', 'PAPER', 'SCISSORS'];

/*
 * function to get random value starts from 0 to the provided value
 * args: [ maxValue: the maximum whole value >= 1 ]
 * return value: random number value bigger than >= 0
 */
const getRandomNumber = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};

/*
 * Fn takes player input
 * args: [ msg: case insensitive string must be "ROCK" or "PAPER" or "SCISSORS" ]
 * return value: a capitalized version of one of three provided values above.
 */
const playerSelectionHandler = (msg) => {
  const promptMsg = msg ? msg : 'Make a choice? "Rock" | "Paper" | "Scissors"';

  const playerSelection = prompt(promptMsg);

  let standardValue = playerSelection.toUpperCase();

  // In case player entered an invalid value
  if (!gameSelections.includes(standardValue)) {
    standardValue = playerSelectionHandler(
      `"${playerSelection}" is not a valid option? Choose one of: "Rock" | "Paper" | "Scissors"`
    );
  }

  return standardValue;
};

/*
 * function choose random value of the gameSelctions: "ROCK" or "PAPER" or "SCISSORS"
 * return value: string
 */
const computerPlay = () => gameSelections[getRandomNumber(3)];

/*
 * fn decides who is the winner for one round
 * args: [
 *    playerSelection: string - one value of the "gameSelections",
 *    computerSelection: string - random value of the "gameSelections",
 * ]
 * return value: 'P' | 'C' | 'null'
 * 'P' refers to player win
 * 'C' refers to computer win
 * 'null' refers to providing invalid values
 */
const playRound = (playerSelection, computerSelection) => {
  let winner = null;

  if (playerSelection == computerSelection) return null;

  switch (playerSelection) {
    case 'ROCK':
      winner = computerSelection === 'SCISSORS' ? 'P' : 'C';
      break;
    case 'PAPER':
      winner = computerSelection === 'ROCK' ? 'P' : 'C';
      break;
    case 'SCISSORS':
      winner = computerSelection === 'PAPER' ? 'P' : 'C';
      break;
    default:
      winner = null;
  }

  return winner;
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  let round = 1;

  console.log(`********* Round ${round} ************`);

  while (round < 6) {
    const playerSelection = playerSelectionHandler();
    const computerSelection = computerPlay();

    console.log(
      `PLAYER ==> ${playerSelection} Vs. ${computerSelection} <== COMPUTER`
    );

    if (
      playerSelection !== computerSelection &&
      playerSelection &&
      computerSelection
    ) {
      const roundResult = playRound(playerSelection, computerSelection);

      !!roundResult && roundResult === 'P' ? playerScore++ : computerScore++; // increase the score of winner in this round

      console.log(`PLAYER ${playerScore} : ${computerScore} COMPUTER`);

      if (playerScore === 3 || computerScore === 3) break;

      if (round < 5) console.log(`********* Round ${round + 1} ************`); // should not be displayed in last round

      round++;
    }
  }

  const result =
    playerScore > computerScore
      ? 'We have a WINNER!'
      : 'Good luck next time, LOSER';

  // display final result
  console.log(`******************************`);
  console.log(result);

  alert(result);

  return result;
};

game();
