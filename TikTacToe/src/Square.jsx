import { useState } from "react";

export default function Square({value, onSquareClick})
{

    return (
        <>
            <button onClick={handleClick}>               
                {value}
            </button>
        </>
    )
}