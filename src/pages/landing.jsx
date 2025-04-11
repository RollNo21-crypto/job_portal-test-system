import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Landing = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const companies = [
    {
      name: 'Google',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
    },
    {
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    {
      name: 'IBM',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
    },
    {
      name: 'TCS',
      logo: 'https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg'
    },
    {
      name: 'Oracle',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg'
    },
    {
      name: 'Deloitte',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg'
    },
    {
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === companies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Hirrd?",
      answer: "Hirrd is a comprehensive job portal connecting job seekers with employers. Our platform streamlines the hiring process by providing tools for job posting, application tracking, and candidate management."
    },
    {
      question: "How do I post a job?",
      answer: "To post a job, create an employer account, click on 'Post a job' button, fill in the job details including title, description, requirements, and submit. Your job will be visible to potential candidates immediately."
    },
    {
      question: "How can I search for jobs?",
      answer: "You can search for jobs by using the search bar on our jobs page. Filter results by location, job type, salary range, and industry to find positions that match your skills and preferences."
    },
    {
      question: "How do I apply for a job?",
      answer: "To apply for a job, click on the job listing, review the details, and click the 'Apply' button. You'll need to complete your profile with your resume and relevant information before submitting your application."
    },
    {
      question: "Can I save jobs to apply later?",
      answer: "Yes, you can save jobs to apply later. Simply click the 'Save' button on any job listing. You can access your saved jobs from your dashboard at any time."
    },
    {
      question: "How do I track my job applications?",
      answer: "All your submitted applications can be tracked from your dashboard. You'll receive notifications about application status changes and can view detailed information about each application."
    }
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Find Your Dream Job <br />
            through<img src={logo} alt="Hirrd" className="inline-block h-16 md:h-20 align-middle" />
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            Explore thousands of job listings or find the perfect candidate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-md text-lg transition-colors">
              Find Jobs
            </Link>
            <Link to="/post-job" className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-8 rounded-md text-lg transition-colors">
              Post a job
            </Link>
          </div>
        </div>
      </div>

      {/* Company Logos Carousel */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-white mb-10 text-center">Companies That Trust Us</h2>
        <div className="relative overflow-hidden bg-gray-900 rounded-lg p-8">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 20}%)` }}
          >
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={index} 
                className="min-w-[20%] px-8 flex items-center justify-center"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-12 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Seeker and Employer Info Section */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">For Job Seekers</h2>
          <p className="text-gray-300 mb-4">Search and apply for jobs, track applications, and more.</p>
        </div>
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">For Employers</h2>
          <p className="text-gray-300 mb-4">Post jobs, manage applications, and find the best candidates.</p>
        </div>
      </div>

      

      {/* FAQ Accordion Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((faq, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full text-left py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-white transform ${openFaq === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Landing