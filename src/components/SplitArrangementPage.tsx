import { ArrowLeft, HelpCircle, Split, Edit3 } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

interface SplitArrangementPageProps {
  onNavigate: (page: string) => void;
}

const members = [
  { id: 1, name: "Sam Lee", avatar: "S", color: "#22c55e" },
  { id: 2, name: "Paul Smith", avatar: "P", color: "#3b82f6" },
  { id: 3, name: "Jane Smith", avatar: "J", color: "#ec4899" },
];

const billItems = [
  { id: 1, name: "Chinese Buffet", quantity: 4, price: 51 },
  { id: 2, name: "Soda", quantity: 4, price: 7 },
  { id: 3, name: "Desserts", quantity: 4, price: 15 },
];

const breakdown = [
  { label: "Subtotal", amount: 73 },
  { label: "Tax", amount: 4 },
  { label: "Service charge", amount: 0 },
  { label: "Discount", amount: 0 },
];

export function SplitArrangementPage({ onNavigate }: SplitArrangementPageProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((i) => i !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => onNavigate("selectMembers")}
            className="w-10 h-10 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h3 className="text-white">Split bill arrangement</h3>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
        {/* Split Bill Details Card */}
        <div className="bg-white p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#003049]">Split bill details</h3>
            <button
              onClick={() => onNavigate("selectMembers")}
              className="flex items-center gap-1 text-[#22c55e]"
            >
              <Edit3 className="w-4 h-4" />
              <span className="text-sm">Edit members</span>
            </button>
          </div>

          {/* Members Avatars */}
          <div className="flex items-center gap-3 mb-4">
            {members.map((member) => (
              <div key={member.id} className="text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-[#003049] text-white mb-1"
                  style={{ backgroundColor: member.color }}
                >
                  <span className="text-xl">{member.avatar}</span>
                </div>
                <p className="text-xs text-[#003049]/70">{member.name.split(" ")[0]}</p>
              </div>
            ))}
          </div>

          {/* Split Equally Button */}
          <button className="w-full bg-[#fcbf49]/20 p-3 rounded-2xl border-2 border-dashed border-[#003049]/30 flex items-center justify-center gap-2 hover:bg-[#fcbf49]/30 transition-colors">
            <Split className="w-5 h-5 text-[#003049]" />
            <span className="text-[#003049]">Split all equally</span>
          </button>
        </div>

        {/* Items List */}
        <div className="bg-white p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] space-y-3">
          {billItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between pb-3 border-b-2 border-dashed border-[#003049]/10 last:border-0"
            >
              <div className="flex items-center gap-3 flex-1">
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={() => toggleItem(item.id)}
                  className="border-[#003049] border-2"
                />
                <span className="text-[#003049]/70">{item.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-[#003049]/50">x {item.quantity}</span>
                <span className="text-[#003049] w-12 text-right">{item.price}</span>
              </div>
            </div>
          ))}

          {/* Breakdown */}
          <div className="pt-3 space-y-3">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-[#003049]/70">{item.label}</span>
                <span className="text-[#003049] w-12 text-right">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-[#fcbf49]/20 p-4 rounded-2xl border-2 border-[#fcbf49]">
          <p className="text-sm text-[#003049]/70 text-center">
            Select items to split or tap "Split all equally" to divide evenly
          </p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#003049] p-4">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate("main")}
            className="w-full h-14 bg-[#22c55e] hover:bg-[#22c55e]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
          >
            Send to members
          </Button>
        </div>
      </div>
    </div>
  );
}
