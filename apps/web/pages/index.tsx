import { GetStaticProps } from "next";

import { getClient } from "../lib/sanity/sanity.server";
import { settingsQuery } from "../lib/sanity/queries";
import { Content } from "../components/Sanity";

//TODO: fix typings for data maybe use generate sanity types
export default function Index({ data }: any) {
  const content = data?.settings.description;
  return <section>{content && <Content blocks={content} />}</section>;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient().fetch(`{ ${settingsQuery} }`);

  return {
    props: { data },
    revalidate: 60,
  };
};
