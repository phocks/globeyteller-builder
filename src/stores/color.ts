// import { atom } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

export const color = persistentAtom<string>("color", "blue");

export const randomiseColor = () => {
  const getRandomColour = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  color.set(getRandomColour());
};
