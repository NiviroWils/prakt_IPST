function getOptimalBills(sum: number): Record<number, number> { // через Record создаю объект номинал, кол-во купюр номинала
    if (sum <= 0 || !Number.isInteger(sum)) {
        throw new Error("Сумма должна быть положительным целым числом.");
    }

    const denominations = [100, 50, 10, 5, 2, 1]; // номиналы
    const result: Record<number, number> = {}; // для хранения результата

    for (const denomination of denominations) {
        if (sum >= denomination) {
            const count = Math.floor(sum / denomination);
            result[denomination] = count;
            sum -= count * denomination;
        }
    }

    return result;
}

function askForSum() {
    const input = prompt("Введите сумму для разбиения (положительное целое число):");
    if (!input) {
        console.error("Сумма не была введена.");
        return;
    }

    const sum = parseInt(input, 10);
    if (isNaN(sum) || sum <= 0) {
        console.error("Пожалуйста, введите положительное целое число.");
        return;
    }

    try {
        const optimalBills = getOptimalBills(sum);
        console.log(`Разбиение суммы ${sum} на купюры:`, optimalBills);
    } catch (error) {
        console.error(error instanceof Error ? error.message : "Произошла ошибка.");
    }
}


askForSum();
