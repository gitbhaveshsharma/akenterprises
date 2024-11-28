// theme/ThemeProvider.tsx
import React from "react";

const theme = {
  colors: {
    primary: "#2f27ce",
    secondary: "#dedcff",
    accent: "#433bff",
    text: "#050315",
  },
  font: {
    family: "Arial, Helvetica, sans-serif",
    size: "16px",
  },
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary", theme.colors.primary);
    root.style.setProperty("--color-secondary", theme.colors.secondary);
    root.style.setProperty("--color-accent", theme.colors.accent);
    root.style.setProperty("--color-text", theme.colors.text);
    root.style.setProperty("--font-family", theme.font.family);
    root.style.setProperty("--font-size", theme.font.size);
  }, []);

  return <>{children}</>;
};
