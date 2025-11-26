import React, { useState } from 'react';
import { Mail, User, GraduationCap, MessageSquare, Send, ClipboardList, Info, CheckCircle, X } from 'lucide-react';

export default function PlacementFeedbackForm() {
  const [formData, setFormData] = useState({
    email: '',
    applicantId: '',
    batch: '',
    applicantName: '',
    feedback: ''
  });

  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, 3000);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.applicantId || !formData.batch || 
        !formData.applicantName || !formData.feedback) {
      showToast('Please fill all required fields', 'error');
      return;
    }
    
    console.log('Feedback submitted:', formData);
    showToast('Feedback submitted successfully! 🎉', 'success');
    
    // Reset form
    setFormData({
      email: '',
      applicantId: '',
      batch: '',
      applicantName: '',
      feedback: ''
    });
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-violet-50">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-64 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        .animate-blob { animation: blob 20s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 10px 40px rgba(139, 92, 246, 0.5); }
        }
        .animate-pulse-glow { animation: pulse-glow 3s infinite; }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in { animation: slideInRight 0.3s ease-out; }
      `}</style>

      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-slide-in flex items-center gap-3 min-w-80 px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border-2 ${
              toast.type === 'success'
                ? 'bg-green-50/95 border-green-500 text-green-900'
                : 'bg-red-50/95 border-red-500 text-red-900'
            }`}
          >
            <div className="flex-shrink-0">
              {toast.type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <X className="w-6 h-6 text-red-600" />
              )}
            </div>
            <p className="flex-1 font-semibold text-sm">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="flex-shrink-0 hover:bg-black/5 rounded-lg p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 pt-10 pb-8 px-4 sm:px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl flex items-center justify-center shadow-2xl animate-pulse-glow">
              <ClipboardList className="w-10 h-10 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-700 via-purple-600 to-violet-700 bg-clip-text text-transparent mb-3">
              Placement Feedback
            </h1>
            <p className="text-gray-600 text-lg font-medium">
              Help us improve by sharing your valuable feedback on this placement applicant
            </p>
          </div>
        </div>
      </header>

      {/* Info Box */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50/80 backdrop-blur-xl border-l-4 border-blue-500 rounded-r-2xl p-5 shadow-lg">
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <p className="text-blue-900 text-sm font-medium leading-relaxed">
                Please provide honest and constructive feedback to help the applicant grow.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-16 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-100 p-8 sm:p-12">
            <div className="space-y-6">
              {/* Email ID */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-purple-600" />
                  Email ID
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Auto filled after login"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 bg-purple-50/30 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none placeholder-gray-400 font-medium text-gray-900"
                />
              </div>

              {/* Applicant ID & Batch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    <User className="w-4 h-4 text-purple-600" />
                    Applicant ID
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="applicantId"
                    value={formData.applicantId}
                    onChange={handleChange}
                    placeholder="e.g., APP-2025-001"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 bg-purple-50/30 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none placeholder-gray-400 font-medium text-gray-900"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-purple-600" />
                    Batch
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    placeholder="Auto filled after login"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 bg-purple-50/30 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none placeholder-gray-400 font-medium text-gray-900"
                  />
                </div>
              </div>

              {/* Applicant Name */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  <User className="w-4 h-4 text-purple-600" />
                  Applicant Name
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  placeholder="Auto filled after login"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 bg-purple-50/30 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none placeholder-gray-400 font-medium text-gray-900"
                />
              </div>

              {/* Feedback */}
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4 text-purple-600" />
                  Feedback
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="Write your detailed feedback here. Include strengths, areas for improvement, and recommendations..."
                  rows="6"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 bg-purple-50/30 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none placeholder-gray-400 font-medium text-gray-900 resize-none"
                ></textarea>
                <p className="mt-2 text-xs text-gray-500 font-medium">
                  Provide constructive feedback focusing on strengths, areas for improvement, and specific recommendations.
                </p>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-5 px-8 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send className="w-5 h-5" />
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}