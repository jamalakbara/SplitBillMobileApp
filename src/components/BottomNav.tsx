import { Home, Plane, Plus, Users, Settings } from "lucide-react";

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      <div className="relative">
        {/* Center Create Bill Button - Floating Above */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-8 z-10">
          <button
            onClick={() => onNavigate("createBill")}
            className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="bg-white py-2 px-4 border-t border-gray-200">
          <div className="flex justify-around items-center">
            {/* Home Button */}
            <button
              onClick={() => onNavigate("main")}
              className="flex flex-col items-center gap-1 py-2 px-3"
            >
              <Home
                className={`w-6 h-6 ${
                  currentPage === "main" ? "text-[#003049]" : "text-gray-400"
                }`}
                strokeWidth={currentPage === "main" ? 2.5 : 2}
              />
              <span className={`text-xs ${
                currentPage === "main" ? "text-[#003049]" : "text-gray-400"
              }`}>
                Home
              </span>
            </button>

            {/* My Groups Button */}
            <button
              onClick={() => onNavigate("groups")}
              className="flex flex-col items-center gap-1 py-2 px-3"
            >
              <Plane
                className={`w-6 h-6 ${
                  currentPage === "groups" ? "text-[#003049]" : "text-gray-400"
                }`}
                strokeWidth={currentPage === "groups" ? 2.5 : 2}
              />
              <span className={`text-xs ${
                currentPage === "groups" ? "text-[#003049]" : "text-gray-400"
              }`}>
                My Groups
              </span>
            </button>

            {/* Spacer for center button */}
            <div className="w-14"></div>

            {/* My People Button */}
            <button
              onClick={() => onNavigate("friends")}
              className="flex flex-col items-center gap-1 py-2 px-3"
            >
              <Users
                className={`w-6 h-6 ${
                  currentPage === "friends" ? "text-[#003049]" : "text-gray-400"
                }`}
                strokeWidth={currentPage === "friends" ? 2.5 : 2}
              />
              <span className={`text-xs ${
                currentPage === "friends" ? "text-[#003049]" : "text-gray-400"
              }`}>
                My People
              </span>
            </button>

            {/* Settings Button */}
            <button
              onClick={() => onNavigate("settings")}
              className="flex flex-col items-center gap-1 py-2 px-3"
            >
              <Settings
                className={`w-6 h-6 ${
                  currentPage === "settings" ? "text-[#003049]" : "text-gray-400"
                }`}
                strokeWidth={currentPage === "settings" ? 2.5 : 2}
              />
              <span className={`text-xs ${
                currentPage === "settings" ? "text-[#003049]" : "text-gray-400"
              }`}>
                Settings
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
