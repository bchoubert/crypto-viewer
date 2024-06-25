import Colors from "@/assets/Colors";

export const lightenColor = (input: string, magnitude: number) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(input.toLowerCase());

  if (!result) {
    return Colors.lightGray;
  }

  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);

  return `rgba(${r}, ${g}, ${b}, ${magnitude})`;
};