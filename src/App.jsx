import './App.css'

function App() {
 const handleDecrementClick = ()=>{
  
 }
 const handleIncrementClick = ()=>{

 }

  return (
    <>
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count : </p>
      <button onClick={handleDecrementClick}> - </button>
    </div>
    </>
  )
}

export default App
