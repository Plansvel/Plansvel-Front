import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isNil = (children: React.ReactNode) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0);
