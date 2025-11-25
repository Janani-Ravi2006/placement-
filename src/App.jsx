import React, { useState, useEffect } from 'react';
import { Users, BookOpen, Briefcase, Calendar, Mail, Menu, X, Lock, Eye, EyeOff, User, Search, Bell, ChevronDown, ChevronLeft, ChevronRight, BarChart3, Mic2, CheckCircle, XCircle, Clock, PlayCircle, Video, Eye as EyeIcon } from 'lucide-react';
import { FaLinkedin, FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function NECAlumniAssociation() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeTab, setActiveTab] = useState('webinars');
  const [showAddForm, setShowAddForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dashboardView, setDashboardView] = useState('overview');
  
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    email: ''
  });

  const [formData, setFormData] = useState({
    companyName: '',
    jobRole: '',
    requiredSkills: '',
    applicationDeadline: '',
    companyURL: '',
    jobDescription: '',
    companyPoster: null
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Banner images for slider
  const bannerImages = [
    'https://vaave.s3.amazonaws.com/assets/site_content/151571396/banners/851f5ac9941d720844d143ed9cfcf60a_44513c9cbb7030079023e5fe9f2058eb.jpeg',
    'https://vaave.s3.amazonaws.com/assets/site_content/151571396/banners/36cf200bdb23f1b68b8ba61d7cf32cc2.jpg',
    'https://vaave.s3.amazonaws.com/assets/site_content/151571396/banners/42b6f4495831d740361766c18793d92d.jpg',
    'https://vaave.s3.amazonaws.com/assets/site_content/151571396/banners/f09f038c87a160aef9dda01ed7420eb7.jpg',
    'https://vaave.s3.amazonaws.com/assets/site_content/151571396/banners/9dd9acd10f8949f13335dc4d73f6418f.jpg'
  ];

  // Webinar data
  const webinars = [
    { 
      id: 1,
      title: 'AI in Healthcare', 
      status: 'approved', 
      badge: 'APPROVED', 
      color: 'emerald',
      date: 'Dec 15, 2024',
      time: '6:00 PM IST',
      speaker: 'Dr. Priya Sharma',
      attendees: 245,
      category: 'Technology',
      duration: '60 mins',
      description: 'Exploring the applications of AI in healthcare and medical diagnostics.',
      views: 1247
    },
    { 
      id: 2,
      title: 'Data Science Career Roadmap', 
      status: 'approved', 
      badge: 'APPROVED', 
      color: 'emerald',
      date: 'Dec 18, 2024',
      time: '5:30 PM IST',
      speaker: 'Rahul Verma',
      attendees: 189,
      category: 'Career',
      duration: '45 mins',
      description: 'A comprehensive guide to building a career in data science.',
      views: 892
    },
    { 
      id: 3,
      title: 'Cybersecurity Trends 2024', 
      status: 'hold', 
      badge: 'HOLD', 
      color: 'amber',
      date: 'Dec 20, 2024',
      time: '7:00 PM IST',
      speaker: 'Ankit Patel',
      attendees: 167,
      category: 'Technology',
      duration: '75 mins',
      description: 'Latest trends and threats in cybersecurity landscape.',
      views: 756
    },
    { 
      id: 4,
      title: 'Full Stack Development', 
      status: 'approved', 
      badge: 'APPROVED', 
      color: 'emerald',
      date: 'Dec 22, 2024',
      time: '4:00 PM IST',
      speaker: 'Neha Gupta',
      attendees: 312,
      category: 'Technology',
      duration: '90 mins',
      description: 'Modern full stack development with latest frameworks.',
      views: 1563
    },
    { 
      id: 5,
      title: 'Blockchain Fundamentals', 
      status: 'planned', 
      badge: 'PLANNED', 
      color: 'blue',
      date: 'Jan 5, 2025',
      time: '3:00 PM IST',
      speaker: 'Rajesh Kumar',
      attendees: 0,
      category: 'Technology',
      duration: '60 mins',
      description: 'Understanding the basics of blockchain technology.',
      views: 234
    },
    { 
      id: 6,
      title: 'Leadership in Tech', 
      status: 'postponed', 
      badge: 'POSTPONED', 
      color: 'violet',
      date: 'TBD',
      time: 'TBD',
      speaker: 'Sanjay Mehta',
      attendees: 0,
      category: 'Leadership',
      duration: '60 mins',
      description: 'Developing leadership skills in technology organizations.',
      views: 189
    }
  ];

  // Calculate dashboard metrics
  const dashboardMetrics = {
    totalWebinars: webinars.length,
    totalSpeakers: new Set(webinars.map(w => w.speaker)).size,
    completed: webinars.filter(w => w.status === 'completed').length,
    approved: webinars.filter(w => w.status === 'approved').length,
    planned: webinars.filter(w => w.status === 'planned').length,
    postponed: webinars.filter(w => w.status === 'postponed').length,
    rejected: webinars.filter(w => w.status === 'rejected').length,
    totalAttendees: webinars.reduce((sum, w) => sum + w.attendees, 0),
    totalViews: webinars.reduce((sum, w) => sum + w.views, 0)
  };

  // Auto slide functionality
  useEffect(() => {
    if (currentPage === 'home') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentPage, bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const mentorships = [
    { 
      name: 'Dr. A. Ramesh', 
      role: 'Professor, Dept. of CSE', 
      status: 'meetings', 
      badge: 'MEETINGS: 3', 
      color: 'blue',
      expertise: ['AI/ML', 'Research', 'Career Guidance'],
      experience: '15+ years'
    },
    { 
      name: 'M. Kavitha Devi', 
      role: 'Senior Engineer, Dept. of ECE', 
      status: 'meetings', 
      badge: 'MEETINGS: 2', 
      color: 'rose',
      expertise: ['Embedded Systems', 'IoT', 'VLSI'],
      experience: '12 years'
    }
  ];

  const placements = [
    { 
      name: 'Ashini Sharma', 
      company: 'Google - Bangalore', 
      status: 'offered', 
      badge: 'OFFERED', 
      color: 'cyan',
      package: '₹32 LPA',
      role: 'Software Engineer'
    },
    { 
      name: 'Aditya Kumar', 
      company: 'Tech Solutions', 
      status: 'progress', 
      badge: 'IN PROGRESS', 
      color: 'blue',
      package: '₹18 LPA',
      role: 'Frontend Developer'
    }
  ];

  const StatusBadge = ({ badge, color }) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
      amber: 'bg-amber-100 text-amber-800 border border-amber-200',
      blue: 'bg-blue-100 text-blue-800 border border-blue-200',
      cyan: 'bg-cyan-100 text-cyan-800 border border-cyan-200',
      rose: 'bg-rose-100 text-rose-800 border border-rose-200',
      green: 'bg-green-100 text-green-800 border border-green-200',
      violet: 'bg-violet-100 text-violet-800 border border-violet-200',
      red: 'bg-red-100 text-red-800 border border-red-200'
    };
    
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[color]}`}>
        {badge}
      </span>
    );
  };

  const StatCard = ({ title, value, icon, color, subtitle }) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      amber: 'from-amber-500 to-amber-600',
      violet: 'from-violet-500 to-violet-600',
      red: 'from-red-500 to-red-600',
      emerald: 'from-emerald-500 to-emerald-600',
      indigo: 'from-indigo-500 to-indigo-600',
      purple: 'from-purple-500 to-purple-600'
    };
    
    const iconColors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      amber: 'text-amber-600',
      violet: 'text-violet-600',
      red: 'text-red-600',
      emerald: 'text-emerald-600',
      indigo: 'text-indigo-600',
      purple: 'text-purple-600'
    };
    
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
            {subtitle && (
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            )}
          </div>
          <div className={`p-4 rounded-xl bg-gradient-to-br ${colors[color]} text-white`}>
            {icon}
          </div>
        </div>
      </div>
    );
  };

  const WebinarCard = ({ webinar }) => (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Card Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <Video size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">{webinar.title}</h3>
              <p className="text-blue-100 text-sm">By {webinar.speaker}</p>
            </div>
          </div>
          <StatusBadge badge={webinar.badge} color={webinar.color} />
        </div>
      </div>
      
      {/* Card Body */}
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{webinar.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar size={16} className="text-blue-500" />
            <span>{webinar.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock size={16} className="text-green-500" />
            <span>{webinar.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users size={16} className="text-purple-500" />
            <span>{webinar.attendees} attendees</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <EyeIcon size={16} className="text-amber-500" />
            <span>{webinar.views} views</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
            View Details
          </button>
          <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </div>
  );

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

  const handleAuthInputChange = (e) => {
    const { name, value } = e.target;
    if (currentPage === 'login') {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);
    setIsLoggedIn(true);
    setCurrentPage("home");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register Data:", registerData);
    setIsLoggedIn(true);
    setCurrentPage("home");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDropdown(false);
  };

  // Header Component - Reusable across all pages
  const Header = () => (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo with left space */}
          <div className="flex items-center ml-4 sm:ml-6">
            <div className="bg-white p-2 rounded-lg">
              <img 
                src="https://vaave.s3.amazonaws.com/assets/site_content/151571396/logo-cms.png" 
                alt="NEC Logo" 
                className="h-12 sm:h-16 object-contain"
              />
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 mr-4 sm:mr-6">
            {isLoggedIn ? (
              <div className="relative">
                <button 
                  onClick={() => setUserDropdown(!userDropdown)}
                  className="flex items-center space-x-2 bg-gray-100 rounded-lg px-3 py-2 hover:bg-gray-200 transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    U
                  </div>
                  <ChevronDown size={16} />
                </button>
                
                {userDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
                    <button 
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => setCurrentPage('login')}
                  className="text-gray-700 font-medium hover:text-blue-600 transition-colors"
                >
                  LOGIN
                </button>
                <span className="text-gray-400">::</span>
                <button 
                  onClick={() => setCurrentPage('register')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  REGISTER
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors mr-4"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Events</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Alumni</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Resources</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <div className="pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left text-gray-700 font-medium"
                  >
                    Sign Out
                  </button>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <button 
                      onClick={() => {
                        setCurrentPage('login');
                        setMobileMenuOpen(false);
                      }}
                      className="text-gray-700 font-medium"
                    >
                      LOGIN
                    </button>
                    <button 
                      onClick={() => {
                        setCurrentPage('register');
                        setMobileMenuOpen(false);
                      }}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
                    >
                      REGISTER
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );

  // Login Page with Header
  if (currentPage === 'login') {
    return (
      <div className="min-h-screen bg-[#f8f9f3] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center pt-10 pb-20">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-10">
            
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">LOGIN</h1>

            {/* Sub heading */}
            <p className="text-center text-gray-700 text-lg">
              Login and stay connected to your alumni community and alma mater
            </p>

            {/* Social Login Buttons */}
            <div className="mt-8 flex flex-col items-center space-y-4">
              <button className="w-full max-w-lg bg-[#0077B5] text-white py-3 rounded flex items-center justify-center gap-3 hover:opacity-90">
                <FaLinkedin size={22} />
                Login with LinkedIn
              </button>

              <button className="w-full max-w-lg bg-[#DB4437] text-white py-3 rounded flex items-center justify-center gap-3 hover:opacity-90">
                <FaGoogle size={22} />
                Login with Google
              </button>
            </div>

            {/* OR Divider */}
            <div className="relative my-10 text-center">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="absolute left-1/2 top-[-12px] transform -translate-x-1/2 bg-white px-4 text-gray-500">
                or
              </span>
            </div>

            {/* Email & Password Login */}
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Email Id"
                className="w-full max-w-lg border border-gray-300 rounded px-4 py-3 mb-4 focus:ring-2 focus:ring-blue-300 outline-none"
              />

              {/* Password Field */}
              <div className="w-full max-w-lg relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-blue-300 outline-none"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible size={22} />
                  ) : (
                    <AiOutlineEye size={22} />
                  )}
                </span>
              </div>

              {/* Forgot Password */}
              <div className="w-full max-w-lg text-right mt-2">
                <a
                  href="#"
                  className="text-gray-500 text-sm hover:text-blue-600 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button 
                onClick={handleLogin}
                className="w-full max-w-lg bg-green-500 text-white py-3 rounded mt-6 hover:bg-green-600 transition"
              >
                Submit
              </button>
            </div>

            {/* Signup Link */}
            <p className="mt-6 text-center text-gray-600">
              Not registered yet?{" "}
              <button
                onClick={() => setCurrentPage('register')}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Click here to Signup Now!
              </button>
            </p>
          </div>

          {/* Footer */}
          <a
            href="https://nec.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-gray-600 flex items-center gap-2 hover:text-blue-600 transition"
          >
            🌐 National Engineering College, Kovilpatti
          </a>
        </div>
      </div>
    );
  }

  // Register Page with Header
  if (currentPage === 'register') {
    return (
      <div className="min-h-screen bg-[#f8f9f3] flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center pt-10 pb-20">
          <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-10">
            
            {/* Heading */}
            <h1 className="text-3xl font-semibold text-gray-800">
              Registration
              <span className="text-gray-500 text-base ml-2">
                Join your alumni network
              </span>
            </h1>

            {/* Social Signup Buttons */}
            <div className="mt-10 flex flex-col items-center space-y-4">
              <button className="w-full max-w-lg bg-[#0077B5] text-white py-3 rounded flex items-center justify-center gap-3 hover:opacity-90">
                <FaLinkedin size={22} />
                Signup with LinkedIn
              </button>

              <button className="w-full max-w-lg bg-[#DB4437] text-white py-3 rounded flex items-center justify-center gap-3 hover:opacity-90">
                <FaGoogle size={22} />
                Signup with Google
              </button>
            </div>

            {/* OR Divider */}
            <div className="relative my-10 text-center">
              <div className="border-t border-gray-300 w-full"></div>
              <span className="absolute left-1/2 top-[-12px] transform -translate-x-1/2 bg-white px-4 text-gray-500">
                or
              </span>
            </div>

            {/* Email Signup */}
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                Signup with your Email Address
              </h2>

              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleAuthInputChange}
                placeholder="Email Address"
                className="w-full max-w-lg border border-gray-300 rounded px-4 py-3 focus:ring-2 focus:ring-green-400 outline-none"
              />

              <button 
                onClick={handleRegister}
                className="w-full max-w-lg bg-green-500 text-white py-3 rounded mt-5 hover:bg-green-600 transition"
              >
                Submit
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-6 text-center text-gray-600">
              Already Member?{" "}
              <button
                onClick={() => setCurrentPage('login')}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Click here to Login
              </button>
            </p>
          </div>

          {/* Footer */}
          <a 
            href="https://nec.edu.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 text-gray-600 flex items-center gap-2 hover:text-blue-600 transition"
          >
            🌐 National Engineering College, Kovilpatti
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section with Image Slider */}
      <section className="relative h-96 sm:h-[500px] overflow-hidden">
        {/* Slider Container */}
        <div className="relative w-full h-full">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`NEC Alumni Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Reduced blur overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-[1px]"></div>
            </div>
          ))}
          
          {/* Slider Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                NEC Alumni Network
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Connecting generations of National Engineering College alumni worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Explore Events
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Join Community
                </button>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs with #012D71 color - Centered */}
      <div className="bg-[#012D71] shadow-sm border-b border-[#012D71] sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6">
          <nav className="flex overflow-x-auto scrollbar-hide justify-center">
            <div className="flex">
              <button
                onClick={() => setActiveTab('webinars')}
                className={`flex items-center gap-2 px-6 py-4 font-bold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'webinars'
                    ? 'border-white text-white bg-[#001a4a]'
                    : 'border-transparent text-blue-200 hover:text-white'
                }`}
              >
                <BookOpen size={20} />
                Webinars & Events
              </button>
              <button
                onClick={() => setActiveTab('mentorship')}
                className={`flex items-center gap-2 px-6 py-4 font-bold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'mentorship'
                    ? 'border-white text-white bg-[#001a4a]'
                    : 'border-transparent text-blue-200 hover:text-white'
                }`}
              >
                <Users size={20} />
                Mentorship
              </button>
              <button
                onClick={() => setActiveTab('placement')}
                className={`flex items-center gap-2 px-6 py-4 font-bold whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === 'placement'
                    ? 'border-white text-white bg-[#001a4a]'
                    : 'border-transparent text-blue-200 hover:text-white'
                }`}
              >
                <Briefcase size={20} />
                Placement Support
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8">
        {/* Webinars Tab */}
        {activeTab === 'webinars' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Webinar Dashboard</h2>
                <p className="text-gray-600">Manage and track all webinar activities</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setDashboardView(dashboardView === 'overview' ? 'detailed' : 'overview')}
                  className="flex items-center gap-2 bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 font-medium hover:bg-gray-50 transition-colors"
                >
                  <BarChart3 size={18} />
                  {dashboardView === 'overview' ? 'Detailed View' : 'Overview'}
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  Schedule Webinar
                </button>
              </div>
            </div>
            
            {/* Dashboard Overview */}
            {dashboardView === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard 
                  title="Total Webinars" 
                  value={dashboardMetrics.totalWebinars} 
                  icon={<BookOpen size={24} />} 
                  color="blue"
                  subtitle="All time webinars"
                />
                <StatCard 
                  title="Total Speakers" 
                  value={dashboardMetrics.totalSpeakers} 
                  icon={<Mic2 size={24} />} 
                  color="indigo"
                  subtitle="Unique speakers"
                />
                <StatCard 
                  title="Completed" 
                  value={dashboardMetrics.completed} 
                  icon={<CheckCircle size={24} />} 
                  color="green"
                  subtitle="Successfully conducted"
                />
                <StatCard 
                  title="Approved" 
                  value={dashboardMetrics.approved} 
                  icon={<PlayCircle size={24} />} 
                  color="emerald"
                  subtitle="Scheduled webinars"
                />
                <StatCard 
                  title="Planned" 
                  value={dashboardMetrics.planned} 
                  icon={<Calendar size={24} />} 
                  color="amber"
                  subtitle="Upcoming webinars"
                />
                <StatCard 
                  title="Postponed" 
                  value={dashboardMetrics.postponed} 
                  icon={<Clock size={24} />} 
                  color="violet"
                  subtitle="Rescheduled events"
                />
                <StatCard 
                  title="Total Attendees" 
                  value={dashboardMetrics.totalAttendees} 
                  icon={<Users size={24} />} 
                  color="purple"
                  subtitle="All participants"
                />
                <StatCard 
                  title="Total Views" 
                  value={dashboardMetrics.totalViews} 
                  icon={<EyeIcon size={24} />} 
                  color="red"
                  subtitle="Content engagement"
                />
              </div>
            )}
            
            {/* Webinar Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar, idx) => (
                <WebinarCard key={webinar.id} webinar={webinar} />
              ))}
            </div>
          </div>
        )}

        {/* Mentorship Tab */}
        {activeTab === 'mentorship' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Mentorship Program</h2>
                <p className="text-gray-600">Connect with experienced alumni mentors for guidance</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                Find a Mentor
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentorships.map((mentor, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.role}</p>
                      <p className="text-xs text-gray-500">{mentor.experience} experience</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <StatusBadge badge={mentor.badge} color={mentor.color} />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.expertise.map((skill, skillIdx) => (
                      <span key={skillIdx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Schedule Meeting
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Placement Tab */}
        {activeTab === 'placement' && (
          <div className="space-y-8">
            {!showAddForm ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Placement Tracker</h2>
                    <p className="text-gray-600">Track placement activities and opportunities</p>
                  </div>
                  <button 
                    onClick={() => setShowAddForm(true)}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Add Application
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {placements.map((placement, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-semibold">
                            {placement.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{placement.name}</h3>
                            <p className="text-sm text-gray-600">{placement.company}</p>
                            <p className="text-xs text-gray-500">{placement.role}</p>
                          </div>
                        </div>
                        <StatusBadge badge={placement.badge} color={placement.color} />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600">Package</div>
                          <div className="font-semibold text-gray-900">{placement.package}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600">Status</div>
                          <div className="font-semibold text-gray-900">{placement.status}</div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                          View Profile
                        </button>
                        <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                          Contact
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">Add New Company</h2>
                      <p className="text-gray-600">Submit new placement opportunity</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="Enter company name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Job Role
                        </label>
                        <input
                          type="text"
                          name="jobRole"
                          value={formData.jobRole}
                          onChange={handleInputChange}
                          placeholder="Enter job role"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Required Skills
                        </label>
                        <input
                          type="text"
                          name="requiredSkills"
                          value={formData.requiredSkills}
                          onChange={handleInputChange}
                          placeholder="e.g., React, Node.js, TypeScript"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Application Deadline
                        </label>
                        <input
                          type="date"
                          name="applicationDeadline"
                          value={formData.applicationDeadline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company URL
                      </label>
                      <input
                        type="url"
                        name="companyURL"
                        value={formData.companyURL}
                        onChange={handleInputChange}
                        placeholder="https://example.com/careers"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Description
                      </label>
                      <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleInputChange}
                        placeholder="Enter detailed job description, requirements, and benefits..."
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowAddForm(false)}
                        className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                      >
                        Submit Company
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
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white p-2 rounded-lg">
                  <img 
                    src="https://vaave.s3.amazonaws.com/assets/site_content/151571396/logo-cms.png" 
                    alt="NEC Logo" 
                    className="h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">National Engineering College</h3>
                  <p className="text-gray-400 text-sm">Alumni Association</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Building bridges between past, present, and future generations of NEC students.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events Calendar</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Alumni Directory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mentorship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Job Board</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Webinars</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News & Updates</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>National Engineering College</p>
                <p>Kovilpatti, Tamil Nadu</p>
                <p>alumni@nec.edu.in</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 National Engineering College Alumni Association. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}