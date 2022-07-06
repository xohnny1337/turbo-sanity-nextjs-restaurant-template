import { GetStaticProps } from "next";
import { Button } from "ui";

import { getClient } from "../lib/sanity/sanity.server";
import { settingsQuery } from "../lib/sanity/queries";

export default function Index({}) {
  return <section>Page not found 404</section>;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient().fetch(`{ ${settingsQuery} }`);

  return {
    props: { data },
    revalidate: 600,
  };
};
