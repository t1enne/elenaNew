import { parseIntoMap } from "./utils";
const lovePics = import.meta.glob("../../assets/img/love-story/*/*");
const soloPics = import.meta.glob("../../assets/img/solo/*/*");
const weddingPics = import.meta.glob("../../assets/img/wedding/*/*");

export const categories = {
  love: parseIntoMap(lovePics),
  solo: parseIntoMap(soloPics),
  wedding: parseIntoMap(weddingPics),
} as const;
