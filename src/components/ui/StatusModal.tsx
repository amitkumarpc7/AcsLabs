import React from "react";
import { CheckCircle, AlertCircle, X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  message?: string;
}

export const StatusModal: React.FC<Props> = ({
  isOpen,
  onClose,
  type,
  message,
}) => {
  if (!isOpen) return null;

  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex justify-center mb-6">
          <div
            className={
              isSuccess
                ? "bg-green-100 p-4 rounded-full"
                : "bg-red-100 p-4 rounded-full"
            }
          >
            {isSuccess ? (
              <CheckCircle className="text-green-600" size={48} />
            ) : (
              <AlertCircle className="text-red-600" size={48} />
            )}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display uppercase">
          {isSuccess ? "Enquiry Sent!" : "Submission Failed"}
        </h3>
        <p className="text-slate-500 mb-8">
          {message ||
            (isSuccess
              ? "Thank you for reaching out. Our team will contact you within 24 hours."
              : "Something went wrong. Please check your connection and try again.")}
        </p>
        <button
          onClick={onClose}
          className={`w-full text-white py-4 rounded-xl font-bold transition shadow-lg ${
            isSuccess
              ? "bg-industrial-dark hover:bg-slate-800"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {isSuccess ? "Close" : "Try Again"}
        </button>
      </div>
    </div>
  );
};
