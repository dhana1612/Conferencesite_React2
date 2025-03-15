import React from 'react'
import PaperSubmission from './PaperSubmission';

export default function ImportantDates() {
    const dates = [
        {
          event: 'Paper Submission Deadline',
          date: 'April 15, 2024'
        },
        {
          event: 'Notification of Acceptance',
          date: 'May 1, 2024'
        },
        {
          event: 'Camera Ready Submission',
          date: 'May 15, 2024'
        },
        {
          event: 'Early Bird Registration',
          date: 'May 30, 2024'
        },
        {
          event: 'Conference Dates',
          date: 'June 15-17, 2024'
        }
      ];
  return (
    <>
    
        <section className="py-15 pt-20 md:py-25 bg-gradient-to-b from-indigo-50 to-purple-50" id="important-dates">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-3xl md:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">Important Dates</h2>
            <div className="max-w-3xl mx-auto px-1 md:px-8">
              <div className="relative mb-8 overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80" 
                  alt="Calendar" 
                  className="w-full h-80 object-cover"
                />
              </div>
              {dates.map((item, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center py-4 border-b border-indigo-200/30 hover:bg-indigo-50/50 transition-colors duration-300 px-4 rounded-lg -mx-4"
                >
                  <span className="text-indigo-900 font-medium text-xl md:text-2xl">{item.event}</span>
                  <span className="text-purple-700 font-semibold bg-purple-100/50 px-4 py-2 rounded-full text-lg md:text-xl">{item.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>


       
        
        
    </>
  )
}
