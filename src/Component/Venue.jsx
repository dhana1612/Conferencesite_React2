import React from 'react';
import { MapPin, CalendarDays } from 'lucide-react';

const EventDetails = () => {
  const handleScrollToSubmission = () => {
    const element = document.getElementById('paper-submission');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center text-gray-800">
          {/* Where Section */}
          <div>
            <MapPin className="mx-auto text-[#5943F7] w-8 h-8 mb-2" />
            <h3 className="text-4xl font-bold mb-1">Where?</h3>
            <div className="w-16 h-1 bg-[#5943F7] mx-auto mb-4"></div>
            <p className="text-2xl leading-relaxed font-bold">
              International Conference on Computing, Networking, & DataScience
<br />
              Chennai
            </p>
          </div>

          {/* When Section */}
          <div>
            <CalendarDays className="mx-auto text-[#5943F7] w-8 h-8 mb-2" />
            <h3 className="text-4xl font-bold mb-1">When?</h3>
            <div className="w-16 h-1 bg-[#5943F7] mx-auto mb-4"></div>
            <p className="text-xl">
              15<sup>rd</sup> - 17<sup>th</sup> August, 2025
            </p>
          </div>
        </div>

        {/* Register Button */}
        <div className="text-center mt-8">
          <button
            onClick={handleScrollToSubmission}
            className="bg-[#5943F7] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#4633c9] transition cursor-pointer"
          >
            Register here
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;