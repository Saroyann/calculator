import React from 'react'

const CalculatorDisplay = ({ expression, currentInput }) => {
    return (
        <div className='w-[325px] bg-slate-500 rounded-t-lg'>
            <div className='w-full h-[30px] bg-slate-700 text-right text-white text-sm font-medium p-1 overflow-x-auto whitespace-nowrap'>
                {expression}
            </div>
            <div className='w-full h-[50px] bg-slate-700 text-right text-white text-3xl font-semibold p-2 overflow-x-auto whitespace-nowrap overflow-hidden'>
                {currentInput}
            </div>
        </div>
    )
}

export default CalculatorDisplay