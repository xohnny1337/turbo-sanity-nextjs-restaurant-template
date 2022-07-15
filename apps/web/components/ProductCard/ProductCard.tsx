import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Card } from "ui";
import { getNextImgFromSanitySrc } from "../../utils/sanity";

import { Price } from "../Price";

interface ProductCardProps {
  _id: string;
  title: string;
  description?: string;
  allergens?: string[];
  price: number;
  discount?: number;
  productImage?: SanityImageSource;
  variants: any;
}

export const ProductCard = ({
  productImage,
  title,
  description,
  allergens,
  price,
  discount,
  variants,
}: ProductCardProps) => {
  const defaultVariation = {
    productImage,
    title,
    description,
    allergens,
    price,
    discount,
    variants,
  };
  const [currentVariation, setCurrentVariation] = useState(defaultVariation);
  const allVariations = [defaultVariation].concat(variants || []);

  // const handleChangeVariation = ({ target: { value = "" } }) =>
  //   setCurrentVariation(
  //     allVariations.find((v) => v.title === value) || defaultVariation
  //   );

  return (
    <Card
      shadow
      className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2 relative overflow-hidden cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      {currentVariation.discount && (
        <div className="absolute top-0 right-0 bg-[#49dcb1] dark:bg-[#298e70] px-1 z-10">
          <p> - {currentVariation.discount}%</p>
        </div>
      )}
      {currentVariation.productImage &&
        getNextImgFromSanitySrc(currentVariation.productImage) && (
          <div className="col-span-12 md:col-span-3 md:h-28 h-40 relative">
            <Image
              src={getNextImgFromSanitySrc(currentVariation.productImage).src}
              loader={
                getNextImgFromSanitySrc(currentVariation.productImage).loader
              }
              layout="fill"
              alt={title}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

      <div
        className={clsx(
          { "md:col-span-9": currentVariation.productImage },
          "col-span-12 flex flex-col justify-between"
        )}
      >
        <div>
          <p className="font-medium mb-2">
            {allVariations.map((v) => v.title).join(" / ")}
          </p>
          {/* {!variants || variants.length === 0 ? (
            <p className="font-medium mb-2">{currentVariation.title}</p>
          ) : (
            <form className="flex flex-col space-y-1 mb-4">
              <label htmlFor="variations" className="text-sm">
                Velg variasjon:
              </label>
              <select
                name="variations"
                id="variations"
                className="dark:text-black px-2 py-1 rounded-lg border dark:border-none"
                defaultValue={currentVariation.title}
                onChange={handleChangeVariation}
              >
                {allVariations.map((variant) => (
                  <option value={variant.title}>{variant.title}</option>
                ))}
              </select>
            </form>
          )} */}

          <p className="text-sm mb-4">{currentVariation.description}</p>
        </div>
        <div className="flex justify-between">
          {currentVariation.allergens &&
            currentVariation.allergens?.length > 0 && (
              <div className="text-xs pr-4">
                Allergener:{" "}
                {currentVariation.allergens
                  ?.map((allergen) => allergen)
                  .join(", ")}
              </div>
            )}

          <Price
            price={currentVariation.price}
            discount={currentVariation.discount}
            variants={variants}
          />
        </div>
      </div>
    </Card>
  );
};
