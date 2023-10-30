// Клас Calculator
function Calculator() {
    // Конструктор класу Calculator
    this.sum = function(a, b) {
        return a + b;
    };

    this.subtract = function(a, b) {
        return a - b;
    };
}

// Клас AdvancedCalculator успадковує методи від Calculator
function AdvancedCalculator() {
    Calculator.call(this); // Наслідуємо методи від Calculator

    // Нові методи для AdvancedCalculator
    this.multiply = function(a, b) {
        return a * b;
    };

    this.divide = function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Ділення на нуль неможливе.";
        }
    };
}

// Створення об'єктів класів
var calculator = new Calculator();
var advancedCalculator = new AdvancedCalculator();

// Використання методів
console.log("Сума: " + calculator.sum(5, 3)); // Виведе: 8
console.log("Різниця: " + calculator.subtract(10, 4)); // Виведе: 6

console.log("Добуток: " + advancedCalculator.multiply(5, 3)); // Виведе: 15
console.log("Частка: " + advancedCalculator.divide(10, 2)); // Виведе: 5
console.log("Частка: " + advancedCalculator.divide(10, 0)); // Виведе: Ділення на нуль неможливе.
