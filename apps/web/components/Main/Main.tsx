import { ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => (
  <main className="flex flex-grow flex-col">{children}</main>
);
