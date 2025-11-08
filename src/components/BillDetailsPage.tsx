import { ArrowLeft, HelpCircle, RotateCw, Edit3, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import receiptImage from "figma:asset/debd01cd97289d248f31e8642c4c4b5bad287541.png";

interface BillDetailsPageProps {
  onNavigate: (page: string) => void;
}

const billItems = [
  { name: "Chinese Buffet", quantity: 4, price: 51 },
  { name: "Soda", quantity: 4, price: 7 },
  { name: "Desserts", quantity: 4, price: 15 },
];

const breakdown = [
  { label: "Subtotal", amount: 73 },
  { label: "Tax", amount: 4 },
  { label: "Service charge", amount: 0 },
  { label: "Discount", amount: 0 },
  { label: "Others", amount: 2, hasInfo: true },
];

export function BillDetailsPage({ onNavigate }: BillDetailsPageProps) {
  return (
    <div className="min-h-screen bg-[#eae2b7] pb-6">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => onNavigate("createBill")}
            className="w-10 h-10 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h3 className="text-white">Split bill details</h3>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
        {/* Receipt Scanned Card */}
        <div className="bg-white p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049]">
          <h3 className="text-[#003049] mb-2">Receipt scanned</h3>
          <p className="text-sm text-[#003049]/60 mb-4">
            Tap the image below to see your receipt preview.
          </p>

          <div className="flex items-center gap-4">
            <div className="w-24 h-32 bg-[#eae2b7] rounded-2xl border-3 border-[#003049] overflow-hidden flex items-center justify-center">
              <img
                src={receiptImage}
                alt="Receipt"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-3 bg-[#fcbf49] rounded-2xl border-3 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all">
              <RotateCw className="w-5 h-5 text-[#003049]" />
              <span className="text-[#003049]">Rescan receipt</span>
            </button>
          </div>
        </div>

        {/* Bill Items */}
        <div className="bg-white p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] space-y-3">
          {billItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-[#003049]/70">{item.name}</span>
              <div className="flex items-center gap-8">
                <span className="text-[#003049]/50">x{item.quantity}</span>
                <span className="text-[#003049] w-12 text-right">{item.price}</span>
              </div>
            </div>
          ))}

          {/* Breakdown */}
          <div className="pt-3 border-t-2 border-dashed border-[#003049]/20 space-y-3">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[#003049]/70">{item.label}</span>
                  {item.hasInfo && (
                    <div className="w-4 h-4 bg-[#003049] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">i</span>
                    </div>
                  )}
                </div>
                <span className="text-[#003049] w-12 text-right">{item.amount}</span>
              </div>
            ))}
          </div>

          {/* Warning */}
          <div className="bg-[#fcbf49]/20 p-3 rounded-xl flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-[#f77f00] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#f77f00]">Make sure this amount is correct</p>
          </div>

          {/* Total */}
          <div className="pt-3 border-t-2 border-[#003049]/20 flex items-center justify-between">
            <span className="text-[#003049]">Total amount</span>
            <span className="text-[#003049] text-xl">79</span>
          </div>
        </div>

        {/* Edit Bill Button */}
        <button className="w-full bg-white p-4 rounded-3xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2">
          <Edit3 className="w-5 h-5 text-[#003049]" />
          <span className="text-[#003049]">Edit bill</span>
        </button>

        {/* Confirm Button */}
        <Button
          onClick={() => onNavigate("selectMembers")}
          className="w-full h-14 bg-[#22c55e] hover:bg-[#22c55e]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
}
