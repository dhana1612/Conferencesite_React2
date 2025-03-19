import React from 'react'
import PaperSubmission from './PaperSubmission';

export default function Speakers() {
    const speakers = [
        {
          name: 'Dr. Sarah Johnson',
          title: 'Professor of Computer Science',
          institution: 'MIT',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
        },
        {
          name: 'Dr. Michael Chen',
          title: 'Lead AI Researcher',
          institution: 'Google Research',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
        },
        {
          name: 'Dr. Emily Williams',
          title: 'Director of Data Science',
          institution: 'Stanford University',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
        }
      ];
  return (
    <>
   
    <section className="py-15 pt-20 md:py-25 bg-gradient-to-b from-purple-50 to-indigo-50 relative" id="speakers">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1920')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900"> Speakers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-12">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-70 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 ">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-indigo-900 text-center">{speaker.name}</h2>
                <p className="text-indigo-700 mb-1 text-base text-center">{speaker.title}</p>
                <p className="text-purple-600 font-medium text-base text-center">{speaker.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    </>
  )
}
