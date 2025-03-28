import React from "react";

const committeeMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Publications Chair",
    university: "Harvard University",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Jane Smith",
    role: "Technical Program",
    university: "Stanford University",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Dr. Emily Williams",
    role: "Publications Chair",
    university: "MIT",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Dr. Michael Chen",
    role: "Publications Chair",
    university: "UC Berkeley",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function OrganizingCommittee() {
  return (
    <section className="py-16 bg-gradient-to-b from-indigo-100 to-purple-200" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">Organizing Committee</h2>
        
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
              <p className="text-md md:text-sm xl:text-base text-purple-600 mb-2">{member.university}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
