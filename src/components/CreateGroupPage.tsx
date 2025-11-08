import { ArrowLeft, Users } from "lucide-react";
import { useState } from "react";

interface CreateGroupPageProps {
  onNavigate: (page: string) => void;
}

const availableEmojis = ["🐻", "🦊", "🐱", "🐶", "🐼", "🦁", "🐯", "🐨", "🐰", "🦝", "🐸", "🐙"];

const availableColors = [
  { name: "Orange", value: "#f77f00" },
  { name: "Yellow", value: "#fcbf49" },
  { name: "Red", value: "#d62828" },
  { name: "Blue", value: "#003049" },
  { name: "Purple", value: "#6a4c93" },
  { name: "Green", value: "#2a9d8f" },
];

const friends = [
  { id: 1, name: "Sarah Chen", avatar: "S" },
  { id: 2, name: "Mike Johnson", avatar: "M" },
  { id: 3, name: "Emma Wilson", avatar: "E" },
  { id: 4, name: "James Rodriguez", avatar: "J" },
  { id: 5, name: "Olivia Brown", avatar: "O" },
];

export function CreateGroupPage({ onNavigate }: CreateGroupPageProps) {
  const [groupName, setGroupName] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("🐻");
  const [selectedColor, setSelectedColor] = useState("#f77f00");
  const [selectedMembers, setSelectedMembers] = useState<number[]>([]);

  const toggleMember = (memberId: number) => {
    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter((id) => id !== memberId));
    } else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-8">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate("groups")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2>Create Group</h2>
          <div className="w-12 h-12"></div>
        </div>
      </div>

      <div className="px-6 space-y-6">
        {/* Group Preview */}
        <div className="bg-white p-6 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] flex flex-col items-center">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center border-4 border-[#003049] text-5xl mb-4"
            style={{ backgroundColor: selectedColor }}
          >
            {selectedEmoji}
          </div>
          <p className="text-[#003049] text-center">
            {groupName || "Group Name"}
          </p>
        </div>

        {/* Group Name */}
        <div>
          <label className="block text-[#003049] mb-2">Group Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            className="w-full p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] focus:outline-none focus:shadow-[2px_2px_0px_0px_#003049] transition-all bg-white text-[#003049]"
          />
        </div>

        {/* Emoji Selection */}
        <div>
          <label className="block text-[#003049] mb-3">Choose Icon</label>
          <div className="grid grid-cols-6 gap-3">
            {availableEmojis.map((emoji) => (
              <button
                key={emoji}
                onClick={() => setSelectedEmoji(emoji)}
                className={`aspect-square rounded-2xl border-4 flex items-center justify-center text-2xl transition-all ${
                  selectedEmoji === emoji
                    ? "border-[#003049] bg-white shadow-[3px_3px_0px_0px_#003049]"
                    : "border-[#003049]/30 bg-white/50 hover:border-[#003049]/50"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <label className="block text-[#003049] mb-3">Choose Color</label>
          <div className="grid grid-cols-6 gap-3">
            {availableColors.map((color) => (
              <button
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                className={`aspect-square rounded-2xl border-4 transition-all ${
                  selectedColor === color.value
                    ? "border-[#003049] shadow-[3px_3px_0px_0px_#003049]"
                    : "border-[#003049]/30 hover:border-[#003049]/50"
                }`}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>

        {/* Members Selection */}
        <div>
          <label className="block text-[#003049] mb-3">
            Add Members ({selectedMembers.length})
          </label>
          <div className="space-y-3">
            {friends.map((friend) => (
              <button
                key={friend.id}
                onClick={() => toggleMember(friend.id)}
                className={`w-full p-4 rounded-2xl border-4 transition-all flex items-center gap-3 ${
                  selectedMembers.includes(friend.id)
                    ? "border-[#003049] bg-[#fcbf49] shadow-[3px_3px_0px_0px_#003049]"
                    : "border-[#003049] bg-white shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049]"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-3 border-[#003049] ${
                    selectedMembers.includes(friend.id)
                      ? "bg-white text-[#003049]"
                      : "bg-[#fcbf49] text-[#003049]"
                  }`}
                >
                  {friend.avatar}
                </div>
                <span className="text-[#003049]">{friend.name}</span>
                {selectedMembers.includes(friend.id) && (
                  <div className="ml-auto w-6 h-6 rounded-full bg-[#003049] flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Create Button */}
        <button
          onClick={() => onNavigate("groups")}
          className="w-full bg-[#fcbf49] text-[#003049] p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2"
        >
          <Users className="w-5 h-5" />
          <span>Create Group</span>
        </button>
      </div>
    </div>
  );
}
