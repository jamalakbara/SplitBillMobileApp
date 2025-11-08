import { ArrowLeft, CreditCard, Calendar, Lock, User } from "lucide-react";
import { useState } from "react";

interface AddCardPageProps {
  onNavigate: (page: string) => void;
}

export function AddCardPage({ onNavigate }: AddCardPageProps) {
  const [bankName, setBankName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.replace(/\s/g, "").length <= 16) {
      setCardNumber(formatted);
    }
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.replace(/\//g, "").length <= 4) {
      setExpiryDate(formatted);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/gi, "");
    if (value.length <= 4) {
      setCvv(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle card addition logic here
    onNavigate("paymentMethods");
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center gap-4 mb-2 relative">
          <button
            onClick={() => onNavigate("paymentMethods")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2">Add Account</h2>
        </div>
      </div>

      <div className="px-6">
        {/* Card Preview */}
        <div className="mb-6 bg-gradient-to-br from-[#003049] to-[#004d6d] rounded-3xl p-6 border-4 border-[#003049] shadow-lg min-h-[200px] flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-12 h-10 bg-[#fcbf49] rounded-lg flex items-center justify-center border-2 border-white/40">
              <div className="text-[#003049]" style={{ fontSize: '12px', fontWeight: 900 }}>{bankName || "CHIP"}</div>
            </div>
            <CreditCard className="w-10 h-10 text-white/60" />
          </div>
          
          <div className="space-y-3">
            <div className="text-white tracking-[0.2em]" style={{ fontSize: '20px', fontWeight: 700 }}>
              {cardNumber || "•••• •••• •••• ••••"}
            </div>
            <div className="flex justify-between items-end">
              <div>
                <div className="text-white/60 text-xs mb-1">Card Holder</div>
                <div className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {cardHolder || "YOUR NAME"}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Bank Name */}
          <div>
            <label className="block text-[#003049] mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
              Bank Name
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#fcbf49] rounded-full flex items-center justify-center border-2 border-[#003049]">
                <CreditCard className="w-4 h-4 text-[#003049]" />
              </div>
              <input
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value.toUpperCase())}
                placeholder="BANK NAME"
                className="w-full pl-16 pr-4 py-4 rounded-2xl border-4 border-[#003049] shadow-md focus:outline-none focus:border-[#f77f00] transition-colors uppercase"
                style={{ fontSize: '16px', fontWeight: 600 }}
              />
            </div>
          </div>

          {/* Card Number */}
          <div>
            <label className="block text-[#003049] mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
              Account Number
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#fcbf49] rounded-full flex items-center justify-center border-2 border-[#003049]">
                <CreditCard className="w-4 h-4 text-[#003049]" />
              </div>
              <input
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                className="w-full pl-16 pr-4 py-4 rounded-2xl border-4 border-[#003049] shadow-md focus:outline-none focus:border-[#f77f00] transition-colors"
                style={{ fontSize: '16px', fontWeight: 600 }}
              />
            </div>
          </div>

          {/* Card Holder Name */}
          <div>
            <label className="block text-[#003049] mb-2" style={{ fontSize: '14px', fontWeight: 700 }}>
              Cardholder Name
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#fcbf49] rounded-full flex items-center justify-center border-2 border-[#003049]">
                <User className="w-4 h-4 text-[#003049]" />
              </div>
              <input
                type="text"
                value={cardHolder}
                onChange={(e) => setCardHolder(e.target.value.toUpperCase())}
                placeholder="JOHN DOE"
                className="w-full pl-16 pr-4 py-4 rounded-2xl border-4 border-[#003049] shadow-md focus:outline-none focus:border-[#f77f00] transition-colors uppercase"
                style={{ fontSize: '16px', fontWeight: 600 }}
              />
            </div>
          </div>

          {/* Expiry Date and CVV */}


          {/* Save Card Button */}
          <button
            type="submit"
            className="w-full bg-[#f77f00] text-white py-4 rounded-2xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all mt-6 text-center"
            style={{ fontSize: '18px', fontWeight: 800 }}
          >
            Save Card
          </button>

          {/* Security Note */}
          <div className="mt-4 bg-white rounded-2xl p-4 border-4 border-[#003049] shadow-md">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#fcbf49] rounded-full flex items-center justify-center border-2 border-[#003049] flex-shrink-0 mt-0.5">
                <Lock className="w-4 h-4 text-[#003049]" />
              </div>
              <div>
                <p className="text-[#003049]" style={{ fontSize: '14px', fontWeight: 700 }}>
                  Your card is secure
                </p>
                <p className="text-[#003049]/70 text-xs mt-1">
                  We use industry-standard encryption to protect your payment information.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
