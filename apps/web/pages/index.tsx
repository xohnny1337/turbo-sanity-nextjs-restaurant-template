import { GetStaticProps } from "next";

export default function Index() {
  return <section>hello world</section>;
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
