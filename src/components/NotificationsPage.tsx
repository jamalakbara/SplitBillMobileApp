import { ArrowLeft, Bell, DollarSign, Users, Receipt } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NotificationsPageProps {
  onNavigate: (page: string) => void;
}

const notifications = [
  {
    id: 1,
    type: "payment",
    title: "Payment received",
    message: "Sarah paid you $45.50 for Dinner at Pizza Place",
    time: "2 hours ago",
    icon: DollarSign,
    color: "#fcbf49",
    read: false,
  },
  {
    id: 2,
    type: "reminder",
    title: "Payment reminder",
    message: "You owe Mike $28.00 for Movie Tickets",
    time: "5 hours ago",
    icon: Receipt,
    color: "#d62828",
    read: false,
  },
  {
    id: 3,
    type: "group",
    title: "Added to group",
    message: "Cooper added you to 'Trip to Vegas'",
    time: "1 day ago",
    icon: Users,
    color: "#f77f00",
    read: true,
  },
  {
    id: 4,
    type: "payment",
    title: "Payment sent",
    message: "You paid Emma $67.25 for Grocery Shopping",
    time: "2 days ago",
    icon: DollarSign,
    color: "#fcbf49",
    read: true,
  },
  {
    id: 5,
    type: "reminder",
    title: "Settlement completed",
    message: "All bills with Jacob have been settled",
    time: "3 days ago",
    icon: Receipt,
    color: "#003049",
    read: true,
  },
];

export function NotificationsPage({ onNavigate }: NotificationsPageProps) {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-6">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center gap-4 mb-4 relative">
          <button
            onClick={() => onNavigate("main")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2">Notifications</h2>
        </div>

        {unreadCount > 0 && (
          <div className="bg-white/10 p-3 rounded-2xl border-2 border-white/20 flex items-center gap-2">
            <Bell className="w-5 h-5" />
            <p className="text-sm">You have {unreadCount} unread notification{unreadCount > 1 ? 's' : ''}</p>
          </div>
        )}
      </div>

      {/* Notifications List */}
      <div className="px-6 space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={`bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] transition-all ${
                !notification.read ? 'bg-[#fcbf49]/10' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: notification.color }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="text-[#003049]">{notification.title}</p>
                    {!notification.read && (
                      <div className="w-2 h-2 bg-[#d62828] rounded-full flex-shrink-0 mt-1"></div>
                    )}
                  </div>
                  <p className="text-sm text-[#003049]/70 mb-2">{notification.message}</p>
                  <p className="text-xs text-[#003049]/50">{notification.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {notifications.length === 0 && (
        <div className="px-6 text-center py-12">
          <Bell className="w-16 h-16 text-[#003049]/20 mx-auto mb-4" />
          <p className="text-[#003049]/60">No notifications yet</p>
        </div>
      )}
    </div>
  );
}
