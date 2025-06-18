const LoanResult = ({
    monthlyAmount,
    details,
    showDetails,
    setShowDetails,
    customerName,
    loanPurpose
}) => {
    return (
        <div className="result">
            {monthlyAmount ? (
                <>
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
                                <div style={{ marginTop: "15px", textAlign: "left", fontSize: "15px" }}>
                                    <p>💰 Base Monthly: ₹{details.base}</p>
                                    <p>📈 Interest Added ({details.interestRate}%): ₹{details.interest}</p>
                                    <p>💸 GST Added ({details.gstRate}%): ₹{details.gst}</p>
                                    <p><strong>🔚 Final Monthly Installment: ₹{details.total}</strong></p>
                                </div>
                            ) : null}
                        </>
                    ) : null}
                </>
            ) : (
                <p style={{ color: "#777" }}>Please fill the form to see results.</p>
            )}
        </div>
    );
};

export default LoanResult;
