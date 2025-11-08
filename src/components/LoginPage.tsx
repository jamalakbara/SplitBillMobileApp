import { Mail, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export function LoginPage({ onNavigate }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-[#eae2b7] flex flex-col items-center justify-center p-6">
      {/* Logo/Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 bg-[#003049] rounded-full flex items-center justify-center shadow-lg">
          <div className="relative">
            <div className="w-12 h-12 bg-[#fcbf49] rounded-full"></div>
            <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-[#f77f00] rounded-full"></div>
            <div className="absolute -left-2 top-0 w-6 h-6 bg-[#d62828] rounded-full"></div>
          </div>
        </div>
      </div>

      <h1 className="text-[#003049] mb-2">SplitBill</h1>
      <p className="text-[#003049]/70 mb-8">Split bills with friends easily!</p>

      {/* Login Form */}
      <div className="w-full max-w-sm space-y-4">
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

        <Button
          onClick={() => onNavigate("main")}
          className="w-full h-14 bg-[#f77f00] hover:bg-[#f77f00]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all"
        >
          Log In
        </Button>

        <button
          onClick={() => onNavigate("signup")}
          className="w-full text-[#003049] underline"
        >
          Don't have an account? Sign up
        </button>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-[#fcbf49] rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-[#d62828] rounded-full opacity-50"></div>
    </div>
  );
}
