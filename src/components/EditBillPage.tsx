import { ArrowLeft, Check, Calendar, DollarSign, FileText, Tag, Users, ChevronRight } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface EditBillPageProps {
  onNavigate: (page: string) => void;
}

const mockMembers = [
  { id: 1, name: "Cooper", image: "https://images.unsplash.com/photo-1683342599486-761e6afce7e4?w=100&h=100&fit=crop" },
  { id: 2, name: "Jessy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 3, name: "Mike", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
];

export function EditBillPage({ onNavigate }: EditBillPageProps) {
  const [billTitle, setBillTitle] = useState("Dinner at Pizza Place");
  const [totalAmount, setTotalAmount] = useState("243.00");
  const [date, setDate] = useState("2025-11-08");
  const [category, setCategory] = useState("Food & Dining");
  const [tax, setTax] = useState("17.60");
  const [serviceCharge, setServiceCharge] = useState("10.40");
  const [notes, setNotes] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("Roommates 🐻");
  const [selectedMembers, setSelectedMembers] = useState(mockMembers);

  const handleSave = () => {
    // Save logic here
    onNavigate("viewBill");
  };

  return (
    <div className="min-h-screen bg-[#eae2b7]">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => onNavigate("viewBill")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h3 className="text-white">Edit bill</h3>
          <button
            onClick={handleSave}
            className="w-12 h-12 bg-[#fcbf49] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Check className="w-5 h-5 text-[#003049]" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
        {/* Bill Title */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80 flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Bill title
          </label>
          <input
            type="text"
            value={billTitle}
            onChange={(e) => setBillTitle(e.target.value)}
            className="w-full px-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049]"
            placeholder="Enter bill title"
          />
        </div>

        {/* Total Amount */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80 flex items-center gap-2">
            <DollarSign className="w-4 h-4" />
            Total amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003049] text-xl">$</span>
            <input
              type="number"
              step="0.01"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049] text-xl"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049]"
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80 flex items-center gap-2">
            <Tag className="w-4 h-4" />
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049]"
          >
            <option value="Food & Dining">🍕 Food & Dining</option>
            <option value="Transportation">🚗 Transportation</option>
            <option value="Entertainment">🎬 Entertainment</option>
            <option value="Shopping">🛍️ Shopping</option>
            <option value="Utilities">💡 Utilities</option>
            <option value="Other">📦 Other</option>
          </select>
        </div>

        {/* Group/Friends Selection */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Split with
          </label>
          
          {/* Group Selector */}
          <button 
            onClick={() => onNavigate("selectMembers")}
            className="w-full px-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-between"
          >
            <span className="text-[#003049]">{selectedGroup}</span>
            <ChevronRight className="w-5 h-5 text-[#003049]" />
          </button>

          {/* Selected Members */}
          <div className="bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-[#003049]/80">Members ({selectedMembers.length})</p>
              <button 
                onClick={() => onNavigate("selectMembers")}
                className="text-sm text-[#f77f00] hover:text-[#f77f00]/80"
              >
                Edit
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedMembers.map((member) => (
                <div key={member.id} className="flex items-center gap-2 bg-[#eae2b7] rounded-full pl-1 pr-3 py-1 border-2 border-[#003049]">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-[#003049]">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tax */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80">Tax</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003049]">$</span>
            <input
              type="number"
              step="0.01"
              value={tax}
              onChange={(e) => setTax(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049]"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Service Charge */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80">Service charge</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#003049]">$</span>
            <input
              type="number"
              step="0.01"
              value={serviceCharge}
              onChange={(e) => setServiceCharge(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049]"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Notes */}
        <div className="space-y-2">
          <label className="text-sm text-[#003049]/80">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 bg-white rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all text-[#003049] resize-none"
            placeholder="Add any additional notes..."
          />
        </div>

        {/* Delete Bill Button */}
        <button className="w-full bg-[#d62828] text-white py-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all text-center">
          Delete Bill
        </button>
      </div>
    </div>
  );
}
