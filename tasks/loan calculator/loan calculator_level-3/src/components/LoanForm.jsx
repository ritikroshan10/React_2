const LoanForm = ({ formData, setFormData, onCalculate }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <label>Customer Name:</label>
            <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
            />

            <label>Loan Purpose:</label>
            <input
                type="text"
                name="loanPurpose"
                value={formData.loanPurpose}
                onChange={handleChange}
                placeholder="e.g. Home Renovation"
            />

            <label>Loan Amount:</label>
            <input
                type="number"
                name="loanAmount"
                value={formData.loanAmount}
                onChange={handleChange}
                placeholder="e.g. 100000"
            />

            <label>Loan Duration:</label>
            <div style={{ display: "flex", gap: "10px" }}>
                <input
                    type="number"
                    name="years"
                    value={formData.years}
                    onChange={handleChange}
                    placeholder="Years"
                    min="0"
                    max="6"
                />
                <input
                    type="number"
                    name="months"
                    value={formData.months}
                    onChange={handleChange}
                    placeholder="Months"
                    min="0"
                    max="11"
                />
                <input
                    type="number"
                    name="days"
                    value={formData.days}
                    onChange={handleChange}
                    placeholder="Days"
                    min="0"
                    max="29"
                />
            </div>

            <label>Interest Rate (%):</label>
            <input
                type="number"
                name="interestRate"
                value={formData.interestRate}
                onChange={handleChange}
                placeholder="e.g. 10"
            />

            <label>GST Rate (%):</label>
            <input
                type="number"
                name="gstRate"
                value={formData.gstRate}
                onChange={handleChange}
                placeholder="e.g. 18"
            />

            <button onClick={onCalculate}>Calculate</button>
        </>
    );
};

export default LoanForm;
