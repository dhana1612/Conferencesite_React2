import React from 'react'
import OrganizingCommittee from './OrganizingCommittee';

export default function About() {
  return (
    <>
    <section className="py-15 pt-20 bg-gradient-to-b from-indigo-50 to-purple-50 md:py-25" id="about">
      <div className="container mx-auto px-2 ps-0 md:px-4 lg:px-8">
        <div className="max-w-9xl mx-auto bg-gradient-to-r from-indigo-100/50 to-purple-100/50 p-4 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1400&q=80" 
                alt="Conference Hall" 
                className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Text Section */}
            <div>
                <h2 className="text-center text-3xl md:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">
                About the Conference
                </h2>
              <p className="text-indigo-900 mb-6 text-xl md:text-2xl text-justify leading-relaxed">
                The International Conference on Computing, Networking, and Data Science (ICCNDS) 
                brings together leading researchers, engineers, and scientists to exchange and share 
                their experiences and research results in all aspects of Computing, Networking, 
                and Data Science.
              </p>
              <p className="text-indigo-900 text-xl md:text-2xl text-justify leading-relaxed">
                This premier conference provides an international forum for the presentation 
                and discussion of the latest developments, innovations, and research findings 
                in the fields of computing technologies, networking solutions, and data science 
                applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <OrganizingCommittee/>

    </>
  );
}


