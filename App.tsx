import React, { useState } from 'react';
import { Calendar, Map, ChevronRight, Flower, ArrowUp } from 'lucide-react';
import { APP_TITLE, APP_SUBTITLE, SCHEDULE_DATA, ATTRACTIONS_DATA } from './constants';
import { AttractionCard } from './components/AttractionCard';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'attractions'>('schedule');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 pb-20">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-sakura-100 to-tea-100 pb-20 pt-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-sakura-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-tea-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-2 bg-white/50 backdrop-blur-sm rounded-full mb-6 ring-1 ring-sakura-200">
             <Flower className="w-5 h-5 text-sakura-500 mr-2" />
             <span className="text-sakura-700 text-sm font-semibold tracking-wide">SPRING TOUR 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            {APP_TITLE}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {APP_SUBTITLE}
          </p>
          
          {/* Navigation Tabs */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'schedule' 
                ? 'bg-gray-900 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Itinerary
            </button>
            <button
              onClick={() => setActiveTab('attractions')}
              className={`flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'attractions' 
                ? 'bg-gray-900 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm'
              }`}
            >
              <Map className="w-4 h-4 mr-2" />
              Attractions
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 -mt-10 relative z-20">
        
        {/* Schedule View */}
        {activeTab === 'schedule' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            {SCHEDULE_DATA.map((day, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-sakura-400 to-tea-400"></div>
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Date Column */}
                  <div className="md:w-48 flex-shrink-0">
                     <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md mb-2">
                        DAY {index + 1}
                     </div>
                     <h2 className="text-2xl font-bold text-gray-800">{day.date}</h2>
                     <p className="text-gray-500 font-medium">{day.weekday}</p>
                  </div>

                  {/* Activities Column */}
                  <div className="flex-1 space-y-6">
                    {day.items.map((item, i) => (
                      <div key={i} className="flex gap-4 relative">
                        {/* Timeline Connector */}
                        {i !== day.items.length - 1 && (
                            <div className="absolute left-[2.25rem] top-8 bottom-[-1.5rem] w-px bg-gray-200"></div>
                        )}
                        
                        <div className="flex-shrink-0 w-16 pt-1 text-right">
                           <span className="inline-block px-2 py-1 bg-tea-50 text-tea-700 text-xs font-bold rounded">
                             {item.time}
                           </span>
                        </div>
                        <div className="flex-1 pb-2">
                           <p className="text-gray-700 leading-relaxed text-lg border-l-2 border-gray-100 pl-4 py-1 hover:border-tea-300 transition-colors">
                             {item.activity}
                           </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Attractions View */}
        {activeTab === 'attractions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
            {ATTRACTIONS_DATA.map((attraction) => (
              <AttractionCard key={attraction.id} data={attraction} />
            ))}
          </div>
        )}

      </main>

      {/* Footer / Scroll to Top */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={scrollToTop}
          className="p-3 bg-white text-gray-800 rounded-full shadow-lg border border-gray-100 hover:bg-gray-50 hover:text-sakura-500 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sakura-400"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
      
      <footer className="mt-24 py-12 bg-white border-t border-gray-100">
         <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p className="mb-2">© 2026 Qingliu Spring Tour. Digital Guide.</p>
            <p>Designed with AI & React.</p>
         </div>
      </footer>
    </div>
  );
};

export default App;