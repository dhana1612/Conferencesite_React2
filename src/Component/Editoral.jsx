import React from 'react'

const Editoral = () => {
    const committeeMembers = [
        {
          name: "Person1",
          role: "Position",
          Location: "Chennai, India",
          image: "/images/avator4.png",
        },
        {
          name: "Person1",
          role: "Position",
          Location: "Chennai, India",
          image: "/images/avator3.png",
        },
        {
          name: "Person1",
          role: "Position",
          Location: "Chennai, India",
          image: "/images/avator2.png",
        },
        {
          name: "Person1",
          role: "Position",
          Location: "Chennai, India",
          image: "/images/avator1.png",
        },
      ];
  return (
    <section className="py-20 pt-25 md:py-20 bg-gradient-to-b from-purple-50 to-indigo-50 relative" id="Editorial">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264337-e8a93017fe92?auto=format&fit=crop&w=1920')] opacity-5 bg-cover bg-center"></div>
      <div className="container mx-auto  relative z-10">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">
          Editorial Board
        </h2>
        <div className="max-w-9xl mx-auto px-4 md:px-8">
          <p className="text-indigo-800 mb-10 text-justify text-xl md:text-center md:text-2xl">
          Committee Members
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {committeeMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-indigo-50 to-purple-50 py-15 px-25 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-indigo-100/50 max-w-lg mx-auto text-center"
              >
                <h3 className="text-3xl md:text-xl xl:text-3xl font-bold text-indigo-900 mt-4">{member.name}</h3>
                <p className="text-xl md:text-base xl:text-xl text-indigo-700">{member.role}</p>
                <p className="text-md md:text-sm xl:text-base text-purple-600 mb-2">{member.Location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Editoral