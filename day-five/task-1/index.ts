type GameChoice = "Камень" | "Ножницы" | "Бумага";

function playRockPaperScissors(): void {
    const choices: GameChoice[] = ["Камень", "Ножницы", "Бумага"];

    
    const playerInput = prompt("Введите цифру для выбора:\n1 - Камень\n2 - Ножницы\n3 - Бумага")?.trim();

   
    const playerIndex = parseInt(playerInput || "", 10) - 1; // преобразуем ввод в индекс массива
    if (isNaN(playerIndex) || playerIndex < 0 || playerIndex >= choices.length) {
        alert("Некорректный ввод! Попробуйте снова.");
        return;
    }

    const playerChoice = choices[playerIndex];

    const computerChoice: GameChoice =
        choices[Math.floor(Math.random() * choices.length)];

    
    let result: string;
    if (playerChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (playerChoice === "Камень" && computerChoice === "Ножницы") ||
        (playerChoice === "Ножницы" && computerChoice === "Бумага") ||
        (playerChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }

 
    alert(
        `Ваш выбор: ${playerChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`
    );
}

playRockPaperScissors();
