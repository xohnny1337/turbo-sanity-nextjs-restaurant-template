import { GetStaticProps } from "next";
import { Button } from "ui";

export default function Index() {
  return (
    <section>
      <Button> hellow world</Button> world
    </section>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};
