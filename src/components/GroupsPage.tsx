import { Plus, Users, ChevronRight, Bell } from "lucide-react";
import { BottomNav } from "./BottomNav";

interface GroupDetail {
  id: number;
  name: string;
  members: number;
  balance: number;
  color: string;
  emoji: string;
}

interface GroupsPageProps {
  onNavigate: (page: string, userProfile?: any, group?: GroupDetail) => void;
}

const groups = [
  {
    id: 1,
    name: "Roommates",
    members: 4,
    balance: -125.50,
    color: "#f77f00",
    emoji: "🐻",
  },
  {
    id: 2,
    name: "Trip to Vegas",
    members: 6,
    balance: 89.25,
    color: "#fcbf49",
    emoji: "🦊",
  },
  {
    id: 3,
    name: "Friday Night Crew",
    members: 5,
    balance: 0,
    color: "#d62828",
    emoji: "🐱",
  },
];

export function GroupsPage({ onNavigate }: GroupsPageProps) {
  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center justify-between">
          <div className="w-12"></div>
          <h2>Groups</h2>
          <button
            onClick={() => onNavigate("notifications")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Create Group Button */}
      <div className="px-6 mb-6">
        <button
          onClick={() => onNavigate("createGroup")}
          className="w-full bg-[#fcbf49] p-4 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5 text-[#003049]" />
          <span className="text-[#003049]">Create New Group</span>
        </button>
      </div>

      {/* Groups List */}
      <div className="px-6 space-y-4">
        <h3 className="text-[#003049] mb-3">Your Groups</h3>

        {groups.map((group) => (
          <button
            key={group.id}
            onClick={() => onNavigate("groupDetail", undefined, group)}
            className="w-full bg-white p-5 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center border-3 border-[#003049] text-2xl"
                  style={{ backgroundColor: group.color }}
                >
                  {group.emoji}
                </div>
                <div>
                  <p className="text-[#003049]">{group.name}</p>
                  <p className="text-sm text-[#003049]/60">
                    {group.members} members
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#003049]/50" />
            </div>

            {/* Balance */}
            <div className="flex items-center justify-between bg-[#eae2b7] p-3 rounded-xl">
              <span className="text-[#003049]/70 text-sm">Your balance</span>
              {group.balance === 0 ? (
                <span className="text-[#003049]">Settled up!</span>
              ) : group.balance > 0 ? (
                <span className="text-[#fcbf49]">
                  +${Math.abs(group.balance).toFixed(2)}
                </span>
              ) : (
                <span className="text-[#d62828]">
                  -${Math.abs(group.balance).toFixed(2)}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Empty State Illustration (if no groups) */}
      {groups.length === 0 && (
        <div className="px-6 py-12 text-center">
          <div className="w-24 h-24 bg-[#fcbf49] rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#003049]">
            <Users className="w-12 h-12 text-[#003049]" />
          </div>
          <h3 className="text-[#003049] mb-2">No groups yet</h3>
          <p className="text-[#003049]/60">
            Create a group to split expenses with multiple friends
          </p>
        </div>
      )}

      {/* Bottom Navigation */}
      <BottomNav currentPage="groups" onNavigate={onNavigate} />
    </div>
  );
}
