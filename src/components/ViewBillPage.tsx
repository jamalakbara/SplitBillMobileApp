import { ArrowLeft, ChevronDown, ChevronUp, Share2, Edit3 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface UserProfile {
  id: number;
  name: string;
  image: string;
}

interface ViewBillPageProps {
  onNavigate: (page: string, userProfile?: UserProfile) => void;
}

const people = [
  {
    id: 1,
    name: "Cooper",
    image: "https://images.unsplash.com/photo-1683342599486-761e6afce7e4?w=100&h=100&fit=crop",
    total: 22.0,
    items: [
      { name: "8\" Pizza", quantity: 2, unitPrice: 22.0, totalPrice: 44.0, image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?w=100&h=100&fit=crop" },
      { name: "8\" Pizza", quantity: 2, unitPrice: 22.0, totalPrice: 44.0, image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?w=100&h=100&fit=crop" },
    ],
  },
  {
    id: 2,
    name: "Jessy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    total: 22.0,
    items: [
      { name: "8\" Pizza", quantity: 2, unitPrice: 22.0, totalPrice: 44.0, image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?w=100&h=100&fit=crop" },
      { name: "8\" Pizza", quantity: 2, unitPrice: 22.0, totalPrice: 44.0, image: "https://images.unsplash.com/photo-1681567604770-0dc826c870ae?w=100&h=100&fit=crop" },
    ],
  },
];

export function ViewBillPage({ onNavigate }: ViewBillPageProps) {
  const [expandedPerson, setExpandedPerson] = useState<number | null>(null);

  const togglePerson = (personId: number) => {
    setExpandedPerson(expandedPerson === personId ? null : personId);
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-6">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => onNavigate("main")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h3 className="text-white">Total bill</h3>
          <button 
            onClick={() => onNavigate("editBill")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Edit3 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
        {/* Total Bill Amount */}
        <div>
          <p className="text-sm text-[#003049]/60 mb-1">Total bill</p>
          <p className="text-4xl text-[#003049]">$243</p>
        </div>

        {/* People Bills */}
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-3xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] overflow-hidden"
          >
            {/* Person Header */}
            <button
              onClick={() => onNavigate("profile", { id: person.id, name: person.name, image: person.image })}
              className="p-4 flex items-center gap-3 w-full text-left"
            >
              <ImageWithFallback
                src={person.image}
                alt={person.name}
                className="w-12 h-12 rounded-full object-cover border-3 border-[#003049]"
              />
              <div className="flex-1">
                <p className="text-[#003049]">{person.name}'s total bill</p>
                <p className="text-sm text-[#003049]/60">${person.total.toFixed(2)}</p>
              </div>
            </button>

            {/* Items List */}
            <div className="px-4 pb-4 space-y-3">
              {person.items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#003049]/20"
                  />
                  <div className="flex-1">
                    <p className="text-[#003049]">{item.name}</p>
                    <p className="text-xs text-[#003049]/60">${item.unitPrice.toFixed(2)}</p>
                  </div>
                  <p className="text-sm text-[#003049]/60">{item.quantity}x</p>
                  <p className="text-[#003049] w-16 text-right">${item.totalPrice.toFixed(1)}</p>
                </div>
              ))}

              {/* See Details Button */}
              <button
                onClick={() => togglePerson(person.id)}
                className="w-full h-10 bg-[#fcbf49] rounded-full flex items-center justify-center gap-2 border-3 border-[#003049] hover:bg-[#fcbf49]/90 transition-colors"
              >
                <span className="text-[#003049]">See details</span>
                {expandedPerson === person.id ? (
                  <ChevronUp className="w-4 h-4 text-[#003049]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#003049]" />
                )}
              </button>

              {/* Expanded Details */}
              {expandedPerson === person.id && (
                <div className="bg-[#eae2b7]/30 rounded-2xl p-4 space-y-2 border-2 border-[#003049]/10">
                  <p className="text-sm text-[#003049]/80">Breakdown</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#003049]/60">Subtotal</span>
                      <span className="text-[#003049]">$88.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#003049]/60">Tax (10%)</span>
                      <span className="text-[#003049]">$8.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#003049]/60">Service charge</span>
                      <span className="text-[#003049]">$5.20</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-[#003049]/20">
                      <span className="text-[#003049]">Total</span>
                      <span className="text-[#003049]">${person.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Tax Section */}
        <div className="flex items-center justify-between px-4 py-3 bg-white rounded-2xl border-3 border-[#003049] shadow-[2px_2px_0px_0px_#003049]">
          <span className="text-[#003049]">TAX</span>
          <span className="text-[#003049]">$17.60</span>
        </div>

        {/* Share Button */}
        <Button
          onClick={() => onNavigate("main")}
          className="w-full h-14 bg-[#fcbf49] hover:bg-[#fcbf49]/90 text-[#003049] rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          <span>SHARE</span>
        </Button>
      </div>
    </div>
  );
}
