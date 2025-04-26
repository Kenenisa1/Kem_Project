import Square from "./Square";

export default function Board()
{
    return(
        <>
        <h1> Welcome To TicTacToe Game </h1>
        <div className="bord-row">
            <Square/>  
            <Square/>  
            <Square/>   
        </div>

        <div className="bord-row">
            <Square/>    
            <Square/>  
            <Square/>   
        </div>

        <div className="bord-row">
            <Square/>    
            <Square/>  
            <Square/>   
        </div>
        </>
    )
}