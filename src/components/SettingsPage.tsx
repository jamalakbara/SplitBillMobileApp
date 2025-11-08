import {
  ArrowLeft,
  User,
  Bell,
  CreditCard,
  Lock,
  HelpCircle,
  LogOut,
  ChevronRight,
  Edit3,
  Trophy,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SettingsPageProps {
  onNavigate: (page: string) => void;
}

const settingsSections = [
  {
    title: "Account",
    items: [
      { icon: Bell, label: "Notifications", color: "#fcbf49" },
      { icon: CreditCard, label: "Accounts", color: "#d62828" },
      { icon: Trophy, label: "Achievements", color: "#f77f00" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Lock, label: "Privacy & Security", color: "#f77f00" },
    ],
  },
  {
    title: "Support",
    items: [
      { icon: HelpCircle, label: "Help & FAQ", color: "#fcbf49" },
    ],
  },
];

export function SettingsPage({ onNavigate }: SettingsPageProps) {
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
          <h2 className="absolute left-1/2 -translate-x-1/2">Settings</h2>
        </div>

        {/* Profile Card */}
        <div className="w-full bg-white/10 p-4 rounded-3xl border-2 border-white/20 flex items-center gap-4">
          <button onClick={() => onNavigate("profile")} className="hover:opacity-80 transition-opacity">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYXZhdGFyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MjU2OTYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover border-3 border-white"
            />
          </button>
          <div className="flex-1 text-left">
            <p className="text-lg">stambol</p>
            <p className="text-sm opacity-80">stambol@email.com</p>
          </div>
          <button 
            onClick={() => onNavigate("editProfile")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-2 border-white hover:bg-[#ff8c1a] transition-colors"
          >
            <Edit3 className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-6 space-y-6">
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-[#003049] mb-3">{section.title}</h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={() => {
                      if (item.label === "Accounts") {
                        onNavigate("paymentMethods");
                      } else if (item.label === "Achievements") {
                        onNavigate("achievements");
                      }
                    }}
                    className="w-full bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[#003049]">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#003049]/50" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button
          onClick={() => onNavigate("login")}
          className="w-full bg-[#d62828] p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2 text-white"
        >
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>

        {/* App Version */}
        <p className="text-center text-[#003049]/50 text-sm">Version 1.0.0</p>
      </div>
    </div>
  );
}
