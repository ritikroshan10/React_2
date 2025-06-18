import { useState } from "react";
import "./App.css";

function App() {
  const [customerName, setCustomerName] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [monthlyAmount, setMonthlyAmount] = useState(null);
  const [details, setDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const calculateLoan = () => {
    const loan = parseFloat(loanAmount);
    const y = parseInt(years) || 0;
    const m = parseInt(months) || 0;
    const d = parseInt(days) || 0;
    const interest = parseFloat(interestRate) / 100;
    const gst = parseFloat(gstRate) / 100;

    const totalMonths = y * 12 + m + d / 30;

    if (loan && totalMonths > 0 && interest >= 0 && gst >= 0) {
      let base = loan / totalMonths;
      let interestAmount = base * interest;
      let gstAmount = (base + interestAmount) * gst;
      let total = base + interestAmount + gstAmount;

      setMonthlyAmount(total.toFixed(2));
      setDetails({
        base: base.toFixed(2),
        interest: interestAmount.toFixed(2),
        interestRate: (interest * 100).toFixed(2),
        gst: gstAmount.toFixed(2),
        gstRate: (gst * 100).toFixed(2),
        total: total.toFixed(2),
      });
      setShowDetails(false);
    } else {
      setMonthlyAmount("Invalid Input");
      setDetails(null);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Loan Calculator</h2>

      <div className="flex-container">
        {/* Left Section - Form */}
        <div className="form-section">
          <label>Customer Name:</label>
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="e.g. John Doe" />

          <label>Loan Purpose:</label>
          <input type="text" value={loanPurpose} onChange={(e) => setLoanPurpose(e.target.value)} placeholder="e.g. Home Renovation" />

          <label>Loan Amount:</label>
          <input type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="e.g. 100000" />

          <label>Loan Duration:</label>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="Years" min={0} max={6} />
            <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} placeholder="Months" min={0} max={11} />
            <input type="number" value={days} onChange={(e) => setDays(e.target.value)} placeholder="Days" min={0} max={29} />
          </div>

          <label>Interest Rate (%):</label>
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="e.g. 10" />

          <label>GST Rate (%):</label>
          <input type="number" value={gstRate} onChange={(e) => setGstRate(e.target.value)} placeholder="e.g. 18" />

          <button onClick={calculateLoan}>Calculate</button>
        </div>

        {/* Right Section - Output */}
        <div className="output-section">
          {monthlyAmount ? (
            <div className="result">
              <p><strong>Customer:</strong> {customerName}</p>
              <p><strong>Purpose:</strong> {loanPurpose}</p>
              <p><strong>Monthly Deposit:</strong> ₹{monthlyAmount}</p>

              {details ? (
                <>
                  <button
                    className="view-details-btn"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? "Hide Details" : "View Details"}
                  </button>
                  {showDetails ? (
                    <div
                      style={{ marginTop: "15px", textAlign: "left", fontSize: "15px" }}
                    >
                      <p>💰 Base Monthly : ₹{details.base}</p>
                      <p>📈 Interest Added ({details.interestRate}%): ₹{details.interest}</p>
                      <p>💸 GST Added ({details.gstRate}%): ₹{details.gst}</p>
                      <p><strong>🔚 Final Monthly Installment : ₹{details.total}</strong></p>
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
          ) : null}
        </div>

      </div>
    </div>
  );

}

export default App;
