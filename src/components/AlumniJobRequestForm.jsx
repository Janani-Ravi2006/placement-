import React, { useState } from 'react';
import { User, Mail, Phone, GraduationCap, MapPin, Zap, Building2, Clock, DollarSign, MessageSquare, Paperclip } from 'lucide-react';

export default function AlumniJobRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    batch: '',
    location: '',
    skillset: '',
    company: '',
    experience: '',
    ctc: '',
    message: '',
    attachment: null,
    isRobot: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = () => {
    if (!formData.isRobot) {
      alert('Please verify that you are not a robot');
      return;
    }
    if (!formData.name || !formData.email || !formData.contact || !formData.batch || 
        !formData.location || !formData.skillset || !formData.company || 
        !formData.experience || !formData.ctc || !formData.message || !formData.attachment) {
      alert('Please fill all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! 🎉');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -left-64 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-64 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 20s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl shadow-xl mb-6 animate-pulse">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Alumni Job Request Form
            </h1>
            <p className="text-gray-600 text-lg font-medium">Fill out all the Experience form</p>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-100 p-8 sm:p-10">
            <div className="space-y-6">
              {/* Name */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" /> Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Will be auto-filled after successful login"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-purple-600" /> Personal Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Will be auto-filled after successful login"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Contact & Batch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-purple-600" /> Contact No <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="Will be auto-filled after successful login"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-purple-600" /> Batch <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    placeholder="Will be auto-filled after successful login"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Preferred Location */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-purple-600" /> Preferred Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City or Country"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Skillset */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-600" /> Skillset <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="skillset"
                  value={formData.skillset}
                  onChange={handleChange}
                  placeholder="Enter your skills"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Current Company */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-600" /> Current Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Experience & CTC */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-600" /> Years of Experience <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years of experience"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-purple-600" /> Current CTC <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ctc"
                    value={formData.ctc}
                    onChange={handleChange}
                    placeholder="Current CTC"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" /> Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Add a message"
                  rows="4"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium resize-none"
                ></textarea>
              </div>

              {/* Attachment */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Paperclip className="w-5 h-5 text-purple-600" /> Attachment <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="attachment"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700 file:cursor-pointer"
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 font-medium">Upload your resume (PDF, DOC, DOCX)</p>
              </div>

              {/* Robot Checkbox */}
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-2xl border-2 border-purple-100">
                <input
                  type="checkbox"
                  name="isRobot"
                  checked={formData.isRobot}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-purple-300 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                />
                <label className="text-sm font-semibold text-gray-700 cursor-pointer select-none">
                  I'm not a robot
                </label>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-5 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-500 text-sm mt-8 font-medium">
            Designed with 💜 for Alumni Network
          </p>
        </div>
      </div>
    </div>
  );
}