import { GoogleGenAI } from "@google/genai";
import { AIResponse, GroundingChunk } from '../types';

export const fetchAttractionDetails = async (attractionName: string, location: string): Promise<AIResponse> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key missing");
      return {
        text: "Please configure your API_KEY to see live map data and reviews.",
        groundingChunks: []
      };
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We use gemini-2.5-flash for speed and map capabilities
    const modelId = "gemini-2.5-flash";

    const prompt = `
      I am a tourist visiting ${location}. 
      Tell me brief interesting facts about "${attractionName}" that are not obvious. 
      Also, what is the best time to visit and is there an entry fee?
      Please use Google Maps to find the location and reviews.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        tools: [{ googleMaps: {} }],
        // responseMimeType is not allowed with googleMaps tool
      },
    });

    const text = response.text || "No details found.";
    
    // Extract grounding chunks if available
    const chunks: GroundingChunk[] = [];
    const candidates = response.candidates;
    
    if (candidates && candidates[0]?.groundingMetadata?.groundingChunks) {
      candidates[0].groundingMetadata.groundingChunks.forEach((chunk: any) => {
         // Transform loose type to our interface
         if (chunk.web || chunk.maps) {
           chunks.push(chunk);
         }
      });
    }

    return {
      text,
      groundingChunks: chunks
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      text: "Sorry, I couldn't fetch live details at this moment. Please check your internet connection or API key.",
      groundingChunks: []
    };
  }
};