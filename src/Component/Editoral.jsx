import React from 'react';

const Editoral = () => {
  const committeeMembers = [
    {
      name: "Person1",
      role: "Position",
      Location: "Chennai, India",
      image: "/images/avator4.webp",
    },
    {
      name: "Person1",
      role: "Position",
      Location: "Chennai, India",
      image: "/images/avator3.webp",
    },
    {
      name: "Person1",
      role: "Position",
      Location: "Chennai, India",
      image: "/images/avator2.webp",
    },
    {
      name: "Person1",
      role: "Position",
      Location: "Chennai, India",
      image: "/images/avator1.webp",
    },
    {
      name: "Person1",
      role: "Position",
      Location: "Chennai, India",
      image: "/images/avator2.webp",
    },
    {
      name: "Person1",
      role: "Position",
      Location: "Chennai, India",
      image: "/images/avator1.webp",
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-purple-50 to-indigo-50 relative" id="Editorial">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=1920')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto relative z-10 px-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-10 pt-7 text-indigo-900">
          Editorial Board
        </h1>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 py-10 px-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50 text-center"
            >
              {/* You can include <img src={member.image} ...> here if needed */}
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mt-4">{member.name}</h3>
              <p className="text-base sm:text-lg text-indigo-700">{member.role}</p>
              <p className="text-sm sm:text-base text-purple-600">{member.Location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Editoral;
