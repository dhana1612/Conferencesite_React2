import React from 'react'

function Scope_of_Conference() {
  return (
    <>
    <section className="py-15 pt-20 bg-gradient-to-b from-indigo-50 to-purple-50 md:py-25" id="scope">
      <div className="container mx-auto px-2 ps-0 md:px-4 lg:px-8">
        <div className="max-w-9xl mx-auto  p-4 md:p-8 rounded-2xl"> 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
            {/* Text Section */}
            <div>
                <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold px-2 md:pe-10 mb-12 text-indigo-900">
                Scope the Conference
                </h2>
              <p className="text-indigo-900 mb-6 text-xl md:text-2xl text-justify leading-relaxed">
               The International Conference on Computing, Networking, and Data Science aims to bring together leading academic scientists, researchers, and industry professionals to exchange and share their knowledge, experiences, and research outcomes in all aspects of modern computing technologies. This conference provides a premier interdisciplinary platform for discussing innovations, trends, and challenges in the fields of:
              </p>
            </div>


              {/* Image Section */}
            {/*shadow-lg backdrop-blur-sm */}
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="\images\scope.png" 
                alt="Conference Hall" 
                className="w-full h-auto object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Scope_of_Conference