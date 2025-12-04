import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function tw(...inputs) {
  return twMerge(clsx(...inputs));
}
