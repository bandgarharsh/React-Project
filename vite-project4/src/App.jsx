import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor] = useState('olive');
  // function changeColor(color)
  // {
  //   setColor(color);
  // }
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
            onClick={()=>setColor('red')}
            className='outline-none px-4 rounded-full text-black shadow-lg bg-red-400'>RED</button>
            <button
            onClick={()=>setColor('blue')}
            className='outline-none px-4 rounded-full text-black shadow-lg bg-blue-400'>BLUE</button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
