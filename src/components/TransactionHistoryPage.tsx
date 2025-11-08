import { ArrowLeft, ArrowUpRight, ArrowDownLeft, Receipt, Filter } from "lucide-react";
import { useState } from "react";

interface TransactionHistoryPageProps {
  onNavigate: (page: string) => void;
}

interface Transaction {
  id: number;
  type: "paid" | "received";
  amount: number;
  date: string;
  billName: string;
  person?: string;
  status: "completed" | "pending";
}

const mockTransactions: Transaction[] = [
  {
    id: 1,
    type: "paid",
    amount: 45.50,
    date: "Nov 7, 2025",
    billName: "Dinner at Joe's",
    person: "Sarah Chen",
    status: "completed"
  },
  {
    id: 2,
    type: "received",
    amount: 32.00,
    date: "Nov 6, 2025",
    billName: "Movie Tickets",
    person: "Mike Johnson",
    status: "completed"
  },
  {
    id: 3,
    type: "paid",
    amount: 18.75,
    date: "Nov 5, 2025",
    billName: "Coffee Shop",
    person: "Emma Davis",
    status: "completed"
  },
  {
    id: 4,
    type: "received",
    amount: 67.25,
    date: "Nov 4, 2025",
    billName: "Grocery Shopping",
    person: "Alex Thompson",
    status: "pending"
  },
  {
    id: 5,
    type: "paid",
    amount: 125.00,
    date: "Nov 3, 2025",
    billName: "Concert Tickets",
    person: "Group Trip",
    status: "completed"
  },
  {
    id: 6,
    type: "received",
    amount: 22.50,
    date: "Nov 2, 2025",
    billName: "Lunch Special",
    person: "Chris Lee",
    status: "completed"
  },
  {
    id: 7,
    type: "paid",
    amount: 89.99,
    date: "Nov 1, 2025",
    billName: "Gym Membership",
    person: "Sarah Chen",
    status: "completed"
  },
  {
    id: 8,
    type: "received",
    amount: 15.00,
    date: "Oct 31, 2025",
    billName: "Pizza Night",
    person: "Mike Johnson",
    status: "completed"
  }
];

export function TransactionHistoryPage({ onNavigate }: TransactionHistoryPageProps) {
  const [filter, setFilter] = useState<"all" | "paid" | "received">("all");

  const filteredTransactions = filter === "all" 
    ? mockTransactions 
    : mockTransactions.filter(t => t.type === filter);

  const totalPaid = mockTransactions
    .filter(t => t.type === "paid" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalReceived = mockTransactions
    .filter(t => t.type === "received" && t.status === "completed")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-6">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center gap-4 mb-4 relative">
          <button
            onClick={() => onNavigate("profile")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2">Transaction History</h2>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="bg-white/10 p-4 rounded-2xl border-2 border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-[#d62828] rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-white/80">Paid</p>
            </div>
            <p className="text-2xl">${totalPaid.toFixed(2)}</p>
          </div>
          <div className="bg-white/10 p-4 rounded-2xl border-2 border-white/20">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 bg-[#fcbf49] rounded-full flex items-center justify-center">
                <ArrowDownLeft className="w-4 h-4 text-[#003049]" />
              </div>
              <p className="text-sm text-white/80">Received</p>
            </div>
            <p className="text-2xl">${totalReceived.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="px-6">
        {/* Filter Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`flex-1 py-3 rounded-2xl border-4 transition-all text-center ${
              filter === "all"
                ? "bg-[#003049] text-white border-[#003049] shadow-[3px_3px_0px_0px_rgba(0,48,73,0.3)]"
                : "bg-white text-[#003049] border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049]"
            }`}
            style={{ fontSize: '14px', fontWeight: 700 }}
          >
            All
          </button>
          <button
            onClick={() => setFilter("paid")}
            className={`flex-1 py-3 rounded-2xl border-4 transition-all text-center ${
              filter === "paid"
                ? "bg-[#d62828] text-white border-[#003049] shadow-[3px_3px_0px_0px_rgba(0,48,73,0.3)]"
                : "bg-white text-[#003049] border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049]"
            }`}
            style={{ fontSize: '14px', fontWeight: 700 }}
          >
            Paid
          </button>
          <button
            onClick={() => setFilter("received")}
            className={`flex-1 py-3 rounded-2xl border-4 transition-all text-center ${
              filter === "received"
                ? "bg-[#fcbf49] text-[#003049] border-[#003049] shadow-[3px_3px_0px_0px_rgba(0,48,73,0.3)]"
                : "bg-white text-[#003049] border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049]"
            }`}
            style={{ fontSize: '14px', fontWeight: 700 }}
          >
            Received
          </button>
        </div>

        {/* Transactions List */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <button
              key={transaction.id}
              onClick={() => onNavigate("viewBill")}
              className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-3 border-[#003049] flex-shrink-0 ${
                    transaction.type === "paid" ? "bg-[#d62828]" : "bg-[#fcbf49]"
                  }`}
                >
                  {transaction.type === "paid" ? (
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  ) : (
                    <ArrowDownLeft className="w-6 h-6 text-[#003049]" />
                  )}
                </div>

                {/* Transaction Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-[#003049]" style={{ fontSize: '16px', fontWeight: 700 }}>
                      {transaction.billName}
                    </p>
                    <p
                      className={`${
                        transaction.type === "paid" ? "text-[#d62828]" : "text-[#fcbf49]"
                      }`}
                      style={{ fontSize: '16px', fontWeight: 800 }}
                    >
                      {transaction.type === "paid" ? "-" : "+"}${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[#003049]/60 text-sm">
                      {transaction.type === "paid" ? "Paid to" : "Received from"} {transaction.person}
                    </p>
                    <p className="text-[#003049]/60 text-xs">{transaction.date}</p>
                  </div>
                  {transaction.status === "pending" && (
                    <div className="mt-2">
                      <span
                        className="inline-block px-3 py-1 bg-[#f77f00] text-white rounded-full border-2 border-[#003049] text-xs"
                        style={{ fontWeight: 700 }}
                      >
                        Pending
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#003049]/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-[#003049]/20">
              <Receipt className="w-10 h-10 text-[#003049]/40" />
            </div>
            <p className="text-[#003049]/60">No transactions found</p>
          </div>
        )}
      </div>
    </div>
  );
}
