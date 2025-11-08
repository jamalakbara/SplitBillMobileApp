import { ArrowLeft, Camera, Edit3, Users, DollarSign, Sparkles, TrendingUp, Clock, Calendar, FileText, Tag, ChevronRight, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CreateBillPageProps {
  onNavigate: (page: string) => void;
}

const mockMembers = [
  { id: 1, name: "Cooper", image: "https://images.unsplash.com/photo-1683342599486-761e6afce7e4?w=100&h=100&fit=crop" },
  { id: 2, name: "Jessy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 3, name: "Mike", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
];

export function CreateBillPage({ onNavigate }: CreateBillPageProps) {
  const [method, setMethod] = useState<string | null>(null);
  const [billTitle, setBillTitle] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [category, setCategory] = useState("Food & Dining");
  const [tax, setTax] = useState("");
  const [serviceCharge, setServiceCharge] = useState("");
  const [notes, setNotes] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("Roommates 🐻");
  const [selectedMembers, setSelectedMembers] = useState(mockMembers);

  if (!method) {
    return (
      <div className="min-h-screen bg-[#eae2b7] pb-6">
        {/* Header */}
        <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <button
              onClick={() => onNavigate("main")}
              className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h3 className="text-white">Create bill</h3>
            <div className="w-12 h-12"></div>
          </div>
        </div>

        {/* Methods */}
        <div className="px-6 space-y-5">
          <button
            onClick={() => onNavigate("receiptCapture")}
            className="w-full bg-[#fcbf49] p-8 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-3 border-[#003049]">
                <Camera className="w-10 h-10 text-[#003049]" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-[#003049] mb-1">Take Photo</h3>
                <p className="text-[#003049]/70">Snap a pic of your receipt</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMethod("manual")}
            className="w-full bg-[#d62828] p-8 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
          >
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-3 border-[#003049]">
                <Edit3 className="w-10 h-10 text-[#003049]" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-white mb-1">Enter Manually</h3>
                <p className="text-white/80">Type in the details yourself</p>
              </div>
            </div>
          </button>

          {/* Quick Tips */}
          <div className="bg-white p-6 rounded-3xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] mt-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#fcbf49] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#003049]" />
              </div>
              <h3 className="text-[#003049]">Quick Tips</h3>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#22c55e]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Camera className="w-4 h-4 text-[#22c55e]" />
                </div>
                <p className="text-sm text-[#003049]/70">Taking a photo auto-extracts items and prices</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#f77f00]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-[#f77f00]" />
                </div>
                <p className="text-sm text-[#003049]/70">Manual entry gives you full control over details</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-[#d62828]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#d62828]" />
                </div>
                <p className="text-sm text-[#003049]/70">Split bills instantly with friends and groups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Manual Entry Form
  const handleCreateBill = () => {
    // Create bill logic here
    onNavigate("billDetails");
  };

  return (
    <div className="min-h-screen bg-[#eae2b7]">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => setMethod(null)}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h3 className="text-white">Create bill</h3>
          <button
            onClick={handleCreateBill}
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

        {/* Create Bill Button */}
        <button 
          onClick={handleCreateBill}
          className="w-full bg-[#f77f00] text-white py-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center"
        >
          Create Bill
        </button>
      </div>
    </div>
  );
}
