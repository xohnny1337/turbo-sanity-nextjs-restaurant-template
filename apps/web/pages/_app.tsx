import "ui/globals.css";
import type { AppProps } from "next/app";

import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  const siteSettings = pageProps.data?.settings;

  return (
    <div className="px-6 pt-6 max-w-5xl mx-auto min-h-screen flex flex-col">
      <Header title={siteSettings?.name} logo={siteSettings?.logo} />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer
        fbPageUrl={siteSettings?.facebookPage}
        email={siteSettings?.email}
      />
    </div>
  );
}
