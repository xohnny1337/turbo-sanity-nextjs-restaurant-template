import React from "react";
import clsx from "clsx";

export type CardSkins = "primary" | "secondary";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  skin?: CardSkins;
  shadow?: boolean;
}

export const Card = ({
  children,
  skin = "primary",
  shadow,
  ...rest
}: CardProps) => {
  return (
    <div
      {...rest}
      className={clsx(
        "rounded-lg p-4",
        {
          "bg-white dark:bg-gray text-black dark:text-white":
            skin === "primary",
          "shadow-sm": shadow,
        },
        rest.className
      )}
    >
      {children}
    </div>
  );
};
