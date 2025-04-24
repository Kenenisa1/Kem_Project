import Board from "./Board";

export default function TikTak()
{
    return(
        <>
        <div className="bord-row">
            <Board/>  
            <Board/>
            <Board/>  
        </div>

        <div className="bord-row">
            <Board/>  
            <Board/>
            <Board/>  
        </div>

        <div className="bord-row">
            <Board/>  
            <Board/>
            <Board/>  
        </div>
        </>
    )
}