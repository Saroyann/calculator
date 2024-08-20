import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
    const [currentInput, setCurrentInput] = useState('0');
    const [expression, setExpression] = useState('');
    const [waitingForOperand, setWaitingForOperand] = useState(false);

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setCurrentInput(String(digit));
            setWaitingForOperand(false);
        } else {
            setCurrentInput(currentInput === '0' ? String(digit) : currentInput + digit);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setCurrentInput('0.');
            setWaitingForOperand(false);
        } else if (!currentInput.includes('.')) {
            setCurrentInput(currentInput + '.');
        }
    };

    const clearAll = () => {
        setCurrentInput('0');
        setExpression('');
        setWaitingForOperand(false);
    };

    const deleteLastChar = () => {
        if (currentInput.length > 1) {
            setCurrentInput(currentInput.slice(0, -1));
        } else {
            setCurrentInput('0');
        }
    };

    const performOperation = (operator) => {
        const inputValue = parseFloat(currentInput);
        if (expression === '') {
            setExpression(`${inputValue} ${operator}`);
        } else {
            setExpression(`${expression} ${inputValue} ${operator}`);
        }
        setCurrentInput('0');
        setWaitingForOperand(true);
    };

    const evaluateExpression = () => {
        const fullExpression = `${expression} ${currentInput}`;
        try {
            const result = eval(fullExpression.replace('×', '*').replace('÷', '/'));
            setExpression(fullExpression + ' =');
            setCurrentInput(String(result));
            setWaitingForOperand(true);
        } catch (error) {
            setCurrentInput('Error');
        }
    };

    const handleButtonPress = (value) => {
        switch (value) {
            case 'AC':
                clearAll();
                break;
            case 'DEL':
                deleteLastChar();
                break;
            case '=':
                evaluateExpression();
                break;
            case '+':
            case '-':
            case '×':
            case '÷':
                performOperation(value);
                break;
            case '.':
                inputDecimal();
                break;
            default:
                inputDigit(parseInt(value, 10));
        }
    };

    return (
        <div className="bg-slate-500 w-[330px] rounded-lg shadow-xl overflow-hidden">
            <CalculatorDisplay expression={expression} currentInput={currentInput} />
            <CalculatorButton onButtonPress={handleButtonPress} />
        </div>
    );
};

export default Calculator;