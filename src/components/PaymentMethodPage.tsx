import { ArrowLeft, CreditCard, Plus, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface PaymentMethodPageProps {
  onNavigate: (page: string) => void;
}

interface PaymentCard {
  id: string;
  bankName: string;
  lastFour: string;
  cardHolder: string;
  type: "visa" | "mastercard" | "amex";
  color: string;
}

const mockCards: PaymentCard[] = [
  {
    id: "1",
    bankName: "CHASE",
    lastFour: "8160",
    cardHolder: "Jacob Jones",
    type: "mastercard",
    color: "#003049",
  },
  {
    id: "2",
    bankName: "CHASE",
    lastFour: "4729",
    cardHolder: "Jane Coo",
    type: "visa",
    color: "#d62828",
  },
];

export function PaymentMethodPage({ onNavigate }: PaymentMethodPageProps) {
  const [selectedCard, setSelectedCard] = useState<string>(mockCards[0].id);

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center gap-4 mb-2 relative">
          <button
            onClick={() => onNavigate("settings")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-center">Accounts</h2>
        </div>
      </div>

      <div className="px-6">
        {/* Select Account Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[#003049]" style={{ fontSize: '20px', fontWeight: 800 }}>
            Select account
          </h2>
          <button
            onClick={() => onNavigate("addCard")}
            className="w-10 h-10 bg-[#fcbf49] rounded-full flex items-center justify-center border-4 border-[#003049] shadow-md hover:scale-105 transition-transform"
          >
            <Plus className="w-5 h-5 text-[#003049]" />
          </button>
        </div>

        {/* Payment Cards Grid */}
        <div className="grid grid-cols-1 gap-4 mb-6">
          {mockCards.map((card) => (
            <button
              key={card.id}
              onClick={() => setSelectedCard(card.id)}
              className={`relative bg-white rounded-3xl p-6 border-4 shadow-lg transition-all ${
                selectedCard === card.id
                  ? "border-[#f77f00] scale-[1.02]"
                  : "border-[#003049]"
              }`}
            >
              {/* Selected Indicator */}
              {selectedCard === card.id && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col items-start">
                  <div className="text-[#003049] mb-2" style={{ fontSize: '18px', fontWeight: 800 }}>
                    {card.bankName}
                  </div>
                  <div className="flex items-center gap-2 text-[#003049]">
                    <CreditCard className="w-8 h-8" />
                    <span style={{ fontSize: '14px', fontWeight: 600 }}>
                      ••••
                    </span>
                  </div>
                </div>
                
                {/* Card Type Logo */}
                <div className="flex items-center gap-1">
                  {card.type === "mastercard" && (
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-[#d62828] opacity-80"></div>
                      <div className="w-6 h-6 rounded-full bg-[#f77f00] opacity-80"></div>
                    </div>
                  )}
                  {card.type === "visa" && (
                    <div className="text-[#003049] tracking-wider" style={{ fontSize: '16px', fontWeight: 900 }}>
                      VISA
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-[#003049]" style={{ fontSize: '20px', fontWeight: 800 }}>
                  •••• {card.lastFour}
                </div>
              </div>

              <div className="mt-3 text-left">
                <div className="text-[#003049] opacity-70" style={{ fontSize: '14px', fontWeight: 600 }}>
                  {card.cardHolder}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Add New Card Button */}
        <button
          onClick={() => onNavigate("addCard")}
          className="w-full bg-white rounded-3xl p-6 border-4 border-dashed border-[#003049] hover:border-[#f77f00] hover:bg-[#fcbf49]/10 transition-all group"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-[#fcbf49] rounded-full flex items-center justify-center border-4 border-[#003049] group-hover:scale-110 transition-transform">
              <Plus className="w-6 h-6 text-[#003049]" />
            </div>
            <span className="text-[#003049]" style={{ fontSize: '18px', fontWeight: 800 }}>
              Add Account
            </span>
          </div>
        </button>

        {/* Info Section */}
        <div className="mt-6 bg-[#fcbf49] rounded-3xl p-4 border-4 border-[#003049] shadow-md">
          <p className="text-[#003049] text-center" style={{ fontSize: '14px', fontWeight: 600 }}>
            💳 Your payment information is secure and encrypted
          </p>
        </div>
      </div>
    </div>
  );
}
