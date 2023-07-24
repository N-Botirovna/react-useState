import { useState } from 'react'


function App() {
  
  let [type, setType] = useState("Positive");
  const handleClick1 = ()=>{
    setType("Positive");
  }
  const handleClick2 = ()=>{
    setType("Negative");
  }
  const handleClick3 = (e)=>{
    setType("Neutral");
  }
  const handleChange = (e) =>{
    if(e.target.value == "1"){
      setType("Positive");
    }
    else if(e.target.value == "2"){
      setType("Negative");
    }
    else if(e.target.value == "3"){
      setType("Neutral");
    }
  }
  return (
    <>
      <div className="inputDiv">
        <input type="number" name="input" id="input" placeholder='Enter tab index' onClick={handleChange}/>
        <label htmlFor='input' onClick={handleChange} >Change tab</label>
        
      </div>
      
      <button onClick={handleClick1}>Positive</button>
      <button onClick={handleClick2}>Negative</button>
      <button onClick={handleClick3}>Neutral</button>
      
      <p>{type} content</p>
    </>
  )
}

export default App
