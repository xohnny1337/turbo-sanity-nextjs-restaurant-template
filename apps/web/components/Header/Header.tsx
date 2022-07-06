import Img from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { getNextImgFromSanitySrc } from "../../utils/sanity";
import { Nav } from "../Nav";
import Link from "next/link";

interface HeaderProps {
  title: string;
  logo: SanityImageSource;
}

export const Header = ({ title, logo }: HeaderProps) => {
  const headerLogo = getNextImgFromSanitySrc(logo);

  return (
    <header className="flex justify-between mb-24 md:mb-36">
      <Link href="/">
        <a>
          {headerLogo ? (
            <div className="w-36 h-36 md:w-56 md:h-56">
              <Img {...headerLogo} layout="responsive" alt={title} />
            </div>
          ) : (
            <p className="text-lg font-medium">{title}</p>
          )}
        </a>
      </Link>

      <Nav title={title} />
    </header>
  );
};
