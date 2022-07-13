import clsx from "clsx";

interface PriceProps {
  price: number;
  discount?: number;
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
  return (
    <span className="flex space-x-2 items-center md:items-end whitespace-nowrap text-sm">
      <p
        className={clsx({
          "line-through text-xs md:text-sm": props.discount,
        })}
      >
        {formatFiat(props.price)}
      </p>
      {props.discount && (
        <p>{formatFiat(getPriceFromDiscount(props.price, props.discount))}</p>
      )}
      <p>NOK</p>
    </span>
  );
};
