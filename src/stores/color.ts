import { atom } from "nanostores";

export const color = atom("black");

export const randomiseColor = () => {
  const getRandomColour = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 100);
    const lightness = Math.floor(Math.random() * 100);
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  color.set(getRandomColour());
};
