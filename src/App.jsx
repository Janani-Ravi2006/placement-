import React, { useState } from 'react';
import { Users, BookOpen, Briefcase, Calendar, Mail } from 'lucide-react';

export default function NECAlumniAssociation() {
  const [activeTab, setActiveTab] = useState('webinars');
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    requiredSkills: '',
    applicationDeadline: '',
    companyURL: '',
    jobDescription: '',
    companyPoster: null
  });

  const webinars = [
    { title: 'AI in Healthcare', status: 'approved', badge: 'APPROVED', color: 'emerald' },
    { title: 'Data Science Career Roadmap', status: 'approved', badge: 'APPROVED', color: 'emerald' },
    { title: 'Cybersecurity Trends 2024', status: 'hold', badge: 'HOLD', color: 'amber' },
    { title: 'Full Stack Development', status: 'approved', badge: 'APPROVED', color: 'emerald' },
    { title: 'Cloud Computing Basics', status: 'hold', badge: 'HOLD', color: 'amber' },
    { title: 'Machine Learning Essentials', status: 'approved', badge: 'APPROVED', color: 'emerald' }
  ];

  const mentorships = [
    { name: 'Dr. A. Ramesh', role: 'Mentor, Dept. of CSE', status: 'meetings', badge: 'MEETINGS: 3', color: 'blue' },
    { name: 'M. Kavitha Devi', role: 'Mentor, Dept. of ECE', status: 'meetings', badge: 'MEETINGS: 2', color: 'rose' },
    { name: 'Ms. Divya K.', role: 'Mentor, Dept. of IT', status: 'meetings', badge: 'MEETINGS: 5', color: 'blue' }
  ];

  const placements = [
    { name: 'Ashini Sharma', company: 'Google - Bangalore', status: 'offered', badge: 'OFFERED', color: 'cyan' },
    { name: 'Aditya Kumar', company: 'Tech Solutions', status: 'progress', badge: 'IN PROGRESS', color: 'blue' },
    { name: 'Nandini Rao', company: 'Microsoft - Hyderabad', status: 'rejected', badge: 'REJECTED', color: 'rose' },
    { name: 'Prateek Singh', company: 'Zoho Corp', status: 'offered', badge: 'OFFERED', color: 'cyan' }
  ];

  const StatusBadge = ({ badge, color }) => {
    const colors = {
      emerald: 'bg-emerald-500 text-white shadow-emerald-500/50',
      amber: 'bg-amber-500 text-white shadow-amber-500/50',
      blue: 'bg-blue-500 text-white shadow-blue-500/50',
      cyan: 'bg-cyan-500 text-white shadow-cyan-500/50',
      rose: 'bg-rose-500 text-white shadow-rose-500/50'
    };
    
    return (
      <span className={`px-4 py-2 rounded-xl text-xs font-black shadow-lg ${colors[color]}`}>
        {badge}
      </span>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, companyPoster: file }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAddForm(false);
    // Reset form
    setFormData({
      companyName: '',
      jobRole: '',
      requiredSkills: '',
      applicationDeadline: '',
      companyURL: '',
      jobDescription: '',
      companyPoster: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      {/* Header */}
      <header className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-5xl font-black tracking-tight bg-gradient-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                NEC Alumni Association
              </h1>
              <p className="mt-3 text-indigo-100 text-xl font-light tracking-wide">
                Connecting Generations, Building Futures ✨
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-2xl hover:scale-105 transform">
                Login
              </button>
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all border-2 border-white hover:scale-105 transform">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="relative bg-white/90 backdrop-blur-lg shadow-xl sticky top-0 z-10 border-b-2 border-indigo-100">
        <div className="container mx-auto px-6">
          <nav className="flex gap-3">
            <button
              onClick={() => setActiveTab('webinars')}
              className={`flex items-center gap-3 px-8 py-5 font-bold transition-all transform hover:scale-105 ${
                activeTab === 'webinars'
                  ? 'text-indigo-600 border-b-4 border-indigo-600 bg-gradient-to-b from-indigo-50 to-transparent shadow-lg'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50/50'
              }`}
            >
              <BookOpen size={22} />
              <span className="text-lg">Webinars</span>
            </button>
            <button
              onClick={() => setActiveTab('mentorship')}
              className={`flex items-center gap-3 px-8 py-5 font-bold transition-all transform hover:scale-105 ${
                activeTab === 'mentorship'
                  ? 'text-purple-600 border-b-4 border-purple-600 bg-gradient-to-b from-purple-50 to-transparent shadow-lg'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-gray-50/50'
              }`}
            >
              <Users size={22} />
              <span className="text-lg">Mentorship</span>
            </button>
            <button
              onClick={() => setActiveTab('placement')}
              className={`flex items-center gap-3 px-8 py-5 font-bold transition-all transform hover:scale-105 ${
                activeTab === 'placement'
                  ? 'text-pink-600 border-b-4 border-pink-600 bg-gradient-to-b from-pink-50 to-transparent shadow-lg'
                  : 'text-gray-600 hover:text-pink-600 hover:bg-gray-50/50'
              }`}
            >
              <Briefcase size={22} />
              <span className="text-lg">Placement</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative container mx-auto px-6 py-12">
        {/* Webinars Tab */}
        {activeTab === 'webinars' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-4xl font-black text-white mb-2">Upcoming Webinars 🎓</h2>
                <p className="text-indigo-200 text-lg font-medium">Engage with alumni-led sessions on technology, innovation, and career insights</p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl">
                Schedule New Webinar
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, idx) => (
                <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl transition-shadow p-8 border-2 border-indigo-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-4 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-lg">
                      <Calendar className="text-white" size={28} />
                    </div>
                    <StatusBadge badge={webinar.badge} color={webinar.color} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">{webinar.title}</h3>
                  <p className="text-gray-600 text-base mb-6 font-medium">Interactive session with industry experts</p>
                  <button className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Mentorship Tab */}
        {activeTab === 'mentorship' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-4xl font-black text-white mb-2">Mentorship Program 👥</h2>
                <p className="text-purple-200 text-lg font-medium">Connect with alumni mentors for career guidance and skill-building opportunities</p>
              </div>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl">
                Find a Mentor
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mentorships.map((mentor, idx) => (
                <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl transition-shadow p-8 border-2 border-purple-100">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-400 via-pink-400 to-rose-400 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-gray-800">{mentor.name}</h3>
                      <p className="text-base text-gray-600 font-medium">{mentor.role}</p>
                    </div>
                  </div>
                  <StatusBadge badge={mentor.badge} color={mentor.color} />
                  <div className="mt-6 pt-6 border-t-2 border-gray-100">
                    <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105">
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placement Tab */}
        {activeTab === 'placement' && (
          <div className="space-y-8 animate-fadeIn">
            {!showAddForm ? (
              <>
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-4xl font-black text-white mb-2">Placement Tracker 💼</h2>
                    <p className="text-pink-200 text-lg font-medium">Explore placement drives, training sessions, and alumni support for job opportunities</p>
                  </div>
                  <button 
                    onClick={() => setShowAddForm(true)}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-2xl font-bold hover:shadow-2xl transition-all transform hover:scale-105 shadow-xl">
                    Add New Application
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {placements.map((placement, idx) => (
                    <div key={idx} className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl transition-shadow p-8 border-2 border-pink-100">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-rose-400 to-red-400 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                            {placement.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="text-xl font-black text-gray-800">{placement.name}</h3>
                            <p className="text-base text-gray-600 font-medium">{placement.company}</p>
                          </div>
                        </div>
                        <StatusBadge badge={placement.badge} color={placement.color} />
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button className="flex-1 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105">
                          View Profile
                        </button>
                        <button className="flex-1 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105">
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-2 border-pink-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-lg">
                      <Briefcase className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-black text-gray-800">Add New Company</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                          <Briefcase size={16} className="text-indigo-600" />
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter company name"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none font-medium"
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                          <Briefcase size={16} className="text-rose-600" />
                          Job Role
                        </label>
                        <input
                          type="text"
                          name="jobRole"
                          value={formData.jobRole}
                          onChange={handleInputChange}
                          placeholder="Enter job role"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-rose-500 focus:outline-none font-medium"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                          <BookOpen size={16} className="text-purple-600" />
                          Required Skills
                        </label>
                        <input
                          type="text"
                          name="requiredSkills"
                          value={formData.requiredSkills}
                          onChange={handleInputChange}
                          placeholder="e.g., React, Node.js, TypeScript"
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none font-medium"
                          required
                        />
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                          <Calendar size={16} className="text-blue-600" />
                          Application Deadline
                        </label>
                        <input
                          type="date"
                          name="applicationDeadline"
                          value={formData.applicationDeadline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none font-medium"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                        <Mail size={16} className="text-indigo-600" />
                        Company URL
                      </label>
                      <input
                        type="url"
                        name="companyURL"
                        value={formData.companyURL}
                        onChange={handleInputChange}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:outline-none font-medium"
                        required
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
                        <BookOpen size={16} className="text-pink-600" />
                        Job Description
                      </label>
                      <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleInputChange}
                        placeholder="Enter detailed job description..."
                        rows="6"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none font-medium resize-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-sm font-bold text-gray-700 mb-3 block">Company Poster</label>
                      <div className="border-4 border-dashed border-indigo-200 rounded-2xl p-12 text-center bg-gradient-to-br from-indigo-50 to-purple-50 hover:border-indigo-400 transition-all">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="poster-upload"
                        />
                        <label htmlFor="poster-upload" className="cursor-pointer">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                              <Calendar className="text-white" size={32} />
                            </div>
                            <p className="text-xl font-black text-gray-800">Company Poster</p>
                            <p className="text-sm text-gray-600 font-medium">
                              {formData.companyPoster ? formData.companyPoster.name : 'Drag and drop or click to upload'}
                            </p>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="flex-1 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-bold hover:shadow-xl transition-all transform hover:scale-105"
                      >
                        Add Company
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white mt-20 border-t-4 border-indigo-500">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-indigo-300 to-pink-300 bg-clip-text text-transparent">
                NEC Alumni Association
              </h3>
              <p className="text-gray-300 font-medium">Building bridges between past, present, and future generations of NEC students.</p>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 text-indigo-300">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 font-medium">
                <li><a href="#" className="hover:text-indigo-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-lg mb-4 text-pink-300">Connect With Us</h4>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:shadow-lg hover:scale-110 transition-all flex items-center justify-center">
                  <Mail size={22} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-indigo-800 mt-8 pt-8 text-center text-gray-300 font-medium">
            <p>© 2024 NEC Alumni Association. All rights reserved. Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
}