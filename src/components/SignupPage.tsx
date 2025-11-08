import { Mail, Lock, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface SignupPageProps {
  onNavigate: (page: string) => void;
}

export function SignupPage({ onNavigate }: SignupPageProps) {
  return (
    <div className="min-h-screen bg-[#eae2b7] flex flex-col items-center justify-center p-6">
      <h1 className="text-[#003049] mb-2">Create Account</h1>
      <p className="text-[#003049]/70 mb-8">Join the split bill family!</p>

      {/* Signup Form */}
      <div className="w-full max-w-sm space-y-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003049]/50" />
          <Input
            type="text"
            placeholder="Full Name"
            className="pl-12 h-14 bg-white border-4 border-[#003049] rounded-3xl shadow-[4px_4px_0px_0px_#003049]"
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003049]/50" />
          <Input
            type="email"
            placeholder="Email"
            className="pl-12 h-14 bg-white border-4 border-[#003049] rounded-3xl shadow-[4px_4px_0px_0px_#003049]"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003049]/50" />
          <Input
            type="password"
            placeholder="Password"
            className="pl-12 h-14 bg-white border-4 border-[#003049] rounded-3xl shadow-[4px_4px_0px_0px_#003049]"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#003049]/50" />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="pl-12 h-14 bg-white border-4 border-[#003049] rounded-3xl shadow-[4px_4px_0px_0px_#003049]"
          />
        </div>

        <Button
          onClick={() => onNavigate("onboarding")}
          className="w-full h-14 bg-[#d62828] hover:bg-[#d62828]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
        >
          Sign Up
        </Button>

        <button
          onClick={() => onNavigate("login")}
          className="w-full text-[#003049] underline"
        >
          Already have an account? Log in
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-[#f77f00] rounded-full opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-[#fcbf49] rounded-full opacity-50"></div>
    </div>
  );
}
