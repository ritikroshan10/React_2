import { useState } from "react";
import "./App.css";

function App() {
  // for form values
  const [loanAmount, setLoanAmount] = useState("");
  const [months, setMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [gstRate, setGstRate] = useState("");
  // for calcualte monthly amount
  const [monthlyAmount, setMonthlyAmount] = useState(null);
  // Object storing breakdown of amount
  const [details, setDetails] = useState(null);
  // Toggles the visibility of breakdown section
  const [showDetails, setShowDetails] = useState(false);

  // -----------calulate loan--------------

  const calculateLoan = () => {
    const loan = parseFloat(loanAmount);
    const m = parseInt(months);
    const interest = parseFloat(interestRate) / 100;
    const gst = parseFloat(gstRate) / 100;

    if (loan && m && interest >= 0 && gst >= 0) {
      let base = loan / m;
      let interestAmount = base * interest;
      let gstAmount = (base + interestAmount) * gst;
      let total = base + interestAmount + gstAmount;

      setMonthlyAmount(total.toFixed(2));
      // --------------------------------------------

      // ---Saves the detailed breakdown to details state---

      setDetails({
        base: base.toFixed(2),
        interest: interestAmount.toFixed(2),
        interestRate: (interest * 100).toFixed(2),
        gst: gstAmount.toFixed(2),
        gstRate: (gst * 100).toFixed(2),
        total: total.toFixed(2),
      });


      setShowDetails(false);// This line ensures that every time the "Calculate" button is clicked, the "Details" section gets hidden,
      //  even if it was previously shown.
    }
    else {
      setMonthlyAmount("Invalid Input");
      setDetails(null);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Loan Calculator</h2>

      <label>Loan Amount :</label>
      <input
        type="number"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
        placeholder="e.g. 100000"
      />

      <label>Months:</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        placeholder="e.g. 12"
        max={60}
        min={3}
      />

      <label>Interest Rate (%):</label>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
        placeholder="e.g. 10"
      />

      <label>GST Rate (%):</label>
      <input
        type="number"
        value={gstRate}
        onChange={(e) => setGstRate(e.target.value)}
        placeholder="e.g. 18"
      />

      <button onClick={calculateLoan}>Calculate</button>


      {monthlyAmount ? (
        <div className="result">
          Monthly Deposit : ₹{monthlyAmount}
          <br />
          {details ? (
            <button
              className="view-details-btn"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide Details" : "View Details"}
            </button>
          ) : null}

          {showDetails ? (
            <div style={{ marginTop: "15px", textAlign: "left", fontSize: "15px" }}>
              <p>💰 Base Monthly  : ₹{details.base}</p>
              <p>📈 Interest Added ({details.interestRate}%) : ₹{details.interest}</p>
              <p>💸 GST Added ({details.gstRate}%) : ₹{details.gst}</p>
              <p><strong>🔚 Final Monthly Installment : ₹{details.total}</strong></p>
            </div>
          ) : null}

        </div>
      ) : null}

    </div>
  );
}

export default App;
