/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */

import { cva } from "class-variance-authority";
import { forwardRef } from "react";

import { cn, isNil } from "@/lib/utils";

import { Icon } from "./Icon";
import { Spinner } from "./Spinner";

import type { VariantProps } from "class-variance-authority";
import type { IconType } from "react-icons";

const buttonVariants = cva(
  "inline-flex relative items-center justify-center whitespace-nowrap overflow-hidden text-sm rounded-md transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white bg-primary hover:bg-gray14",
        secondary: "text-white bg-gray14",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  circular?: boolean;
  leftIcon?: IconType;
  rightIcon?: IconType;
}

const loadingContainer = (
  <div className="absolute flex items-center justify-center top-0 w-full h-full cursor-normal bg-inherit">
    <Spinner size="md" />
  </div>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      loading,
      circular,
      leftIcon,
      rightIcon,
      ...props
    },
    ref,
  ) => {
    const hasChildren = !isNil(props.children);

    const computeContent = () => {
      const { children, content } = props;

      const baseContent = hasChildren ? children : content;

      return baseContent;
    };

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {loading && loadingContainer}
        {leftIcon && <Icon icon={leftIcon} />}
        {computeContent()}
        {rightIcon && <Icon icon={rightIcon} />}
      </button>
    );
  },
);

Button.displayName = "Button";
