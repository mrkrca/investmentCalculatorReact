import React, {useState, useEffect} from "react"
import "./index.css"
import InputField from "./components/InputHandler"
import Results from "./components/Results"
import  {calculateInvestmentResults} from "./util/investment"





function App() {


  
const [investment, setInvestment] = useState({
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  total: 0,
  duration: 0,
});  

const isInputValid = investment.duration >= 1;

function handleInputChange(event){
const {name, value} = event.target;
  setInvestment({
      ...investment,
      [name]: +value

  });
  console.log(investment);
}





useEffect(() => {   
  console.log(investment);
  
}, [investment]);

const [totalInvested, setTotalInvested] = useState(0)
const [totalInt, setTotalIntrest] = useState(0)

const result = calculateInvestmentResults({
  ...investment,
  totalInvested,
  totalInt,
});


  return (
    <>
      <InputField
      handleInputChange={handleInputChange}
      investment={investment}


      />
      {isInputValid ?  <Results
      investment={investment}
      result={result}
      isInputValid={isInputValid}
      /> : <p className="center">Duration of Investment must be greater than ZERO</p>}
     
    </>
  
    
  )
}

export default App
