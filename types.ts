export interface ItineraryItem {
  time: string;
  activity: string;
}

export interface DailySchedule {
  date: string;
  weekday: string;
  fullDate: string; // e.g. "2026-02-25"
  items: ItineraryItem[];
}

export interface Attraction {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  location: string;
  imageUrl: string;
  tags: string[];
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
    placeAnswerSources?: {
        reviewSnippets?: {
            snippet: string;
        }[]
    }
  };
}

export interface AIResponse {
  text: string;
  groundingChunks: GroundingChunk[];
}