export interface Season {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageSet: {
    imagen: string;
    title: string;
    anchura: number;
    altura: number;
    alt: string;
    socials?: { type: string; link: string }[];
  }[];
  status: "active" | "upcoming" | "archived";
  releaseDate?: string;
  thumbnail?: string;
}

export interface SeasonConfig {
  currentSeason: string;
  seasons: Season[];
}