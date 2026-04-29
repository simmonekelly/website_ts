export const theme = {
  colors: {
    background: "#faf6f1",
    backgroundAlt: "#f5ede4",
    surface: "#ffffff",
    primary: "#c05621",
    primaryHover: "#9c4221",
    focusRing: "#d4833b",
    secondary: "#c4a882",
    primaryText: "#2d2d2d",
    mutedText: "#6b5b4e",
    border: "#e8ddd3",
    tagBg: "#efe4d8",
  },
  breakpoints: {
    tablet: 768,
    desktop: 1280,
  },
  fonts: {
    display: '"Luckiest Guy", cursive',
    body: '"Manrope", sans-serif',
  },
} as const;

export type Theme = typeof theme;
