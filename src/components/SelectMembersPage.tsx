import { ArrowLeft, HelpCircle, Search, UserPlus, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";

interface SelectMembersPageProps {
  onNavigate: (page: string) => void;
}

const contacts = [
  { id: 1, name: "Sam Lee (You)", avatar: "S", isYou: true },
  { id: 2, name: "Jane Smith", avatar: "J", isYou: false },
  { id: 3, name: "Paul Smith", avatar: "P", isYou: false },
];

export function SelectMembersPage({ onNavigate }: SelectMembersPageProps) {
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const toggleMember = (id: number) => {
    if (selectedMembers.includes(id)) {
      setSelectedMembers(selectedMembers.filter((m) => m !== id));
    } else {
      setSelectedMembers([...selectedMembers, id]);
    }
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => onNavigate("billDetails")}
            className="w-10 h-10 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div className="flex-1 ml-4">
            <h3 className="text-white">Select members</h3>
            <p className="text-sm text-white/70">
              {selectedMembers.length} members selected
            </p>
          </div>
          <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
        {/* Selected Members Preview */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049]">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#22c55e] to-[#16a34a] rounded-full border-4 border-white shadow-lg"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-full border-4 border-white shadow-lg"></div>
            <div className="w-16 h-16 bg-gradient-to-br from-[#ec4899] to-[#db2777] rounded-full border-4 border-white shadow-lg"></div>
          </div>
          <p className="text-center text-[#003049]/60 text-sm">
            Selected members will appear here
          </p>
        </div>

        {/* Add Member Options */}
        <div>
          <h3 className="text-[#003049] mb-3">Add member options</h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-[#22c55e]" />
              <span className="text-[#003049]">Outside contact</span>
            </button>
            <button className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center gap-2">
              <QrCode className="w-5 h-5 text-[#22c55e]" />
              <span className="text-[#003049]">QR or link</span>
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003049]/50" />
          <Input
            placeholder="Search name or phone number"
            className="pl-12 h-14 bg-white border-4 border-[#003049] rounded-3xl shadow-[3px_3px_0px_0px_#003049]"
          />
        </div>

        {/* Recommendation */}
        <div>
          <h3 className="text-[#003049] mb-3">Recommendation</h3>
          <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] flex items-center gap-3">
            <div className="w-12 h-12 bg-[#eae2b7] rounded-full"></div>
            <div className="flex-1">
              <div className="h-3 bg-[#eae2b7] rounded w-2/3 mb-2"></div>
              <div className="h-3 bg-[#eae2b7] rounded w-1/2"></div>
            </div>
            <Checkbox className="border-[#003049] border-2" />
          </div>
        </div>

        {/* Contacts List */}
        <div>
          <h3 className="text-[#003049] mb-3">Your contact - GoPay users</h3>
          <div className="space-y-2">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#eae2b7] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <span className="text-[#003049]">{contact.avatar}</span>
                </div>
                <div className="flex-1">
                  <p className="text-[#003049]">{contact.name}</p>
                  {!contact.isYou && (
                    <div className="h-2 bg-[#22c55e]/20 rounded w-24 mt-1"></div>
                  )}
                </div>
                <Checkbox
                  checked={selectedMembers.includes(contact.id)}
                  onCheckedChange={() => toggleMember(contact.id)}
                  className="border-[#003049] border-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-[#003049] p-4">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate("splitArrangement")}
            disabled={selectedMembers.length === 0}
            className="w-full h-14 bg-[#22c55e] hover:bg-[#22c55e]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all disabled:opacity-50"
          >
            Confirm members
          </Button>
        </div>
      </div>
    </div>
  );
}
