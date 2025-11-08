import { Bell, Edit3, Users, DollarSign, CreditCard, Activity, TrendingUp, Award, UserPlus, Receipt, Calendar, Settings, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface UserProfile {
  id: number;
  name: string;
  image: string;
}

interface UserProfilePageProps {
  onNavigate: (page: string) => void;
  userProfile?: UserProfile | null;
}

// Mock debt data for friends
const friendDebts: Record<number, { amount: number; youOwe: boolean }> = {
  1: { amount: 22.50, youOwe: true },   // Cooper
  2: { amount: 45.00, youOwe: false },  // Warren
  3: { amount: 15.75, youOwe: true },   // Jessy
  4: { amount: 0, youOwe: false },      // Jacob - settled
  5: { amount: 30.00, youOwe: false },  // Sarah
  6: { amount: 12.50, youOwe: true },   // Michael
  7: { amount: 8.25, youOwe: false },   // Emma
  8: { amount: 18.00, youOwe: true },   // David
};

export function UserProfilePage({ onNavigate, userProfile }: UserProfilePageProps) {
  // If userProfile is provided, we're viewing someone else's profile
  // Otherwise, we're viewing our own profile
  const isOwnProfile = !userProfile;
  const displayName = userProfile ? userProfile.name : "stambol";
  const displayImage = userProfile ? userProfile.image : "https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYXZhdGFyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MjU2OTYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  // Determine if this is a friend or not (ids 1-8 are friends, 9+ are suggested people)
  const isFriend = userProfile ? userProfile.id <= 8 : false;
  const debtInfo = userProfile && isFriend ? friendDebts[userProfile.id] : null;
  
  return (
    <div className="min-h-screen bg-[#eae2b7]">
      {/* Header - matching MainScreen style */}
      <div className="bg-[#003049] text-white p-5 rounded-b-[3rem] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => onNavigate("settings")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => onNavigate("notifications")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center py-4">
          <ImageWithFallback
            src={displayImage}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white mb-3"
          />
          <h1 className="text-white tracking-wider" style={{ fontSize: '32px', fontWeight: 900 }}>
            {displayName}
          </h1>
        </div>

        {/* Action buttons */}
        <div className="flex justify-center mt-3 pb-2">
          {isOwnProfile ? (
            <button 
              onClick={() => onNavigate("editProfile")}
              className="bg-[#f77f00] px-8 py-3 rounded-full flex items-center gap-2 border-4 border-white shadow-lg hover:bg-[#ff8c1a] transition-colors"
            >
              <Edit3 className="w-5 h-5 text-white" />
              <span className="text-white">Edit Profile</span>
            </button>
          ) : isFriend && debtInfo ? (
            // Friend profile - show debt status
            debtInfo.amount === 0 ? (
              <button className="bg-[#fcbf49] px-8 py-3 rounded-full flex items-center gap-2 border-4 border-white shadow-lg">
                <span className="text-[#003049]">Settled up! 🎉</span>
              </button>
            ) : debtInfo.youOwe ? (
              <button className="bg-[#d62828] px-6 py-3 rounded-full flex items-center gap-2 border-4 border-white shadow-lg">
                <DollarSign className="w-5 h-5 text-white" />
                <span className="text-white">You owe ${debtInfo.amount.toFixed(2)}</span>
              </button>
            ) : (
              <button className="bg-[#fcbf49] px-6 py-3 rounded-full flex items-center gap-2 border-4 border-white shadow-lg">
                <DollarSign className="w-5 h-5 text-[#003049]" />
                <span className="text-[#003049]">Owes you ${debtInfo.amount.toFixed(2)}</span>
              </button>
            )
          ) : (
            // Non-friend profile - show add friend button
            <button className="bg-[#fcbf49] px-8 py-3 rounded-full flex items-center gap-2 border-4 border-white shadow-lg">
              <UserPlus className="w-5 h-5 text-[#003049]" />
              <span className="text-[#003049]">Add Friend</span>
            </button>
          )}
        </div>
      </div>

      {/* Friend profile content */}
      {!isOwnProfile && isFriend && (
        <div className="px-5 mt-5 max-w-md mx-auto space-y-4">
          {/* Shared Bills */}
          <div>
            <h3 className="text-[#003049] mb-3">Shared Bills</h3>
            <div className="space-y-2">
              <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-3 border-[#003049]">
                    <Receipt className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#003049]">Dinner at Pizza Place</p>
                    <p className="text-sm text-[#003049]/60">Nov 5, 2025</p>
                  </div>
                  <p className="text-[#d62828]">$22.50</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#fcbf49] rounded-full flex items-center justify-center border-3 border-[#003049]">
                    <Receipt className="w-6 h-6 text-[#003049]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#003049]">Coffee Shop</p>
                    <p className="text-sm text-[#003049]/60">Nov 3, 2025</p>
                  </div>
                  <p className="text-[#fcbf49]">$8.50</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Summary */}
          <div>
            <h3 className="text-[#003049] mb-3">Activity</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
                <Calendar className="w-6 h-6 text-[#003049] mb-2" />
                <p className="text-sm text-[#003049]/60">Bills together</p>
                <p className="text-2xl text-[#003049]">12</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
                <Activity className="w-6 h-6 text-[#003049] mb-2" />
                <p className="text-sm text-[#003049]/60">Total spent</p>
                <p className="text-2xl text-[#003049]">$245</p>
              </div>
            </div>
          </div>

          {/* Mutual contacts */}
          <div className="bg-white rounded-3xl p-4 border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#003049]" />
              <span className="text-[#003049]">You have 1 mutual iOS contact</span>
            </div>
          </div>
        </div>
      )}

      {/* Non-friend profile content */}
      {!isOwnProfile && !isFriend && (
        <div className="px-5 mt-5 max-w-md mx-auto space-y-4">
          {/* About Section */}
          <div>
            <h3 className="text-[#003049] mb-3">About</h3>
            <div className="bg-white rounded-3xl p-4 border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-[#003049]" />
                  <span className="text-[#003049]">2 mutual friends</span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#003049]" />
                  <span className="text-[#003049]">Active on SplitBill</span>
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Connection */}
          <div>
            <h3 className="text-[#003049] mb-3">Why you might know them</h3>
            <div className="bg-white rounded-3xl p-4 border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
              <p className="text-[#003049]">You have mutual friends and shared contacts</p>
            </div>
          </div>
        </div>
      )}

      {/* Own profile content - Statistics and Quick Actions */}
      {isOwnProfile && (
        <div className="px-5 mt-5 max-w-md mx-auto space-y-4">
          {/* Statistics Cards */}
          <div>
            <h3 className="text-[#003049] mb-3">Your Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
                <TrendingUp className="w-6 h-6 text-[#003049] mb-2" />
                <p className="text-sm text-[#003049]/60">Total spent</p>
                <p className="text-2xl text-[#003049]">$1,240</p>
              </div>

              <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
                <Activity className="w-6 h-6 text-[#003049] mb-2" />
                <p className="text-sm text-[#003049]/60">Bills split</p>
                <p className="text-2xl text-[#003049]">47</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h3 className="text-[#003049] mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button 
                onClick={() => onNavigate("paymentMethods")}
                className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#003049]">Accounts</p>
                  <p className="text-sm text-[#003049]/60">Manage accounts</p>
                </div>
              </button>

              <button 
                onClick={() => onNavigate("transactionHistory")}
                className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-[#fcbf49] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <Activity className="w-6 h-6 text-[#003049]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#003049]">Transaction History</p>
                  <p className="text-sm text-[#003049]/60">View all your bills</p>
                </div>
              </button>

              <button onClick={() => onNavigate("achievements")} className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center gap-3">
                <div className="w-12 h-12 bg-[#003049] rounded-full flex items-center justify-center border-3 border-[#003049]">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-[#003049]">Achievements</p>
                  <p className="text-sm text-[#003049]/60">3 badges earned</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
