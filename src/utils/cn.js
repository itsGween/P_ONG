// utils/cn.js
import clsx from "clsx";  // Assurez-vous que clsx est correctement importé
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
