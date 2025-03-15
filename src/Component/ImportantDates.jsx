import React from 'react';

export default function ImportantDates() {
    const dates = [
        { event: 'Paper Submission Deadline', date: 'April 15, 2024' },
        { event: 'Notification of Acceptance', date: 'May 1, 2024' },
        { event: 'Camera Ready Submission', date: 'May 15, 2024' },
        { event: 'Early Bird Registration', date: 'May 30, 2024' },
        { event: 'Conference Dates', date: 'June 15-17, 2024' }
    ];

    return (
        <section className="py-15 pt-20 md:py-25 bg-gradient-to-b from-indigo-50 to-purple-50" id="important-dates">
            <div className="container mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-bold px-2 md:px-1 md:pe-10 mb-12 text-indigo-900">
                    Important Dates & Bank Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10">
                    {/* Important Dates */}
                    <div >
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

                    {/* Enhanced Bank Details Section */}
                    <div className="bg-white shadow-xl rounded-2xl px-3 md:px-10 border border-gray-200">
                        <h3 className="text-2xl pt-7 font-bold text-blue-700 text-center mb-6 uppercase tracking-wide">
                            Bank Details
                        </h3>
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-inner">
                            <div className="space-y-6 text-xl text-gray-800">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-700">Account Name</span>
                                    <span className="text-gray-900">
                                        J.K. Jothi Kalpana, Professor, Dept. of Computer Science & Engineering,
                                        VRS College of Engineering and Technology, Arasur.
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-700">Account Number</span>
                                    <span className="text-gray-900">045100050302269</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-700">Branch</span>
                                    <span className="text-gray-900">Villupuram</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-700">IFSC Code</span>
                                    <span className="text-gray-900">TMBL0000045</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-700">MICR</span>
                                    <span className="text-gray-900">605060005</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
