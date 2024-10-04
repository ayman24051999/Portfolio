import React, { useEffect, useState } from "react";
import Square from "./square";

function Tiktak() {
    const [value, setValue] = useState(Array(9).fill(null));
    const [prevState, setPrevState] = useState(false);

    useEffect(() => {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (value[a] && value[a] === value[b] && value[a] === value[c]) {
                alert(`we have a winner ${value[a]}`);
                setValue(Array(9).fill(null));
            }
        }
    }, [value]);

    const handleclick = (index) => {
        setValue((prevValues) => {
            const updatedValues = [...prevValues];
            if (prevState == false) {
                updatedValues[index] = "X";
                setPrevState(true);
            } else {
                updatedValues[index] = "O";
                setPrevState(false);
            }

            return updatedValues;
        });
    };

    return (
        <div className='flex flex-col space-y-1 justify-center items-center h-screen'>
            {" "}
            <div className='flex'>
                <Square value={value[0]} onClick={() => handleclick(0)} />
                <Square value={value[1]} onClick={() => handleclick(1)} />
                <Square value={value[2]} onClick={() => handleclick(2)} />
            </div>
            <div className='flex'>
                <Square value={value[3]} onClick={() => handleclick(3)} />
                <Square value={value[4]} onClick={() => handleclick(4)} />
                <Square value={value[5]} onClick={() => handleclick(5)} />
            </div>
            <div className='flex'>
                <Square value={value[6]} onClick={() => handleclick(6)} />
                <Square value={value[7]} onClick={() => handleclick(7)} />
                <Square value={value[8]} onClick={() => handleclick(8)} />
            </div>
        </div>
    );
}

export default Tiktak;
