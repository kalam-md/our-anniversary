import React, { useState, useEffect } from 'react';
import { Heart, MapPin, Gift, Calendar, Camera, Sparkles, Clock, Briefcase, HeartHandshake, GraduationCap, PartyPopper } from 'lucide-react';

// Hero Section Component
const HeroSection = () => {
  // Gambar asli Anda
  const originalPhotos = [
    { id: 1, src: '/img/sample1.jpeg', alt: 'Couple photo 1' },
    { id: 2, src: '/img/sample2.jpeg', alt: 'Couple photo 2' },
    { id: 3, src: '/img/sample3.jpeg', alt: 'Couple photo 3' },
    { id: 4, src: '/img/sample5.jpeg', alt: 'Couple photo 5' },
    { id: 5, src: '/img/sample6.jpeg', alt: 'Couple photo 6' },
    { id: 6, src: '/img/sample7.jpeg', alt: 'Couple photo 7' },
    { id: 7, src: '/img/sample8.jpeg', alt: 'Couple photo 8' },
    { id: 8, src: '/img/sample9.jpeg', alt: 'Couple photo 9' },
    { id: 9, src: '/img/sample13.jpeg', alt: 'Couple photo 13' },
    { id: 10, src: '/img/sample14.jpeg', alt: 'Couple photo 14' },
    { id: 11, src: '/img/sample16.jpeg', alt: 'Couple photo 16' },
    { id: 12, src: '/img/sample17.jpeg', alt: 'Couple photo 17' },
    { id: 13, src: '/img/sample19.jpeg', alt: 'Couple photo 19' },
    { id: 14, src: '/img/sample20.jpeg', alt: 'Couple photo 20' },
  ];

  // Duplikat gambar untuk seamless loop
  const photos = [...originalPhotos, ...originalPhotos];
  const photosReverse = [...originalPhotos.slice().reverse(), ...originalPhotos.slice().reverse()];

  // Hitung durasi animasi berdasarkan jumlah gambar (dinamis)
  const animationDuration = originalPhotos.length * 8; // 8 detik per gambar

  return (
    <div className="pt-12 min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-100 flex flex-col items-center justify-center overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-12 z-20 relative px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-rose-700 mb-4" style={{fontFamily: 'cursive'}}>
          Happy 6th Anniversary
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-rose-600" style={{fontFamily: 'serif'}}>
          Six years of love, laughter, and beautiful memories
        </p>
      </div>

      {/* Moving Photos Container */}
      <div className="w-full flex flex-col gap-8">
        
        {/* Top Row - Moving Right to Left */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 animate-marquee-rtl"
            style={{
              width: `${(280 + 24) * originalPhotos.length * 2}px`, // 280px width + 24px gap
              animationDuration: `${animationDuration}s`
            }}
          >
            {photos.map((photo, index) => (
              <div
                key={`top-${photo.id}-${index}`}
                className="flex-shrink-0 w-70 h-80 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-xl shadow-xl group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 rounded-xl flex items-center justify-center';
                    fallbackDiv.innerHTML = `
                      <div class="text-center text-rose-700">
                        <div class="text-5xl mb-3">💕</div>
                        <div class="text-lg font-semibold">Memory ${photo.id}</div>
                        <div class="text-sm opacity-75">Beautiful moments</div>
                      </div>
                    `;
                    e.target.parentNode.replaceChild(fallbackDiv, e.target);
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Moving Left to Right */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 animate-marquee-ltr"
            style={{
              width: `${(280 + 24) * originalPhotos.length * 2}px`,
              animationDuration: `${animationDuration + 5}s` // Sedikit berbeda untuk variasi
            }}
          >
            {photosReverse.map((photo, index) => (
              <div
                key={`bottom-${photo.id}-${index}`}
                className="flex-shrink-0 w-70 h-80 group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover rounded-xl shadow-xl group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300"
                  onError={(e) => {
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'w-full h-full bg-gradient-to-br from-rose-200 to-pink-300 rounded-xl flex items-center justify-center';
                    fallbackDiv.innerHTML = `
                      <div class="text-center text-rose-700">
                        <div class="text-5xl mb-3">💕</div>
                        <div class="text-lg font-semibold">Memory ${photo.id}</div>
                        <div class="text-sm opacity-75">Beautiful moments</div>
                      </div>
                    `;
                    e.target.parentNode.replaceChild(fallbackDiv, e.target);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-pink-100 via-pink-100/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-pink-100 via-pink-100/80 to-transparent z-10 pointer-events-none"></div>

      {/* Dynamic CSS */}
      <style jsx>{`
        .w-70 {
          width: 280px;
        }
        
        .h-80 {
          height: 320px;
        }

        @keyframes marquee-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-${(280 + 24) * originalPhotos.length}px);
          }
        }

        @keyframes marquee-ltr {
          0% {
            transform: translateX(-${(280 + 24) * originalPhotos.length}px);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-rtl {
          animation: marquee-rtl var(--animation-duration, ${animationDuration}s) linear infinite;
        }

        .animate-marquee-ltr {
          animation: marquee-ltr var(--animation-duration, ${animationDuration + 5}s) linear infinite;
        }

        /* Pause on hover */
        .animate-marquee-rtl:hover,
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// Timeline Component
const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2019",
      title: "First Time Loving Each Other",
      description: "The day our love story began ✨",
      icon: Heart,
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2020",
      title: "Through the Storm",
      description: "We faced challenges but learned to fix things and grew stronger together ❤️",
      icon: Sparkles,
      color: "from-orange-400 to-orange-600"
    },
    {
      year: "2021",
      title: "Ups and Downs",
      description: "Started our internships, faced ups and downs, and pushed through a tough year 💪",
      icon: Briefcase,
      color: "from-rose-400 to-rose-600"
    },
    {
      year: "2022",
      title: "Growing Stronger",
      description: "We became more solid, learned to respect each other, and improved ourselves ✨",
      icon: HeartHandshake,
      color: "from-pink-400 to-pink-600"
    },
    {
      year: "2023",
      title: "Side by Side",
      description: "Fought for our education together and supported each other every step of the way 📚",
      icon: GraduationCap,
      color: "from-orange-400 to-pink-500"
    },
    {
      year: "2024",
      title: "Graduation Year",
      description: "Finished college together, sharing countless moments of joy and struggle 🎓",
      icon: PartyPopper,
      color: "from-pink-500 to-orange-500"
    },
    {
      year: "2025",
      title: "A New Chapter",
      description: "Started working together and learned to value our time together even more 🌅",
      icon: Briefcase,
      color: "from-orange-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4" style={{fontFamily: 'Brush Script MT, cursive'}}>
            Our Beautiful Journey
          </h2>
          <p className="text-xl text-gray-600">Six years of love, growth, and endless memories</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-300 to-orange-300 h-full rounded-full"></div>

          {timelineEvents.map((event, index) => (
            <div key={index} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              {/* Timeline Node */}
              <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 items-center justify-center shadow-lg z-10">
                <event.icon className="text-white" size={24} />
              </div>

              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-pink-100">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.color} text-white font-bold text-lg mb-4`}>
                    {event.year}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Message Section Component  
const MessageSection = () => {
  const [daysUntil, setDaysUntil] = useState(0);
  const [timeUnits, setTimeUnits] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  
  // Calculate days until next anniversary (replace with your actual anniversary date)
  useEffect(() => {
    const calculateTime = () => {
      const today = new Date();
      // Assuming anniversary is June 15th - adjust this date
      let nextAnniversary = new Date(today.getFullYear(), 8, 17); // June is month 5 (0-indexed)
      
      // If we've already passed this year's anniversary, use next year
      if (today > nextAnniversary) {
        nextAnniversary.setFullYear(today.getFullYear() + 1);
      }
      
      const diffTime = nextAnniversary - today;
      const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      
      setDaysUntil(days);
      setTimeUnits({ days, hours, minutes, seconds });
    };
    
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const loveMessages = [
    "Six years ago, my life changed forever when I met you.",
    "Every moment since then has been a beautiful adventure filled with love, laughter, and growth.",
    "Through all our ups and downs, we've built something truly special.",
    "Thank you for being my rock, my inspiration, and my best friend also my future.",
    "I look forward to creating many more memories with you in the years to come.",
    "Here's to us and our beautiful journey together."
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-pink-50 to-rose-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 w-16 h-16 bg-rose-300 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-10 w-20 h-20 bg-pink-300 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-rose-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-pink-400 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main message card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 md:p-12 border border-rose-200 relative overflow-hidden">
            {/* Card decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-pink-100 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-white animate-pulse" />
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-rose-700 mb-4" style={{fontFamily: 'cursive'}}>
                  To My Love
                </h2>
                <div className="flex items-center justify-center gap-2 text-rose-600">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-lg md:text-xl" style={{fontFamily: 'serif'}}>A message from my heart</span>
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>
              
              {/* Love messages */}
              <div className="space-y-6 mb-8 md:mb-12">
                {loveMessages.map((message, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mt-2 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300" style={{fontFamily: 'serif'}}>
                      {message}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Countdown section */}
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-rose-200 mb-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Calendar className="w-6 h-6 text-rose-600" />
                    <h3 className="text-2xl md:text-3xl font-bold text-rose-700" style={{fontFamily: 'cursive'}}>
                      Counting Every Moment
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6" style={{fontFamily: 'serif'}}>Until our next anniversary celebration</p>
                </div>
                
                {/* Countdown display */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { label: 'Days', value: timeUnits.days, icon: Calendar },
                    { label: 'Hours', value: timeUnits.hours, icon: Clock },
                    { label: 'Minutes', value: timeUnits.minutes, icon: Clock },
                    { label: 'Seconds', value: timeUnits.seconds, icon: Clock }
                  ].map(({ label, value, icon: Icon }, index) => (
                    <div key={label} className="text-center">
                      <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <Icon className="w-6 h-6 text-rose-500 mx-auto mb-2" />
                        <div className="text-2xl md:text-4xl font-bold text-rose-600 mb-1 tabular-nums">
                          {value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                          {label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Simple days display for mobile */}
                <div className="mt-6 md:hidden text-center">
                  <p className="text-gray-600 mb-2">That's</p>
                  <div className="text-4xl font-bold text-rose-600">{daysUntil}</div>
                  <p className="text-gray-600">days to go!</p>
                </div>
              </div>
              
              {/* Signature */}
              <div className="text-center">
                <div className="inline-block">
                  <div className="bg-gradient-to-r from-rose-400 to-pink-500 text-transparent bg-clip-text">
                    <p className="text-2xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-rose-400 to-pink-500 bg-clip-text text-transparent" style={{fontFamily: 'cursive'}}>
                      Forever Yours
                    </p>
                  </div>
                  <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mx-auto opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom floating hearts */}
          <div className="flex justify-center items-center mt-8 md:mt-12 gap-4">
            {[...Array(5)].map((_, i) => (
              <Heart 
                key={i} 
                className="w-6 h-6 text-rose-400 animate-pulse opacity-60 hover:opacity-100 transition-opacity duration-300" 
                style={{animationDelay: `${i * 0.2}s`}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Creative Section Component
const CreativeSection = () => {
  const loveQuotes = [
    {
      quote: "You are my today and all of my tomorrows, the reason I wake with a smile and sleep with peace in my heart.",
      author: "Leo Christopher"
    },
    {
      quote: "I am yours. Don’t give myself back to me. For wherever I go, whatever I do, I want it to be with you.",
      author: "Rumi"
    },
    {
      quote: "Whatever our souls are made of, his and mine are the same — and together they have found a home in each other.",
      author: "Emily Brontë"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 via-rose-100 to-orange-100">
      <div className="container mx-auto px-4">
        
        {/* Love Quotes */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-12" style={{fontFamily: 'cursive'}}>
            Words of Love
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {loveQuotes.map((item, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <blockquote className="text-lg text-gray-700 italic mb-4 leading-relaxed">
                  "{item.quote}"
                </blockquote>
                <cite className="text-pink-600 font-semibold">— {item.author}</cite>
              </div>
            ))}
          </div>
        </div>

        {/* Memory Gallery Preview */}
        <div className="text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-12" style={{fontFamily: 'cursive'}}>
            More Beautiful Memories
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "/img/sample6.jpeg",
              "/img/sample20.jpeg",
              "/img/sample13.jpeg",
              "/img/sample14.jpeg"
            ].map((photo, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <img src={photo} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-rose-500 to-orange-500 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Heart className="mx-auto mb-4 animate-pulse" size={48} />
          <h3 className="text-3xl font-bold mb-2" style={{fontFamily: 'Brush Script MT, cursive'}}>
            Forever & Always
          </h3>
          <p className="text-xl opacity-90">
            Here's to many more years of love, laughter, and adventures together
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <p className="text-lg opacity-80">
            Made with 💕 for our 6th Anniversary by Kalam Mahardhika
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  useEffect(() => {
    const audio = new Audio('/song/lagu.mp3');
    audio.loop = true;
    // Coba langsung play
    audio.play().catch(() => {
      // Kalau gagal (autoplay diblokir), tunggu klik pertama
      const playOnClick = () => {
        audio.play();
        document.removeEventListener('click', playOnClick);
      };
      document.addEventListener('click', playOnClick);
    });
  }, []);
  
  return (
    <div className="min-h-screen relative">
      <audio autoPlay loop>
        <source src="/song/lagu.mp3" type="audio/mpeg" />
        Browser kamu tidak mendukung audio tag.
      </audio>
      <HeroSection />
      <MessageSection />
      <TimelineSection />
      <CreativeSection />
      <Footer />
    </div>
  );
};

export default App;