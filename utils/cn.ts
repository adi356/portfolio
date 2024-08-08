import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function to make sure Acertinty UI components work with tailwind.css
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
