import { Search, UserPlus, X, Check, Bell } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BottomNav } from "./BottomNav";

interface UserProfile {
  id: number;
  name: string;
  image: string;
}

interface FriendsPageProps {
  onNavigate: (page: string, userProfile?: UserProfile) => void;
}

const allFriends = [
  { id: 1, name: "Cooper", image: "https://images.unsplash.com/photo-1683342599486-761e6afce7e4?w=100&h=100&fit=crop" },
  { id: 2, name: "Warren", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: 3, name: "Jessy", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 4, name: "Jacob", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
  { id: 5, name: "Sarah", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
  { id: 6, name: "Michael", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" },
  { id: 7, name: "Emma", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" },
  { id: 8, name: "David", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
];

const suggestedPeople = [
  { id: 9, name: "Alex", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop" },
  { id: 10, name: "Sophia", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" },
  { id: 11, name: "James", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop" },
  { id: 12, name: "Olivia", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" },
  { id: 13, name: "Ryan", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop" },
  { id: 14, name: "Lily", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop" },
];

export function FriendsPage({ onNavigate }: FriendsPageProps) {
  const [selectedFriends, setSelectedFriends] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFriend = (friendId: number) => {
    setSelectedFriends(prev => 
      prev.includes(friendId) 
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
  };

  const removeFriend = (friendId: number) => {
    setSelectedFriends(prev => prev.filter(id => id !== friendId));
  };

  const filteredFriends = allFriends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredSuggestedPeople = suggestedPeople.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto mb-3">
          <div className="w-12"></div>
          <h2>Add friend</h2>
          <button
            onClick={() => onNavigate("notifications")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-5 max-w-md mx-auto">
        {/* Selected Friends Row */}
        {selectedFriends.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {selectedFriends.map(friendId => {
              const friend = allFriends.find(f => f.id === friendId);
              if (!friend) return null;
              return (
                <div key={friend.id} className="flex flex-col items-center gap-1 flex-shrink-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={friend.image}
                      alt={friend.name}
                      className="w-16 h-16 rounded-full object-cover border-3 border-[#003049]"
                    />
                    <button
                      onClick={() => removeFriend(friend.id)}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-[#d62828] rounded-full flex items-center justify-center border-2 border-white"
                    >
                      <X className="w-3 h-3 text-white" />
                    </button>
                  </div>
                  <span className="text-xs text-[#003049]">{friend.name}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Search Bar */}
        <div className="relative">
          <Input
            placeholder="Search name, group"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 bg-white border-4 border-[#003049] rounded-3xl pr-16 shadow-[3px_3px_0px_0px_#003049]"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#fcbf49] rounded-full flex items-center justify-center border-3 border-[#003049]">
            <Search className="w-5 h-5 text-[#003049]" />
          </button>
        </div>

        {/* Friends Section */}
        <div>
          <h3 className="text-[#003049] mb-3">Friends</h3>
          
          <div className="flex gap-4 overflow-x-auto pb-2">
            {filteredFriends.map(friend => (
              <button
                key={friend.id}
                onClick={() => onNavigate("profile", friend)}
                className="flex flex-col items-center gap-2 flex-shrink-0"
              >
                <ImageWithFallback
                  src={friend.image}
                  alt={friend.name}
                  className="w-16 h-16 rounded-full object-cover border-3 border-[#003049]"
                />
                <span className="text-sm text-[#003049]">{friend.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Suggested People Section */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[#003049]">Suggested People</h3>
          </div>
          
          <div className="space-y-2">
            {filteredSuggestedPeople.map(person => (
              <div
                key={person.id}
                className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] flex items-center justify-between"
              >
                <button
                  onClick={() => onNavigate("profile", person)}
                  className="flex items-center gap-3"
                >
                  <ImageWithFallback
                    src={person.image}
                    alt={person.name}
                    className="w-12 h-12 rounded-full object-cover border-3 border-[#003049]"
                  />
                  <span className="text-[#003049]">{person.name}</span>
                </button>
                <button
                  onClick={() => toggleFriend(person.id)}
                  className="px-4 py-1.5 bg-[#fcbf49] rounded-full flex items-center justify-center gap-1 border-2 border-[#003049]"
                >
                  <UserPlus className="w-4 h-4 text-[#003049]" />
                  <span className="text-sm text-[#003049]">Add</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="friends" onNavigate={onNavigate} />
    </div>
  );
}
