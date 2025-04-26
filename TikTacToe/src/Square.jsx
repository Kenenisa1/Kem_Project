import { useState } from "react";

export default function Square()
{
    const [value, setValue] = useState(null);

    function handleValue()
    {
        setValue('K');
    }

    return (
        <>
            <button onClick={handleValue}>               
                {value}
            </button>
        </>
    )
}