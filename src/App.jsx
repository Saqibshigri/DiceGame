import  { useState } from 'react'
import './index.css'
import dicesImage from './assets/img/dices.png';
import Game from './Components/Game';

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const GameHandle = ()=>{
       setStartGame(true)
  }
  return (
 <>
      {startGame?<Game/>:<div className='flex'>
<div className="image">
      <img className='flex w-[75%] p-4' src={dicesImage} alt="" />
  </div>
  <div className="flex justify-center items-center flex-col p-5 mr-6">
    <h1 className='font-bold '>WelCome To My DiceGame </h1>
    <button onClick={GameHandle} className="px-4 py-2 mt-5 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
  Start Game
</button>
  </div>
</div>}
 </>
  )
}

export default App