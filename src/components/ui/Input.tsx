/* eslint-disable react/jsx-props-no-spreading */

import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Icon } from "./Icon";

import type { VariantProps } from "class-variance-authority";
import type { IconType } from "react-icons";

const inputContainerVariants = cva(
  "group relative inline-flex overflow-hidden text-gray14 rounded-sm border border-input",
  {
    variants: {
      variant: {},
      size: { sm: "h-10", md: "h-12", lg: "h-14", xl: "h-16" },
    },
    defaultVariants: { size: "sm" },
  },
);

const inputVariants = cva(
  "text-inherit w-full outline-0 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {},
      size: {
        sm: "px-3 py-2 text-sm",
        md: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
        xl: "px-6 py-5 text-xl",
      },
    },
    defaultVariants: { size: "sm" },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  icon?: IconType;
  iconPosition?: "left" | "right";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, icon, iconPosition, ...props }, ref) => (
    <div className={cn(inputContainerVariants({ variant, size, className }))}>
      {icon && iconPosition === "left" && (
        <Icon
          icon={icon}
          className="absolute left-2 top-2/4 transform -translate-y-1/2 pointer-events-none opacity-50 group-focus-within:opacity-80"
        />
      )}
      <input
        className={cn(
          inputVariants({ size }),
          icon && iconPosition === "left" && "pl-9",
          icon && iconPosition === "right" && "pr-9",
        )}
        ref={ref}
        {...props}
      />
      {icon && iconPosition === "right" && (
        <Icon
          icon={icon}
          className="absolute right-2 top-2/4 transform -translate-y-1/2 pointer-events-none opacity-50 group-focus-within:opacity-100"
        />
      )}
    </div>
  ),
);

Input.displayName = "Input";
