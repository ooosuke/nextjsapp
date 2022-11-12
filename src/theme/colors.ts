export type ColorType =
  | "secondary"
  | "success"
  | "light"
  | "primary"
  | "danger"
  | "warning"
  | "info"
  | "default";

export const colors = (color: ColorType) => {
  switch (color) {
    case "primary":
      return "#1976d2";
    case "secondary":
      return "#6C757D";
    case "success":
      return "#2e7d32";
    case "danger":
      return "#d32f2f";
    case "warning":
      return "#ff9800";
    case "info":
      return "#0288d1";
    case "light":
      return "#F8F9FA";
    default:
      return "#212529";
  }
};
