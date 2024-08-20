import React from 'react'

const CalculatorButton = ({ onButtonPress }) => {
    const buttons = ['AC', 'DEL', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

    return (
        <div className='w-[325px] h-[390px] grid grid-cols-4 gap-1 p-1 bg-slate-600 rounded-b-lg'>
            {buttons.map((btn, index) => (
                <button
                    key={index}
                    onClick={() => onButtonPress(btn)}
                    className={`
                        ${btn === 'AC' || btn === '=' ? 'col-span-2' : ''}
                        ${btn === 'AC' ? 'bg-red-500 hover:bg-red-600' :
                            btn === '=' ? 'bg-green-500 hover:bg-green-600' :
                                ['÷', '×', '-', '+'].includes(btn) ? 'bg-yellow-500 hover:bg-yellow-600' :
                                    'bg-gray-200 hover:bg-gray-300'}
                        text-black font-bold py-2 rounded
                    `}
                >
                    {btn}
                </button>
            ))}
        </div>
    )
}

export default CalculatorButton