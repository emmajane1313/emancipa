import { IMAGEN_SET_TEMPORADA_1, IMAGEN_SET_TEMPORADA_2 } from "./constantes";
import { SeasonConfig } from "../components/Common/types/common.types";

export const SEASONS_CONFIG: SeasonConfig = {
  currentSeason: "season-1",
  seasons: [
    {
      id: "season-1",
      name: "Temporada 1",
      slug: "season-1",
      description: "Primera colección",
      imageSet: IMAGEN_SET_TEMPORADA_1,
      status: "active",
    },
    {
      id: "season-2",
      name: "Temporada 2",
      slug: "season-2",
      description: "Próximamente",
      imageSet: IMAGEN_SET_TEMPORADA_2,
      status: "upcoming",
    },
  ],
};

export const getActiveSeason = () => {
  return SEASONS_CONFIG.seasons.find(
    (s) => s.id === SEASONS_CONFIG.currentSeason
  );
};

export const getSeasonById = (id: string) => {
  return SEASONS_CONFIG.seasons.find((s) => s.id === id);
};

export const getAllSeasons = () => {
  return SEASONS_CONFIG.seasons;
};