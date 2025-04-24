import { useState } from 'react'
import MyButton from './MyButton'
import TikTak from './TikTak';

function App() {
  const [count, setCount] = useState(0);
  function handleCount()
  {
    setCount(count+1);
  }

  return (
    <>
      <h1>Tik Tac Toe Game</h1>
      {/* <MyButton count={count} onClick={handleCount}/>
      <MyButton count={count} onClick={handleCount}/> */}
      <TikTak/>

    </>
  )
}

export default App
