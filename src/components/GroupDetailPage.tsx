import { ArrowLeft, Bell, Edit3, Users, DollarSign, Receipt, Calendar, Activity, UserMinus } from "lucide-react";

interface GroupDetail {
  id: number;
  name: string;
  emoji: string;
  color: string;
  members: number;
}

interface GroupDetailPageProps {
  onNavigate: (page: string) => void;
  group?: GroupDetail | null;
}

const mockMembers = [
  { id: 1, name: "Sarah Chen", avatar: "S", owed: 22.50, owes: false },
  { id: 2, name: "Mike Johnson", avatar: "M", owed: 0, owes: false },
  { id: 3, name: "Emma Wilson", avatar: "E", owed: 15.75, owes: true },
  { id: 4, name: "You", avatar: "Y", owed: 30.00, owes: false },
];

export function GroupDetailPage({ onNavigate, group }: GroupDetailPageProps) {
  const displayGroup = group || {
    id: 1,
    name: "Roommates",
    emoji: "🐻",
    color: "#f77f00",
    members: 4
  };

  return (
    <div className="min-h-screen bg-[#eae2b7]">
      {/* Header - matching MainScreen style */}
      <div className="bg-[#003049] text-white p-5 rounded-b-[3rem] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => onNavigate("groups")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => onNavigate("notifications")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Group Icon Section */}
        <div className="flex flex-col items-center py-4">
          <div
            className="w-28 h-28 rounded-2xl flex items-center justify-center border-4 border-white mb-3 text-5xl"
            style={{ backgroundColor: displayGroup.color }}
          >
            {displayGroup.emoji}
          </div>
          <h1 className="text-white tracking-wider" style={{ fontSize: '32px', fontWeight: 900 }}>
            {displayGroup.name}
          </h1>
          <p className="text-white/80 mt-1">{displayGroup.members} members</p>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center mt-3 pb-2">
          <button className="bg-[#f77f00] px-8 py-3 rounded-full flex items-center gap-2 border-4 border-white shadow-lg">
            <Edit3 className="w-5 h-5 text-white" />
            <span className="text-white">Edit Group</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 mt-5 max-w-md mx-auto space-y-4">
        {/* Group Statistics */}
        <div>
          <h3 className="text-[#003049] mb-3">Group Stats</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <Calendar className="w-6 h-6 text-[#003049] mb-2" />
              <p className="text-sm text-[#003049]/60">Total bills</p>
              <p className="text-2xl text-[#003049]">28</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <Activity className="w-6 h-6 text-[#003049] mb-2" />
              <p className="text-sm text-[#003049]/60">Total spent</p>
              <p className="text-2xl text-[#003049]">$856</p>
            </div>
          </div>
        </div>

        {/* Recent Group Bills */}
        <div>
          <h3 className="text-[#003049] mb-3">Recent Bills</h3>
          <div className="space-y-2">
            <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[#003049]">Grocery Shopping</p>
                  <p className="text-sm text-[#003049]/60">Nov 7, 2025</p>
                </div>
                <p className="text-[#003049]">$124.80</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#fcbf49] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <Receipt className="w-6 h-6 text-[#003049]" />
                </div>
                <div className="flex-1">
                  <p className="text-[#003049]">Electric Bill</p>
                  <p className="text-sm text-[#003049]/60">Nov 5, 2025</p>
                </div>
                <p className="text-[#003049]">$89.50</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#d62828] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <Receipt className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-[#003049]">Internet Service</p>
                  <p className="text-sm text-[#003049]/60">Nov 1, 2025</p>
                </div>
                <p className="text-[#003049]">$65.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Members List */}
        <div>
          <h3 className="text-[#003049] mb-3">Members</h3>
          <div className="space-y-2">
            {mockMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#fcbf49] rounded-full flex items-center justify-center border-3 border-[#003049] text-[#003049]">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-[#003049]">{member.name}</p>
                  {member.owed > 0 && (
                    <p className={`text-sm ${member.owes ? "text-[#d62828]" : "text-[#fcbf49]"}`}>
                      {member.owes ? `Owes $${member.owed.toFixed(2)}` : `Gets back $${member.owed.toFixed(2)}`}
                    </p>
                  )}
                  {member.owed === 0 && (
                    <p className="text-sm text-[#003049]/60">Settled up</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave Group Button */}
        <button className="w-full bg-[#d62828] text-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2">
          <UserMinus className="w-5 h-5" />
          <span>Leave Group</span>
        </button>
      </div>
    </div>
  );
}
