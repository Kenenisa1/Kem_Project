import App from "./App";

 export default function MyButton({count,onClick})
 {
    return(
        <>
            <button onClick={onClick}>
                clicked{count} times
            </button>
        </>
    )
 }