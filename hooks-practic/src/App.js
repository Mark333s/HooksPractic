import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';

function App() {
  let [playerCounter1, setPlayerCounter1] = useState(10); 
  let [playerCounter2, setPlayerCounter2] = useState(10);
  
  
  return (
    <div className='mainBlock'>
      <div className='block1'>
        <div>Result1</div>
        <div>{playerCounter1}</div>
        <button onClick={()=>{
          setPlayerCounter1((actual)=> actual +1)
        }}>+</button>
      </div>
      <hr />
      <div className='block2'>
        <div>Result2</div>
        <div>{playerCounter2}</div>
        <button onClick={()=>{
          setPlayerCounter2((actual)=> actual +1)
        }}>+</button>
      </div>
      <hr />
      <button onClick={()=>{
         setPlayerCounter1((actual)=> actual -1)
         setPlayerCounter2((actual)=> actual -1)
      }}>-</button>
      <button onClick={()=>{
         setPlayerCounter1(10)
         setPlayerCounter2(10)
      } } >reset</button>
    </div>
  );
}

export default App;
