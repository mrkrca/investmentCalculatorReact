

export default function InputField({handleInputChange, investment}) {


    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <p>
                        <label >INITIAL INVESTMENT</label>
                        <input name="initialInvestment" onChange={handleInputChange} type="text" value={investment.initialInvestment}  required/> 
                    </p>
                    <p>
                        <label >ANNUAL INVESTMENT</label>
                        <input name="annualInvestment" onChange={handleInputChange} type="text" value={investment.annualInvestment}  required/> 
                    </p>
                </div>
                <div>
                    <p>
                        <label >EXPECTED RETURN</label>
                        <input name="expectedReturn" onChange={handleInputChange} type="text" value={investment.expectedReturn} required/> 
                    </p>
                    <p>
                        <label >DURATION</label>
                        <input name="duration" onChange={handleInputChange} type="text" value={investment.duration} required/> 
                    </p>
                    
                </div>
            </div>
        </section>
    )
}

