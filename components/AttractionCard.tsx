import React, { useState } from 'react';
import { MapPin, Info, Star, ExternalLink, Loader2 } from 'lucide-react';
import { Attraction, AIResponse } from '../types';
import { fetchAttractionDetails } from '../services/geminiService';

interface AttractionCardProps {
  data: Attraction;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [aiData, setAiData] = useState<AIResponse | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleExplore = async () => {
    if (aiData) {
      setExpanded(!expanded);
      return;
    }
    
    setLoading(true);
    const result = await fetchAttractionDetails(data.title, data.location);
    setAiData(result);
    setLoading(false);
    setExpanded(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative h-48 sm:h-64 bg-gray-200">
        <img 
          src={data.imageUrl} 
          alt={data.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {data.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-sakura-600 text-xs font-bold rounded-full shadow-sm">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
            <div>
                 <h3 className="text-xl font-bold text-gray-800 leading-tight">{data.title}</h3>
                 {data.subtitle && <p className="text-sm text-tea-600 font-medium mt-1">{data.subtitle}</p>}
            </div>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span>{data.location}</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {data.description}
        </p>

        <div className="mb-6 bg-tea-50 p-4 rounded-xl border border-tea-100">
          <h4 className="text-xs font-bold text-tea-800 uppercase tracking-wider mb-2">Highlights</h4>
          <ul className="space-y-1">
            {data.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-tea-900">
                <span className="mr-2 text-tea-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
            {/* AI Integration Section */}
            {expanded && aiData && (
                <div className="mb-4 animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                        <div className="flex items-center mb-2">
                             <Star className="w-4 h-4 text-indigo-500 mr-2" fill="currentColor" />
                             <span className="text-xs font-bold text-indigo-800 uppercase">AI Insights</span>
                        </div>
                        <p className="text-sm text-gray-700 whitespace-pre-line mb-3">
                            {aiData.text}
                        </p>
                        
                        {/* Map Links */}
                        {aiData.groundingChunks.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {aiData.groundingChunks.map((chunk, i) => {
                                    if (chunk.maps?.uri) {
                                        return (
                                            <a 
                                                key={i} 
                                                href={chunk.maps.uri} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-3 py-1.5 bg-white text-indigo-600 text-xs font-medium rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-colors"
                                            >
                                                <MapPin className="w-3 h-3 mr-1.5" />
                                                View on Google Maps
                                            </a>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        )}
                    </div>
                </div>
            )}

            <button 
                onClick={handleExplore}
                disabled={loading}
                className="w-full py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center group"
            >
                {loading ? (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing Location...
                    </>
                ) : (
                    <>
                        <Info className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        {expanded ? 'Hide Insights' : 'Explore with AI & Maps'}
                    </>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};