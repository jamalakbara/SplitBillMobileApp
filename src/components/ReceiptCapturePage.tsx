import { ArrowLeft, Camera, Upload, RotateCw, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef } from "react";

interface ReceiptCapturePageProps {
  onNavigate: (page: string) => void;
}

export function ReceiptCapturePage({ onNavigate }: ReceiptCapturePageProps) {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [captureMode, setCaptureMode] = useState<"camera" | "upload" | null>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const handleImageCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setCaptureMode(null);
  };

  const handleConfirm = () => {
    onNavigate("billDetails");
  };

  return (
    <div className="min-h-screen bg-[#eae2b7] pb-6">
      {/* Header */}
      <div className="bg-[#003049] text-white p-6 rounded-b-[3rem] shadow-lg">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <button
            onClick={() => onNavigate("createBill")}
            className="w-12 h-12 bg-[#f77f00] rounded-full flex items-center justify-center border-4 border-white"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h3 className="text-white">Capture receipt</h3>
          <div className="w-12"></div>
        </div>
      </div>

      <div className="px-6 py-6 space-y-4 max-w-md mx-auto">
        {!capturedImage ? (
          <>
            {/* Instructions */}
            <div className="bg-white p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049]">
              <h3 className="text-[#003049] mb-2">How to capture your receipt</h3>
              <ul className="space-y-2 text-sm text-[#003049]/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#22c55e] mt-0.5">✓</span>
                  <span>Ensure the receipt is well-lit and flat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#22c55e] mt-0.5">✓</span>
                  <span>Include all items and the total amount</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#22c55e] mt-0.5">✓</span>
                  <span>Make sure text is clear and readable</span>
                </li>
              </ul>
            </div>

            {/* Camera Preview Area */}
            <div className="bg-white p-8 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049]">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#eae2b7] to-[#fcbf49]/30 rounded-2xl border-4 border-dashed border-[#003049]/30 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 bg-[#003049]/10 rounded-full flex items-center justify-center">
                  <Camera className="w-10 h-10 text-[#003049]/50" />
                </div>
                <p className="text-[#003049]/60 text-center px-4">
                  Choose how to add your receipt
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <input
                ref={cameraInputRef}
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageCapture}
                className="hidden"
              />
              <button
                onClick={() => {
                  setCaptureMode("camera");
                  cameraInputRef.current?.click();
                }}
                className="bg-[#22c55e] p-4 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex flex-col items-center gap-2 text-white"
              >
                <Camera className="w-8 h-8" />
                <span>Take Photo</span>
              </button>

              <input
                ref={uploadInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageCapture}
                className="hidden"
              />
              <button
                onClick={() => {
                  setCaptureMode("upload");
                  uploadInputRef.current?.click();
                }}
                className="bg-[#f77f00] p-4 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex flex-col items-center gap-2 text-white"
              >
                <Upload className="w-8 h-8" />
                <span>Upload</span>
              </button>
            </div>

            {/* Tips */}
            <div className="bg-[#fcbf49]/20 p-4 rounded-2xl border-2 border-[#fcbf49]">
              <p className="text-sm text-[#003049]/70 text-center">
                💡 Tip: Hold your phone steady and align the receipt within the frame
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Preview Section */}
            <div className="bg-white p-5 rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049]">
              <h3 className="text-[#003049] mb-4">Receipt Preview</h3>
              <div className="aspect-[3/4] bg-[#eae2b7] rounded-2xl border-4 border-[#003049] overflow-hidden">
                <img
                  src={capturedImage}
                  alt="Captured receipt"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Success Message */}
            <div className="bg-[#22c55e]/20 p-4 rounded-2xl border-2 border-[#22c55e] flex items-center gap-3">
              <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-[#003049]">
                Receipt captured successfully! Review and confirm to continue.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleRetake}
                className="bg-white p-4 rounded-3xl border-4 border-[#003049] shadow-[3px_3px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2 text-[#003049]"
              >
                <RotateCw className="w-5 h-5" />
                <span>Retake</span>
              </button>

              <Button
                onClick={handleConfirm}
                className="h-auto p-4 bg-[#22c55e] hover:bg-[#22c55e]/90 text-white rounded-3xl border-4 border-[#003049] shadow-[4px_4px_0px_0px_#003049] hover:shadow-[2px_2px_0px_0px_#003049] active:shadow-none transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-5 h-5" />
                <span>Confirm</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
