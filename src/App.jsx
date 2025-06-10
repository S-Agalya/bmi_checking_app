
import { useState } from "react"
import "./App.css"

function App() {
  const [height,setHeight]=useState("")
  const[weight,setWeight]=useState("")
  const [bmi,setBmi]=useState(null)
  const [bmiStatus,setBmiStatus]=useState("")
const [errorMessage,setErrorMessage]=useState("")

const calculateBmi=()=>{
if(height && weight){
const heightInMeters=height/100;
const bmivalue=weight/(heightInMeters**2)
setBmi(bmivalue.toFixed(2))
if(bmivalue<18.5){
  setBmiStatus("Underweight")
}else if(bmivalue >= 18.5 && bmivalue <24.9){
  setBmiStatus("Normal Weight")
}else if(bmivalue >= 25 && bmivalue <29.9){
  setBmiStatus("OverWeight")
}else {
  setBmiStatus("Obese")
}
setErrorMessage("")
}else if (height === "" || weight === ""){
  setErrorMessage("Please fill in both fields.");
    setBmi(null);
    setBmiStatus("");
    return;
  
}  if (isNaN(height) || isNaN(weight)) {
    setErrorMessage("Height and Weight must be numbers.");
    setBmi(null);
    setBmiStatus("");
    return;
  }

}

const Clearall=()=>{
  setHeight("")
  setWeight("")
  setBmi(null);
    setBmiStatus("");
}
  
  return(
    <>
    <div className="bmi-calculator">
      <div className="box"></div>
      <div className="data">
        <h1 className="title">BMI Calculator</h1>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <div className="input-container">
          <label > Enter your height(CM): 
          <input placeholder=" Enter height" onChange={(e)=>setHeight(e.target.value)} value={height}/>
        </label>
        </div>
         
       <div className="input-container">
         <label > Enter your weight(Kg): 
          <input placeholder=" Enter weight" onChange={(e)=>setWeight(e.target.value)} value={weight}/>
        </label>
       </div>

        <button onClick={calculateBmi}>Calculate BMI</button>
 <button onClick={Clearall}>Clear</button>
      {bmi !== null && (<div className="result">
        <p>Your BMI is :{bmi}</p>
        <p>Status: {bmiStatus}</p>
      </div>)}
      </div>
    </div>
    </>
  )

}
export default App
