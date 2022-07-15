import { GetStaticProps } from "next";
import { Accordion } from "ui";

import { menuQuery, settingsQuery } from "../../lib/sanity/queries";
import { getClient } from "../../lib/sanity/sanity.server";

import { Content } from "../../components/Sanity";
import { ProductCard } from "../../components/ProductCard";

export default function Web({ data }) {
  const menu = data?.menu;
  const allergensInfo = data?.settings?.allergensInfo;

  return (
    <>
      {allergensInfo && (
        <section className="w-full mb-12">
          <Content blocks={allergensInfo} />
        </section>
      )}

      <section className="w-full">
        <div className="space-y-10">
          {menu.map((menuItem) => {
            if (menuItem.products.length === 0) return null;

            return (
              <div key={menuItem._id}>
                <Accordion title={menuItem.title}>
                  <div className="grid grid-cols-12 gap-4">
                    {menuItem.products.map((product) => {
                      return <ProductCard {...product} key={product._id} />;
                    })}
                  </div>
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient().fetch(`{ ${settingsQuery}, ${menuQuery} }`);

  return {
    props: { data },
    revalidate: 60,
  };
};
