import React from 'react'

const Landing = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://www.mathuravrindavanpackage.com/images/banner/5.jpg')"}}>
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4 py-12">
        <div className="max-w-3xl text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Jai Shree <span className="text-orange-300">Krishna</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            One of the <span className="text-orange-200 font-bold">Spiritual</span> and sacred places in India, 
            lined with a number of temples along the roads is Mathura City, the birth land of{' '}
            <span className="text-orange-200 font-bold">Lord Krishna</span>
          </p>
        </div>
        
        <div className="bg-orange-900 bg-opacity-20 backdrop-blur-sm rounded-lg p-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-300">
            Bhagavad Gita Wisdom
          </h2>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-200">Sanskrit Sloka</h3>
              <p className="text-xl md:text-2xl italic leading-relaxed text-orange-100">
                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।<br/>
                मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-200">English Translation</h3>
              <p className="text-base md:text-lg leading-relaxed text-orange-50">
                You have the right to work only but never to its fruits.<br/>
                Let not the fruits of action be your motive, nor let your attachment be to inaction.
              </p>
            </div>
            <div className="text-center mt-8">
              <p className="text-sm md:text-base text-orange-200">
                - Bhagavad Gita, Chapter 2, Verse 47
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing

