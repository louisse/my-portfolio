import { useEffect } from "react";

export const useNeverGonnaGiveYouUp = () => {
  useEffect(() => {
    const today = new Date();
    if (today.getMonth() === 3 && today.getDate() === 1) {
      window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    }
  });
};
