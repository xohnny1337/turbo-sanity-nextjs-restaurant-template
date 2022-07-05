import { GetStaticProps } from "next";
import Img from "next/image";
import { menuQuery, settingsQuery } from "../../lib/sanity/queries";
import { getClient } from "../../lib/sanity/sanity.server";
import { getNextImgFromSanitySrc } from "../../utils/sanity";

export default function Web({ data }) {
  const menu = data?.menu;
  return (
    <section className="w-full">
      <div className="space-y-10">
        {menu.map((menuItem) => {
          console.log({ menuItem });
          return (
            <div key={menuItem._id}>
              <h2 className="mb-6">{menuItem.title}</h2>
              <div className="space-y-4">
                {menuItem.products.map((product) => {
                  const headerLogo = getNextImgFromSanitySrc(
                    product.productImage
                  );

                  return (
                    <div className="rounded-lg bg-white p-4 flex space-x-6">
                      <div className="w-36 h-36 md:w-56 md:h-56 relative">
                        <Img
                          {...headerLogo}
                          layout="fill"
                          alt={product.title}
                          objectFit="cover"
                          className="overflow-hidden rounded-lg"
                        />
                      </div>
                      <div className="flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                          <p className="font-medium"> {product.title}</p>{" "}
                          <p>{product.price},-</p>
                        </div>
                        <span>{product.description}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getClient().fetch(`{ ${settingsQuery}, ${menuQuery} }`);

  return {
    props: { data },
  };
};
