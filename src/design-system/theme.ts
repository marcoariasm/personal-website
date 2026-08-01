export const theme = {
  colors: {
    background: "#040B17",
    backgroundSoft: "#081424",
    surface: "#0C192A",
    surfaceSoft: "#10233A",  //check this
    surfaceHover: "#10233A",

    text: "#F7F4EB",
    textMuted: "#9AA8BB",

    primary: "#43C8FF",
    primaryMain: "#FFF", // check this
    primaryContrast: "#040B17", // check this
    primaryStrong: "#3283FF",
    accent: "#FF8A24",
    beige: "#D5C581",
    dark: "#0B2C53",

    border: "rgba(112, 177, 225, 0.18)",
    pillBgColor: "#ffffff12",
  },

  spacing: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    xxl: "3rem",
    section: "6rem",
  },

  radius: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    pill: "999px",
  },

  layout: {
    contentMaxWidth: "75rem",
  },

  zIndex: {
    header: 100,
  },
} as const;

export type AppTheme = typeof theme;