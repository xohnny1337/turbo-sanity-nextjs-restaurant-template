import React from "react";
import clsx from "clsx";

export type ButtonSkins = "primary" | "secondary";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  size?: "sm" | "md" | "lg";
  skin?: ButtonSkins;
  full?: boolean;
}

const sizes = {
  lg: "py-2 px-6 text-lg",
  md: "py-1 px-3 text-base",
  sm: "py-1 px-3 text-sm",
};

export const Button = ({
  children,
  size = "md",
  skin = "primary",
  full = false,
  type = "button",
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      type={type}
      className={clsx(
        "rounded-lg flex flex-row justify-center items-center",
        {
          "bg-primary text-white": skin === "primary",
        },
        sizes[size]
      )}
    >
      {children}
    </button>
  );
};
