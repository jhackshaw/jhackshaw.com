const common = {
  "text-brand": "#f6c90e"
};

export const themes = {
  light: {
    ...common,
    "background-main": "#fafafa",
    "background-card": "#ffffff",
    "text-main": "#000",
    "text-title": "#303f9f",
    "text-light": "#424242",
    "text-lighter": "#757575",
    "text-lightest": "#9e9e9e"
  },
  dark: {
    ...common,
    "background-main": "#303841",
    "background-card": "#3a4750",
    "text-main": "#fafafa",
    "text-title": "#f6c90e",
    "text-light": "rgba(255, 255, 255, 0.7)",
    "text-lighter": "rgba(255, 255, 255, 0.6)",
    "text-lightest": "rgba(255, 255, 255, 0.4)"
  }
};
