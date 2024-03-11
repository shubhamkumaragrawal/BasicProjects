let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreNo = document.querySelector("#user-score");
const compScoreNo = document.querySelector("#comp-score");

const genCompChoice = () => {
	const options = ["rock", "paper", "scissors"];
	const randIdx = Math.floor(Math.random() * 3);
	return options[randIdx];
};

const drawGame = () => {
	msg.innerText = "Game was Draw. Play again!";
	msg.style.backgroundColor = "#d1754c";
};

const showWinner = (userWin, userChoice, compChoice) => {
	if (userWin)
	{
		userScore++;
		userScoreNo.innerText = userScore;
		msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
		msg.style.backgroundColor = "green";
	}
	else
	{
		compScore++;
		compScoreNo.innerText = compScore;
		msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
		msg.style.backgroundColor = "red";
	}
};

const playGame = (userChoice) => {
	//Generate Computer Choice -> (Modular Way Program)
	const compChoice = genCompChoice();

	if (userChoice === compChoice)
	{  //Draw Game
		drawGame();
	}
	else
	{
		let userWin = true;
		if (userChoice === "rock")
		{  //Scissors, Paper
			userWin = compChoice === "paper" ? false : true;
		}
		else if (userChoice === "paper")
		{  //Rock, Scissors
			userWin = compChoice === "scissors" ? false : true;
		}
		else
		{  //Paper, Rock
			userWin = compChoice === "rock" ? false : true;
		}
		showWinner(userWin, userChoice, compChoice);
	}
};

choices.forEach((choice) => {
	choice.addEventListener("click", () => {
		const userChoice = choice.getAttribute("id");
		playGame(userChoice);
	});
});