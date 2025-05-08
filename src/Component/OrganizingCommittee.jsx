import React from "react";

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

export default function OrganizingCommittee() {
  return (
    <section className="py-25 bg-gradient-to-b from-indigo-100 to-purple-200" id="organizingCommittee">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">Technical Committee</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {committeeMembers.map((member, index) => (
            <div key={index} className="w-full h-95 rounded-xl shadow-lg bg-white p-6 flex flex-col items-center justify-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-50 h-50 rounded-full border-4 border-indigo-500"
              />
              <h3 className="text-3xl md:text-xl xl:text-3xl font-bold text-indigo-900 mt-4">{member.name}</h3>
              <p className="text-xl md:text-base xl:text-xl text-indigo-700">{member.role}</p>
              <p className="text-md md:text-sm xl:text-base text-purple-600 mb-2">{member.Location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
