import { useState } from "react";
import { Users, Receipt, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface OnboardingPageProps {
  onNavigate: (page: string) => void;
}

const slides = [
  {
    icon: Receipt,
    title: "Split Bills Easily",
    description: "Upload receipts and split expenses with friends in seconds!",
    color: "#f77f00",
  },
  {
    icon: Users,
    title: "Create Groups",
    description: "Organize your friends into groups for trips, roommates, or events",
    color: "#fcbf49",
  },
  {
    icon: Sparkles,
    title: "Track Balances",
    description: "See who owes what at a glance. Never forget who paid!",
    color: "#d62828",
  },
];

export function OnboardingPage({ onNavigate }: OnboardingPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onNavigate("main");
    }
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-[#eae2b7] flex flex-col items-center justify-between p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Icon */}
        <div
          className="w-32 h-32 rounded-full flex items-center justify-center mb-8 border-4 border-[#003049] shadow-[6px_6px_0px_0px_#003049]"
          style={{ backgroundColor: slide.color }}
        >
          <Icon className="w-16 h-16 text-white" />
        </div>

        <h1 className="text-[#003049] mb-4 text-center">{slide.title}</h1>
        <p className="text-[#003049]/70 text-center max-w-sm px-4">
          {slide.description}
        </p>
      </div>

      {/* Dots indicator */}
      <div className="flex gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-[#003049]"
                : "w-3 bg-[#003049]/30"
            }`}
          />
        ))}
      </div>

      {/* Navigation */}
      <div className="w-full max-w-sm space-y-3">
        <Button
          onClick={handleNext}
          className="w-full h-14 bg-[#f77f00] hover:bg-[#f77f00]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
        >
          {currentSlide === slides.length - 1 ? "Get Started" : "Next"}
          <ChevronRight className="ml-2 w-5 h-5" />
        </Button>

        <button
          onClick={() => onNavigate("main")}
          className="w-full text-[#003049] underline"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
