"use client";

import { Season } from "../types/common.types";
import { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

interface SeasonSelectorProps {
  seasons: Season[];
  selectedSeason: Season;
  onSeasonChange: (seasonId: string) => void;
  dict: any;
}

export const SeasonSelector = ({
  seasons,
  selectedSeason,
  onSeasonChange,
  dict,
}: SeasonSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex relative flex-col w-fit">
      <div
        className="relative w-fit h-fit p-2 border-4 border-black bg-morado flex flex-row items-center gap-3 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative w-fit h-fit flex font-arana text-white uppercase text-xs">
          {dict?.Home?.[selectedSeason.slug] || selectedSeason.name}
        </div>
        <div className="relative w-fit h-fit flex">
          {isOpen ? (
            <PiCaretUpBold size={10} color={"white"} />
          ) : (
            <PiCaretDownBold size={10} color={"white"} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full mt-1 left-0 w-full flex flex-col z-20">
          {seasons.map((season) => {
            const isLocked = season.status === "upcoming";
            const isActive = selectedSeason.id === season.id;

            return (
              <div
                key={season.id}
                className={`relative w-full h-fit p-2 border-4 border-black flex flex-col cursor-pointer ${
                  isLocked ? "bg-black/60" : "bg-morado"
                } ${isActive ? "opacity-50" : ""}`}
                onClick={() => {
                  if (!isLocked && !isActive) {
                    onSeasonChange(season.id);
                    setIsOpen(false);
                  }
                }}
              >
                <div className="relative w-fit h-fit flex font-arana text-white uppercase text-xs">
                  {dict?.Home?.[season.slug] || season.name}
                </div>
                {isLocked ? (
                  <div className="relative w-fit h-fit flex font-pixel text-white/60 text-[0.5rem]">
                    {dict?.Home?.["coming-soon"] || "Próximamente"}
                  </div>
                ) : (
                  season.imageSet.length > 0 && (
                    <div className="relative w-fit h-fit flex font-pixel text-white/60 text-[0.5rem]">
                      {season.imageSet.length} {dict?.Home?.["works"] || "obras"}
                    </div>
                  )
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};