import React, { useState } from "react";
import "../css/PaymentIntegration.css";

interface PaymentProps {
  userId: string;
  userName: string;
  tourName: string;
  amount: number;
}

const PaymentIntegration: React.FC<PaymentProps> = ({
  userId,
  userName,
  tourName,
  amount,
}) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // Example API call (replace with Stripe/SSLCommerz etc.)
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          tourName,
          amount,
          cardNumber,
          expiry,
          cvv,
        }),
      });

      if (response.ok) {
        setSuccess("Payment successful! 🎉");
        setCardNumber("");
        setExpiry("");
        setCvv("");
      } else {
        setError("Payment failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="payment-container">
      <div className="payment-card">

        <h2>
          Complete <span>Payment</span>
        </h2>

        <p className="subtitle">
          User: <strong>{userName}</strong>
        </p>

        <div className="payment-details">
          <p><strong>Tour:</strong> {tourName}</p>
          <p><strong>Amount:</strong> ৳ {amount}</p>
        </div>

        {success && <div className="alert success">{success}</div>}
        {error && <div className="alert error">{error}</div>}

        <form onSubmit={handlePayment}>
          <div className="form-group">
            <label>Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </div>

          <div className="row">
            <div className="form-group">
              <label>Expiry</label>
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn-pay" disabled={loading}>
            {loading ? "Processing..." : `Pay ৳${amount}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentIntegration;