/* eslint-disable react/require-default-props */
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";

const spinnerVariants = cva("", {
  variants: {
    variant: { light: "text-white", dark: "text-gray14" },
    size: {
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-16 w-16",
      xl: "h-24 w-24",
    },
  },
  defaultVariants: {
    variant: "light",
    size: "sm",
  },
});

export type SpinnerProps = VariantProps<typeof spinnerVariants> & {
  className?: string;
};

export function Spinner({ variant, size, className }: SpinnerProps) {
  return (
    <svg
      className={cn(spinnerVariants({ variant, size, className }))}
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      xmlSpace="preserve"
    >
      <path
        fill="currentColor"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur=".45s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
