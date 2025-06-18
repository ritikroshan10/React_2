import { useState } from "react";
import LoanForm from "./components/LoanForm";
import LoanResult from "./components/LoanResult";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    customerName: "",
    loanPurpose: "",
    loanAmount: "",
    years: "",
    months: "",
    days: "",
    interestRate: "",
    gstRate: ""
  });

  const [monthlyAmount, setMonthlyAmount] = useState(null);
  const [details, setDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const calculateLoan = () => {
    const { loanAmount, years, months, days, interestRate, gstRate } = formData;
    const loan = parseFloat(loanAmount);
    const totalMonths =
      parseInt(years || 0) * 12 + parseInt(months || 0) + parseInt(days || 0) / 30;
    const interest = parseFloat(interestRate) / 100;
    const gst = parseFloat(gstRate) / 100;

    if (loan && totalMonths && interest >= 0 && gst >= 0) {
      const base = loan / totalMonths;
      const interestAmount = base * interest;
      const gstAmount = (base + interestAmount) * gst;
      const total = base + interestAmount + gstAmount;

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
        <div className="form-section">
          <LoanForm
            formData={formData}
            setFormData={setFormData}
            onCalculate={calculateLoan}
          />
        </div>

        <div className="output-section">
          <LoanResult
            monthlyAmount={monthlyAmount}
            details={details}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            customerName={formData.customerName}
            loanPurpose={formData.loanPurpose}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
