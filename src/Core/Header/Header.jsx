import { Calendar, MapPin } from "lucide-react";
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

export default function Header() {

  return (
    <header className="gradient-animate bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-gray-100 py-60 relative overflow-hidden" >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920')] opacity-20 bg-cover bg-center"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
            International Conference on Computing, <br></br>Networking, and Data Science
          </h1>
        </div>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
          <div className="flex items-center gap-3 bg-indigo-900/30 backdrop-blur-sm px-6 py-3 rounded-full transition-transform hover:scale-105">
            <Calendar className="w-5 h-5 text-purple-300" />
            <span>June 15-17, 2024</span>
          </div>
          <div className="flex items-center gap-3 bg-indigo-900/30 backdrop-blur-sm px-6 py-3 rounded-full transition-transform hover:scale-105">
            <MapPin className="w-5 h-5 text-purple-300" />
            <span>Chennai, India</span>
          </div>
        </div>
      </div>
    </header>
  )
}
