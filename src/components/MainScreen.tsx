import { Bell, Receipt, TrendingUp, TrendingDown } from "lucide-react";
import { BottomNav } from "./BottomNav";

interface MainScreenProps {
  onNavigate: (page: string) => void;
}

const recentBills = [
  {
    id: 1,
    title: "Dinner at Pizza Place",
    date: "Nov 5, 2025",
    amount: 45.50,
    type: "owe",
    friend: "Sarah",
  },
  {
    id: 2,
    title: "Movie Tickets",
    date: "Nov 4, 2025",
    amount: 28.00,
    type: "owes",
    friend: "Mike",
  },
  {
    id: 3,
    title: "Grocery Shopping",
    date: "Nov 2, 2025",
    amount: 67.25,
    type: "owe",
    friend: "Emma",
  },
];

export function MainScreen({ onNavigate }: MainScreenProps) {
  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2>Hi, Alex! 👋</h2>
          <button
            onClick={() => onNavigate("notifications")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#d62828] p-4 rounded-3xl border-4 border-white shadow-lg">
            <TrendingDown className="w-6 h-6 mb-2" />
            <p className="text-sm opacity-90">You owe</p>
            <p className="text-2xl">$112.75</p>
          </div>
          <div className="bg-[#fcbf49] p-4 rounded-3xl border-4 border-white shadow-lg">
            <TrendingUp className="w-6 h-6 mb-2" />
            <p className="text-sm opacity-90">Owed to you</p>
            <p className="text-2xl">$28.00</p>
          </div>
        </div>
      </div>

      {/* Recent Bills */}
      <div className="p-6">
        <h3 className="text-[#003049] mb-4">Recent Bills</h3>

        <div className="space-y-3">
          {recentBills.map((bill) => (
            <button
              key={bill.id}
              onClick={() => onNavigate("viewBill")}
              className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-3 border-[#003049] ${
                      bill.type === "owe" ? "bg-[#d62828]" : "bg-[#fcbf49]"
                    }`}
                  >
                    <Receipt className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#003049]">{bill.title}</p>
                    <p className="text-sm text-[#003049]/60">
                      {bill.type === "owe" ? "You owe" : "Owes you"} {bill.friend}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`${
                      bill.type === "owe" ? "text-[#d62828]" : "text-[#fcbf49]"
                    }`}
                  >
                    ${bill.amount.toFixed(2)}
                  </p>
                  <p className="text-xs text-[#003049]/60">{bill.date}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="main" onNavigate={onNavigate} />
    </div>
  );
}
