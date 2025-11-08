import { ArrowLeft, Camera, User, Mail, Phone, MapPin, Calendar, Save } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { useState } from "react";

interface EditProfilePageProps {
  onNavigate: (page: string) => void;
}

export function EditProfilePage({ onNavigate }: EditProfilePageProps) {
  const [formData, setFormData] = useState({
    name: "stambol",
    email: "stambol@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    birthday: "1995-06-15",
  });

  const handleSave = () => {
    // In a real app, this would save to backend
    onNavigate("profile");
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-6">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg mb-6">
        <div className="flex items-center gap-4 mb-6 relative">
          <button
            onClick={() => onNavigate("profile")}
            className="w-10 h-10 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="absolute left-1/2 -translate-x-1/2">Edit Profile</h2>
        </div>

        {/* Profile Picture Section */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1750535135451-7c20e24b60c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0b29uJTIwYXZhdGFyJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MjU2OTYwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-white"
            />
            <button className="absolute bottom-0 right-0 w-9 h-9 bg-[#f77f00] rounded-full flex items-center justify-center border-3 border-white hover:bg-[#ff8c1a] transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <p className="text-sm opacity-80">Tap to change photo</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-6 space-y-4">
        {/* Name Field */}
        <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
          <label className="flex items-center gap-2 text-[#003049] mb-2">
            <User className="w-5 h-5" />
            <span>Full Name</span>
          </label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-2 border-[#003049]/20 rounded-xl focus:border-[#f77f00] transition-colors"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
          <label className="flex items-center gap-2 text-[#003049] mb-2">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-2 border-[#003049]/20 rounded-xl focus:border-[#f77f00] transition-colors"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Field */}
        <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
          <label className="flex items-center gap-2 text-[#003049] mb-2">
            <Phone className="w-5 h-5" />
            <span>Phone Number</span>
          </label>
          <Input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="border-2 border-[#003049]/20 rounded-xl focus:border-[#f77f00] transition-colors"
            placeholder="Enter your phone"
          />
        </div>

        {/* Location Field */}
        <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
          <label className="flex items-center gap-2 text-[#003049] mb-2">
            <MapPin className="w-5 h-5" />
            <span>Location</span>
          </label>
          <Input
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="border-2 border-[#003049]/20 rounded-xl focus:border-[#f77f00] transition-colors"
            placeholder="Enter your location"
          />
        </div>

        {/* Birthday Field */}
        <div className="bg-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049]">
          <label className="flex items-center gap-2 text-[#003049] mb-2">
            <Calendar className="w-5 h-5" />
            <span>Birthday</span>
          </label>
          <Input
            type="date"
            value={formData.birthday}
            onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
            className="border-2 border-[#003049]/20 rounded-xl focus:border-[#f77f00] transition-colors"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full bg-[#f77f00] text-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2 mt-6"
        >
          <Save className="w-5 h-5" />
          <span>Save Changes</span>
        </button>

        {/* Cancel Button */}
        <button
          onClick={() => onNavigate("profile")}
          className="w-full bg-[#d62828] text-white p-4 rounded-2xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all text-center"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
