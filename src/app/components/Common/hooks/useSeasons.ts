"use client";

import { useState } from "react";
import { Season } from "../types/common.types";
import { SEASONS_CONFIG } from "@/app/lib/seasons";

export const useSeasons = () => {
  const [selectedSeason, setSelectedSeason] = useState<Season>(
    SEASONS_CONFIG.seasons.find((s) => s.id === SEASONS_CONFIG.currentSeason)!
  );

  const changeSeason = (seasonId: string) => {
    const season = SEASONS_CONFIG.seasons.find((s) => s.id === seasonId);
    if (season) {
      setSelectedSeason(season);
    }
  };

  return {
    selectedSeason,
    allSeasons: SEASONS_CONFIG.seasons,
    changeSeason,
  };
};