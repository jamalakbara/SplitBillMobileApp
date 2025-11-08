import { ArrowLeft, Trophy, Star, Users, Receipt, Zap, Heart, TrendingUp, Award, Crown } from "lucide-react";

interface AchievementsPageProps {
  onNavigate: (page: string) => void;
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: any;
  progress: number;
  total: number;
  unlocked: boolean;
  color: string;
  reward?: string;
}

export function AchievementsPage({ onNavigate }: AchievementsPageProps) {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "First Split",
      description: "Split your first bill",
      icon: Receipt,
      progress: 1,
      total: 1,
      unlocked: true,
      color: "#fcbf49",
      reward: "50 points"
    },
    {
      id: 2,
      title: "Social Butterfly",
      description: "Add 10 friends",
      icon: Users,
      progress: 7,
      total: 10,
      unlocked: false,
      color: "#f77f00"
    },
    {
      id: 3,
      title: "Bill Master",
      description: "Split 50 bills",
      icon: Trophy,
      progress: 23,
      total: 50,
      unlocked: false,
      color: "#fcbf49"
    },
    {
      id: 4,
      title: "Quick Draw",
      description: "Create a bill in under 30 seconds",
      icon: Zap,
      progress: 1,
      total: 1,
      unlocked: true,
      color: "#f77f00",
      reward: "100 points"
    },
    {
      id: 5,
      title: "Generous Spirit",
      description: "Pay 25 bills",
      icon: Heart,
      progress: 15,
      total: 25,
      unlocked: false,
      color: "#d62828"
    },
    {
      id: 6,
      title: "Party Planner",
      description: "Create 5 groups",
      icon: Users,
      progress: 3,
      total: 5,
      unlocked: false,
      color: "#fcbf49"
    },
    {
      id: 7,
      title: "Big Spender",
      description: "Handle $1,000 in total bills",
      icon: TrendingUp,
      progress: 650,
      total: 1000,
      unlocked: false,
      color: "#f77f00"
    },
    {
      id: 8,
      title: "Streak Master",
      description: "Split bills 7 days in a row",
      icon: Star,
      progress: 4,
      total: 7,
      unlocked: false,
      color: "#fcbf49"
    },
    {
      id: 9,
      title: "Perfect Balance",
      description: "Settle all debts",
      icon: Award,
      progress: 1,
      total: 1,
      unlocked: true,
      color: "#fcbf49",
      reward: "200 points"
    },
    {
      id: 10,
      title: "Legend",
      description: "Split 100 bills",
      icon: Crown,
      progress: 23,
      total: 100,
      unlocked: false,
      color: "#d62828"
    }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;
  const totalPoints = achievements
    .filter(a => a.unlocked && a.reward)
    .reduce((sum, a) => sum + parseInt(a.reward?.split(" ")[0] || "0"), 0);

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-24">
      {/* Header */}
      <div className="bg-[#003049] p-6 rounded-b-3xl border-b-4 border-[#003049] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-4 mb-4 relative">
          <button
            onClick={() => onNavigate("settings")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2 text-white">
            Achievements
          </h2>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#fcbf49] p-4 rounded-2xl border-4 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
            <Trophy className="w-6 h-6 text-[#003049] mb-2" />
            <p className="text-[#003049]" style={{ fontSize: '24px', fontWeight: 800 }}>
              {unlockedCount}/{achievements.length}
            </p>
            <p className="text-[#003049]/70 text-sm" style={{ fontWeight: 600 }}>
              Unlocked
            </p>
          </div>

          <div className="bg-[#f77f00] p-4 rounded-2xl border-4 border-white shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)]">
            <Star className="w-6 h-6 text-white mb-2" />
            <p className="text-white" style={{ fontSize: '24px', fontWeight: 800 }}>
              {totalPoints}
            </p>
            <p className="text-white/80 text-sm" style={{ fontWeight: 600 }}>
              Total Points
            </p>
          </div>
        </div>
      </div>

      {/* Achievements List */}
      <div className="p-6 space-y-4">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          const progressPercentage = (achievement.progress / achievement.total) * 100;

          return (
            <div
              key={achievement.id}
              className={`bg-white p-4 rounded-2xl border-4 border-[#003049] transition-all ${
                achievement.unlocked
                  ? "shadow-[3px_3px_0px_0px_#003049]"
                  : "shadow-[3px_3px_0px_0px_#003049] opacity-70"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border-3 border-[#003049] flex-shrink-0 ${
                    achievement.unlocked ? "animate-pulse" : ""
                  }`}
                  style={{ backgroundColor: achievement.unlocked ? achievement.color : "#d1d5db" }}
                >
                  <Icon className={`w-7 h-7 ${achievement.unlocked ? "text-white" : "text-gray-400"}`} />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-[#003049]" style={{ fontSize: '18px', fontWeight: 700 }}>
                        {achievement.title}
                      </h3>
                      <p className="text-[#003049]/60 text-sm mt-1">
                        {achievement.description}
                      </p>
                    </div>
                    {achievement.unlocked && (
                      <div className="bg-[#fcbf49] p-1.5 rounded-full border-2 border-[#003049]">
                        <Trophy className="w-4 h-4 text-[#003049]" />
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {!achievement.unlocked && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#003049] text-sm" style={{ fontWeight: 600 }}>
                          {achievement.progress} / {achievement.total}
                        </span>
                        <span className="text-[#003049]/60 text-sm" style={{ fontWeight: 600 }}>
                          {Math.round(progressPercentage)}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full border-2 border-[#003049] overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${progressPercentage}%`,
                            backgroundColor: achievement.color
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Reward */}
                  {achievement.unlocked && achievement.reward && (
                    <div className="mt-2">
                      <span
                        className="inline-block px-3 py-1 bg-[#fcbf49] text-[#003049] rounded-full border-2 border-[#003049] text-xs"
                        style={{ fontWeight: 700 }}
                      >
                        🎉 {achievement.reward}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
