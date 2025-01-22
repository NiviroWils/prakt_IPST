import {EButtonUsage} from "../../common/enum";

export class Calculator {
    private resultContainer: HTMLElement;
    private expression: string = ""; // Текущее выражение

    constructor() {
        // Находим контейнер, в который будет производиться вывода результата
        const container = document.querySelector('[data-container="result"]');
        if (!container) {
            throw new Error("Result container not found");
        }
        this.resultContainer = container as HTMLElement;
    }

    /**
     * Добавить значение к текущему выражению.
     */
    public addToExpression(value: EButtonUsage): void {
        if (
            value === EButtonUsage.OPERATOR_EQUAL ||
            value === EButtonUsage.OPERATOR_AC
        ) {
            return; // Игнорируем некорректные для добавления символы
        }

        const displayValue = value === EButtonUsage.OPERATOR_MULTIPLY ? "*" : value; // Заменяем "X" на "*", т.к. "X" на кнопке не может быть считан как оператор умножения
        this.expression += displayValue;
        this.print(this.expression); // Обновляем отображение текущего выражения
    }

    /**
     * Получить текущее выражение.
     */
    public getExpression(): string {
        return this.expression;
    }

    /**
     * Очистить текущее выражение и результат.
     */
    public clear(): void {
        this.expression = "";
        this.print(0); // Сбрасываем отображение
    }

    /**
     * Полный сброс калькулятора (AC).
     */
    public reset(): void {
        this.clear();
    }

    /**
     * Вычислить результат текущего выражения.
     */
    public evaluate(expression: string): void {
        try {
            const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, ""); //Допустимые для ввода элементы
            const result = eval(sanitizedExpression); // Я выбрала реализацию инфиксного калькулятора, потому буду использовать eval
            this.print(result);
            this.expression = result.toString(); // Сохраняем результат как новое выражение
        } catch (error) {
            this.print("Error");
        }
    }

    /**
     * Вывод результата в контейнер.
     */
    private print(result: string | number): void {
        this.resultContainer.textContent = result.toString();
    }
}
