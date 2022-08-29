class Calculator {
    constructor() {
        this.value = 0;
        this.history = [];
    }

    executeCommand(command) {
        this.value = command.execute(this.value);
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        this.value = command.undo(this.value);
    }

    substract(value) {
        this.value = this.value - value;
    }

    multiply(value) {
        this.value = this.value * value;
    }

    divide(value) {
        this.value = this.value / value;
    }
}

class AddCommand {
    constructor(value) {
        this.value = value;
    }

    execute(currentValue) {
        return currentValue + this.value;
    }

    undo(currentValue) {
        return currentValue - this.value;
    }
}

class SubstractCommand {
    constructor(value) {
        this.value = value;
    }

    execute(currentValue) {
        return currentValue - this.value;
    }

    undo(currentValue) {
        return currentValue + this.value;
    }
}


class MultiplyCommand {
    constructor(value) {
        this.value = value;
    }

    execute(currentValue) {
        return currentValue * this.value;
    }

    undo(currentValue) {
        return currentValue / this.value;
    }
}

class DivideCommand {
    constructor(value) {
        this.value = value;
    }

    execute(currentValue) {
        if (this.value !== 0) {
            return currentValue / this.value;
        } else {
            throw new Error('Cannot divide by 0');
        }
    }

    undo(currentValue) {
        return currentValue * this.value;
    }
}

class AddAndMultiplyCommand {
    constructor(valueToAdd, valueToMultiply) {
        this.addCommand = new AddCommand(valueToAdd);
        this.multiplyCommand = new MultiplyCommand(valueToMultiply);
    }

    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue);
        return this.multiplyCommand.execute(newValue);
    }

    undo(currentValue) {
        const newValue = this.multiplyCommand.undo(currentValue);
        return this.addCommand.undo(newValue);
    }
}

class AddAndDivideCommand {
    constructor(valueToAdd, valueToDivide) {
        this.addCommand = new AddCommand(valueToAdd);
        this.divideCommand = new DivideCommand(valueToDivide);
    }

    execute(currentValue) {
        const newValue = this.addCommand.execute(currentValue);
        return this.divideCommand.execute(newValue);
    }

    undo(currentValue) {
        const newValue = this.divideCommand.undo(currentValue);
        return this.addCommand.undo(newValue);
    }
}

const calculator = new Calculator();
// calculator.executeCommand(new AddCommand(10));
// calculator.executeCommand(new MultiplyCommand(2));
//calculator.executeCommand(new AddAndMultiplyCommand(10, 2));
calculator.executeCommand(new AddAndDivideCommand(10, 2));
console.log(calculator.value);
calculator.undo();
console.log(calculator.value);
