import { useState } from "react";
import Link from "next/link";
import { Button } from "ui";

import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import clsx from "clsx";

interface NavProps {
  title: string;
}
export const Nav = ({ title }: NavProps) => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false);

  return (
    <>
      <nav className="hidden md:block">
        <ul className="flex space-x-2 list-none">
          <li>
            <Link href="/menu">
              <a>
                <Button>Meny</Button>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>
                <Button>Kontakt oss</Button>
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="block md:hidden">
        <button onClick={() => setShowDrawer(!showDrawer)}>
          <GiHamburgerMenu />
        </button>
      </div>
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 bottom-0 z-20 h-full w-full bg-mainBgColor dark:bg-black  py-6 px-6 transition-transform",
          {
            "translate-x-full": !showDrawer,
          }
        )}
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">{title}</h1>
          <button onClick={() => setShowDrawer(!showDrawer)}>
            <CgClose />
          </button>
        </div>
      </div>
    </>
  );
};
