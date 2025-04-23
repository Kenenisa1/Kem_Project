import { useState } from 'react'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0);
  function handleCount()
  {
    setCount(count+1);
  }

  return (
    <>
      <h1>Handle count Function</h1>
      <MyButton count={count} onClick={handleCount}/>
      <MyButton count={count} onClick={handleCount}/>

    </>
  )
}

export default App
