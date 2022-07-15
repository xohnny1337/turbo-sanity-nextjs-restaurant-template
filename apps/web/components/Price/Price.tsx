import clsx from "clsx";

interface PriceProps {
  price: number;
  discount?: number;
  variants?: any;
}

function formatFiat(p: number): string {
  return new Intl.NumberFormat(`nb-NO`, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(p);
}

const getPriceFromDiscount = (
  price: number,
  discount: PriceProps["discount"]
) => {
  if (!discount) return price;

  return price - (discount * Number(price.toFixed(2))) / 100;
};

export const Price = (props: PriceProps) => {
  const variantPrices = props.variants?.map((v) => v.price) || [];
  const allPrices = [props.price].concat(variantPrices);

  return (
    <span
      className={clsx("flex items-center md:items-end text-sm", {
        "flex-col": props.discount,
        "space-x-1": !props.discount,
      })}
    >
      <p
        className={clsx({
          "line-through text-xs md:text-sm": props.discount,
        })}
      >
        {allPrices.map((p) => formatFiat(p)).join(" / ")}
      </p>
      <div className="flex flex-nowrap">
        {props.discount && (
          <p>
            {allPrices
              .map((p) => formatFiat(getPriceFromDiscount(p, props.discount)))
              .join(" / ")}
          </p>
        )}
        <p className="pl-1">NOK</p>
      </div>
    </span>
  );
};
