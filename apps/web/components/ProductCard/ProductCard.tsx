import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import clsx from "clsx";
import Image from "next/image";
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
}

export const ProductCard = ({
  productImage,
  title,
  description,
  allergens,
  price,
  discount,
}: ProductCardProps) => {
  const prdImage = productImage && getNextImgFromSanitySrc(productImage);

  return (
    <Card
      shadow
      className="col-span-12 md:col-span-6 grid grid-cols-12 gap-2 relative overflow-hidden"
    >
      {discount && (
        <div className="absolute top-0 right-0 bg-[#49dcb1] px-2 z-10">
          <p> - {discount}%</p>
        </div>
      )}
      {prdImage && (
        <div className="col-span-12 md:col-span-3 h-28 relative">
          <Image
            src={prdImage.src}
            loader={prdImage.loader}
            layout="fill"
            alt={title}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}

      <div
        className={clsx(
          { "md:col-span-9": productImage },
          "col-span-12 flex flex-col justify-between"
        )}
      >
        <div>
          <p className="font-medium mb-2">{title}</p>
          <p className="text-sm mb-4">{description}</p>
        </div>
        <div className="flex justify-between">
          {allergens && allergens?.length > 0 && (
            <div className="text-xs pr-4">
              Allergener: {allergens?.map((allergen) => allergen).join(", ")}
            </div>
          )}
          <Price price={price} discount={discount} />
        </div>
      </div>
    </Card>
  );
};
