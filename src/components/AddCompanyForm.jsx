import React, { useState } from 'react';
import { Building2, Briefcase, Zap, Link, FileText, Upload, Calendar } from 'lucide-react';

export default function AddCompanyForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    skills: '',
    deadline: '',
    companyUrl: '',
    description: '',
    poster: null
  });

  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData(prev => ({
        ...prev,
        poster: e.dataTransfer.files[0]
      }));
    }
  };

  const handleSubmit = () => {
    if (!formData.companyName || !formData.jobRole || !formData.skills || 
        !formData.deadline || !formData.companyUrl || !formData.description) {
      alert('Please fill all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    alert('Company added successfully! 🎉');
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
          <div className="flex items-center gap-4 mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Add New Company
            </h1>
          </div>

          {/* Form Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-purple-100 p-8 sm:p-10">
            <div className="space-y-6">
              {/* Company Name & Job Role */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-purple-600" /> Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-purple-600" /> Job Role <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    placeholder="Enter job role"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Required Skills & Application Deadline */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-600" /> Required Skills <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., React, Node.js, TypeScript"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" /> Application Deadline <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    placeholder="dd-mm-yyyy"
                    className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                  />
                </div>
              </div>

              {/* Company URL */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <Link className="w-5 h-5 text-purple-600" /> Company URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  name="companyUrl"
                  value={formData.companyUrl}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium"
                />
              </div>

              {/* Job Description */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-600" /> Job Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter detailed job description..."
                  rows="4"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-purple-100 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 outline-none bg-purple-50/50 placeholder-gray-400 font-medium resize-none"
                ></textarea>
              </div>

              {/* Company Poster - Drag & Drop */}
              <div className="group">
                <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-purple-600" /> Company Poster
                </label>
                <div
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                  className={`relative border-2 border-dashed rounded-3xl p-12 transition-all duration-300 ${
                    dragActive 
                      ? 'border-purple-500 bg-purple-50' 
                      : 'border-purple-200 bg-purple-50/30'
                  }`}
                >
                  <input
                    type="file"
                    name="poster"
                    onChange={handleChange}
                    accept="image/*"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center pointer-events-none">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-4">
                      <Upload className="w-8 h-8 text-purple-600" />
                    </div>
                    <p className="text-gray-600 font-semibold mb-2">
                      {formData.poster ? formData.poster.name : 'Company Poster'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formData.poster ? 'File selected! Click to change' : 'Drag and drop or click to upload'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full py-5 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Add Company
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