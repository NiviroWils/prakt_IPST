import { Calculator } from "./calculator";
import { EButtonUsage } from "../../common/enum";

/**
 * Инициализация обработчиков кнопок для калькулятора.
 */
export function setupCalculator(): void {

    const calculator = new Calculator();

    const buttons = [
        ...document.querySelectorAll('[data-container="action-button"]'),
    ] as HTMLButtonElement[];

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const operation = button.innerText.trim() as EButtonUsage;

            switch (operation) {
                case EButtonUsage.OPERATOR_EQUAL:
                    const expression = calculator.getExpression();
                    calculator.evaluate(expression);
                    break;

                case EButtonUsage.OPERATOR_C:
                    calculator.clear();
                    break;

                case EButtonUsage.OPERATOR_AC:
                    calculator.reset();
                    break;

                default:
                    // Для остальных кнопок добавляем символ в выражение
                    calculator.addToExpression(operation);
            }
        });
    });
}
