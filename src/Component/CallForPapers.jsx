import React from 'react'

export default function CallForPapers() {
    const topics = [
        'Artificial Intelligence and Machine Learning',
        'Cloud Computing and Virtualization',
        'Big Data Analytics and Data Mining',
        'Computer Networks and Security',
        'Internet of Things (IoT)',
        'Blockchain Technology',
        'Cybersecurity and Privacy',
        'Software Engineering',
        'Mobile Computing',
        'Distributed Systems'
      ];
  return (
    <section className="py-15 pt-23 md:py-25 bg-gradient-to-b from-purple-50 to-indigo-50 relative" id="ConferenceTracks">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=1920')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto  relative z-10">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">
          Conference Tracks
        </h2>
        <div className="max-w-9xl mx-auto px-4 md:px-8">
          <p className="text-indigo-800 mb-10 text-justify text-xl md:text-center md:text-2xl">
            We invite researchers to submit original research papers on the following topics 
            (but not limited to):
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50"
              >
                <p className="text-indigo-900 text-lg md:text-2xl ">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
