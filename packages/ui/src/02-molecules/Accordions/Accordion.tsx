import clsx from "clsx";
import { ReactNode, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface AccordionProps {
  title: string;
  children: ReactNode;
}
export const Accordion = ({ title, children }: AccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className="border border-black dark:border-white rounded-lg border-opacity-5 cursor-pointer p-4"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        <div className={clsx("transition-all", open && "rotate-180")}>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
      <div
        className={clsx(
          "overflow-hidden transition-all",
          !open ? "max-h-0" : "mt-4 max-h-[6969px]"
        )}
      >
        {children}
      </div>
    </div>
  );
};
