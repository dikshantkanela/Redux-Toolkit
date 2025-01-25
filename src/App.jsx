import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment,incrementByAmount,reset } from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch(); // USED TO DISPATCH ANY PARTICULAR ACTION (DEFINED IN THE SLICE) WHEN AN EVENT-HANDLER IS TRIGGERED 
  const handleDecrementClick = () => {
    dispatch(decrement());  // DECREMENT ACTION BEING DISPATCHED FROM THE 
  };
  const handleIncrementClick = () => {
    dispatch(increment()) // INCREMENT ACTION BEING DISPATCHED 
  };
  const handleReset = ()=>{
    dispatch(reset())
  }

  const handleChange = (e)=>{
    setAmount(e.target.value)
  }
  const handleIncByAmount = ()=>{
    dispatch(incrementByAmount(Number(amount))); // amount is the payload
  }
  const [amount,setAmount] = useState(0);
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}> + </button>
        <p>Count :{count} </p>
        <button onClick={handleDecrementClick}> - </button><br /><br />
        <button onClick={handleReset}> Reset </button> <br /><br />
        <input type="number" onChange={handleChange} value={amount} placeholder="Enter amount" />
        <button onClick={handleIncByAmount}>Increment by amount</button>
      </div>
    </>
  );
}

export default App;
