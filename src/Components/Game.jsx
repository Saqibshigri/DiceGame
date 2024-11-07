import { useState } from 'react'
import dice1 from '../assets/img/dice/dice1.png';
import dice2 from '../assets/img/dice/dice2.png';
import dice3 from '../assets/img/dice/dice3.png';
import dice4 from '../assets/img/dice/dice4.png';
import dice5 from '../assets/img/dice/dice5.png';
import dice6 from '../assets/img/dice/dice6.png';
import App from '../App.jsx'
const Game = () => {
    const [counter, setCounter] = useState()
    
    const diceImages = {
        1: dice1,
        2: dice2,
        3: dice3,
        4: dice4,
        5: dice5,
        6: dice6,
      };
      
     
    const [disenumber, setDisenumber] = useState()
    const num = [1,2,3,4,5,6]
    const numHandler =(e)=>{
        setDisenumber(e) 
    }
    const Randomfun = () => {
        const randomDice = Math.floor(Math.random() * 6) + 1;
        setDice(randomDice);      
       
    if (disenumber == randomDice) {
        setCounter((prev) => prev + 2);
      } else {
        setCounter((prev) => prev - 2);
      }
   }
   const [dice, setDice] = useState(1)
   const [home, setHome] = useState(false)
   const handleHomepage = ()=>{
        setHome(true)

   }       
   {home?   <Game/>: <App/>}
       
  return (
 <>

 
        <h2 className="ml-[40%] mt-5 w-full font-bold text-2xl">Select A Number</h2>
        <button onClick={handleHomepage} className=" mt-5 ml-[80%] mr-5 px-4 py-2    bg-blue-200 text-white rounded font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">  {home ? "Switch to Game" : "Switch to Home"} Homepage</button>

     <div className="flex flex-row justify-center items-center mt-5">

  {num.map((value) => (
     <p  onClick={() => numHandler(value)}
     className=" {disenumber ? 'bg-emerald-500' : 'bg-black'} bg-black m-2 w-8 h-8  rounded flex items-center justify-center hover:bg-emerald-500 hover:text-xl text-white" key={value}>
      {value}    

    </p>
   ))}
 {

 }
</div >

<div className='flex mt-5 p-5  flex-col justify-center items-center'>
<h3>
Click on Dice to Roll
</h3>
   <img onClick={Randomfun}  src={diceImages[dice]} alt={`Dice ${dice}`} />
     <h1>Total Score</h1>
   <h3 className='text-red-500 font-bold text-3xl'>{counter}</h3>
   <button onClick={()=>setCounter(0)} className="px-4 py-2 mt-5 bg-blue-200 text-white rounded font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">Reset Score</button>

   <div>
    <ul>
        <li>Select Number any number
        </li>
        <li>
        Click on dice image to roll it

        </li>
        <li>Select number is equal to obtained dice result then you will get same point of dice
        </li>
        <li>if You are Wrong Score will be deducted by 2 points
        </li>
    </ul>
   </div>
</div>
 </>  
 )
}

export default Game