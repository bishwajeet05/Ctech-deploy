export type Theme = {
  id: string;
  name: string;
  class: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
  };
  properties: {
    borderRadius: string;
    fontFamily: string;
  };
};

export const themes: Theme[] = [
  {
    id: "modern-light",
    name: "Modern Light",
    class: "theme-modern-light",
    colors: {
      primary: "#0070F3",
      secondary: "#7928CA",
      accent: "#FF0080",
      background: "#FFFFFF",
      foreground: "#000000",
      muted: "#F5F5F5",
      border: "#E2E8F0",
    },
    properties: {
      borderRadius: "0.5rem",
      fontFamily: "Inter, sans-serif",
    },
  },
  {
    id: "elegant-dark",
    name: "Elegant Dark",
    class: "theme-elegant-dark",
    colors: {
      primary: "#6366F1",
      secondary: "#8B5CF6",
      accent: "#EC4899",
      background: "#0F172A",
      foreground: "#F8FAFC",
      muted: "#1E293B",
      border: "#334155",
    },
    properties: {
      borderRadius: "0.75rem",
      fontFamily: "Plus Jakarta Sans, sans-serif",
    },
  },
  {
    id: "nature-light",
    name: "Nature Light",
    class: "theme-nature-light",
    colors: {
      primary: "#059669",
      secondary: "#047857",
      accent: "#0EA5E9",
      background: "#F0FDF4",
      foreground: "#064E3B",
      muted: "#DCFCE7",
      border: "#BBF7D0",
    },
    properties: {
      borderRadius: "1rem",
      fontFamily: "Outfit, sans-serif",
    },
  },
  {
    id: "royal-dark",
    name: "Royal Dark",
    class: "theme-royal-dark",
    colors: {
      primary: "#9333EA",
      secondary: "#7C3AED",
      accent: "#F472B6",
      background: "#18181B",
      foreground: "#FAFAFA",
      muted: "#27272A",
      border: "#3F3F46",
    },
    properties: {
      borderRadius: "0.375rem",
      fontFamily: "Cal Sans, sans-serif",
    },
  },
  {
    id: "sunset-light",
    name: "Sunset Light",
    class: "theme-sunset-light",
    colors: {
      primary: "#F97316",
      secondary: "#EA580C",
      accent: "#DB2777",
      background: "#FFF7ED",
      foreground: "#431407",
      muted: "#FFEDD5",
      border: "#FED7AA",
    },
    properties: {
      borderRadius: "0.625rem",
      fontFamily: "Sora, sans-serif",
    },
  },
  {
    id: "ocean-dark",
    name: "Ocean Dark",
    class: "theme-ocean-dark",
    colors: {
      primary: "#06B6D4",
      secondary: "#0EA5E9",
      accent: "#3B82F6",
      background: "#0C4A6E",
      foreground: "#F0F9FF",
      muted: "#0E7490",
      border: "#0369A1",
    },
    properties: {
      borderRadius: "0.5rem",
      fontFamily: "Albert Sans, sans-serif",
    },
  },
  {
    id: "minimal-light",
    name: "Minimal Light",
    class: "theme-minimal-light",
    colors: {
      primary: "#18181B",
      secondary: "#27272A",
      accent: "#71717A",
      background: "#FAFAFA",
      foreground: "#18181B",
      muted: "#F4F4F5",
      border: "#E4E4E7",
    },
    properties: {
      borderRadius: "0.25rem",
      fontFamily: "IBM Plex Sans, sans-serif",
    },
  },
  {
    id: "neon-dark",
    name: "Neon Dark",
    class: "theme-neon-dark",
    colors: {
      primary: "#10B981",
      secondary: "#6EE7B7",
      accent: "#F472B6",
      background: "#011627",
      foreground: "#ECFDF5",
      muted: "#042F2E",
      border: "#064E3B",
    },
    properties: {
      borderRadius: "0.875rem",
      fontFamily: "Space Grotesk, sans-serif",
    },
  },
]; 