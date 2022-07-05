import Link from "next/link";
import { RiFacebookCircleFill, RiMailFill } from "react-icons/ri";

interface FooterProps {
  fbPageUrl?: string;
  email?: string;
}

export const Footer = ({ fbPageUrl, email }: FooterProps) => (
  <footer className="py-6 flex justify-between items-center">
    <div className="flex space-x-4 text-black dark:text-white">
      {fbPageUrl && (
        <Link href={fbPageUrl}>
          <a>
            <RiFacebookCircleFill size="2rem" />
          </a>
        </Link>
      )}
      {email && (
        <Link href={`mailto:${email}`}>
          <a>
            <RiMailFill size="2rem" />
          </a>
        </Link>
      )}
    </div>
  </footer>
);
