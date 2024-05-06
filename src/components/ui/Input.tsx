/* eslint-disable react/jsx-props-no-spreading */

"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { Icon } from "./Icon";

import type { IconType } from "react-icons";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: IconType;
  iconPosition?: "left" | "right";
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition, ...props }, ref) => {
    const inputClasses = cn(
      "w-full text-sm py-2 px-3 outline-0 disabled:cursor-not-allowed disabled:opacity-50",
      icon && iconPosition === "left" && "pl-9",
      icon && iconPosition === "right" && "pr-9",
    );

    return (
      <div
        className={cn(
          "group relative inline-flex w-full rounded-sm overflow-hidden border border-input",
          className,
        )}
      >
        {icon && iconPosition === "left" && (
          <Icon
            className="absolute left-2 top-2/4 transform -translate-y-1/2 pointer-events-none opacity-50 group-focus-within:opacity-80"
            icon={icon}
          />
        )}
        <input className={inputClasses} ref={ref} type={type} {...props} />
        {icon && iconPosition === "right" && (
          <Icon
            className="absolute right-2 top-2/4 transform -translate-y-1/2 pointer-events-none opacity-50 group-focus-within:opacity-100"
            icon={icon}
          />
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
