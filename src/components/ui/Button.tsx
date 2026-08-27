"use client";

import Link from "next/link";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    external?: never;
  };

export type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const {
      children,
      variant = "primary",
      size = "md",
      className = "",
      ...rest
    } = props;

    const classes = ["btn", variantClass[variant], sizeClass[size], className]
      .filter(Boolean)
      .join(" ");

    if ("href" in props && props.href) {
      const { href, external, ...linkRest } = rest as ButtonAsLink;

      if (external) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            {...linkRest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...linkRest}
        >
          {children}
        </Link>
      );
    }

    const { type = "button", ...buttonRest } = rest as ButtonAsButton;

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={classes}
        {...buttonRest}
      >
        {children}
      </button>
    );
  },
);
