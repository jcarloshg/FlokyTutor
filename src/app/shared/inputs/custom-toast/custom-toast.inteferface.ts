export interface CustomToast {
  typeToast: "error" | "warning" | "success",
  message: string;
  seconds?: number;
}