import React, {useState} from 'react';
import './Counter.css';

export default function Counter() {
   const [count, setCount] = useState(0);
   
   return (
      <div className='container'>
         <p>Points: {count}</p>
         <div>
            <button className='btn add' onClick={() => setCount(count + 1)}>+</button>
            <button className='btn minus' onClick={() => setCount(count - 1)}>-</button>
         </div>
      </div>
   )
}