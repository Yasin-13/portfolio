import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-4">
    <header className="text-center mb-8">
      <div className="flex items-center justify-center space-x-8 mb-4">
        <a 
          href="/y.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent text-black hover:text-black px-6 font-sans font-bold py-2 rounded-md text-2xl hover:bg-black transition duration-300"
          >
          Resume
        </a>
        <div className="text-left">
          <p className="text-lg font-medium">Contact Information:</p>
          <p className="text-gray-700">Phone: +91-8454004995</p>
          <p className="text-gray-700">Email: yasin318813@gmail.com</p>
        </div>
      </div>
      <p className="text-2xl bg-gradient-to-r from-blue-700 to-indigo-900 bg-clip-text text-transparent font-bold ">Connect with me on social media:</p>
      
    </header>
  </div>
  )
}

export default Contact