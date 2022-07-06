import clsx from "clsx";

interface PriceProps {
  price: number;
  discount?: number;
}

const getPriceFromDiscount = (
  price: string,
  discount: PriceProps["discount"]
) => {
  if (!discount) return price;

  return price;
};

export const Price = (props: PriceProps) => {
  const price = new Intl.NumberFormat(`nb-NO`, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(props.price);

  return (
    <span className="flex space-x-2 items-center md:items-end whitespace-nowrap text-sm">
      <p
        className={clsx({
          "line-through text-xs md:text-sm": props.discount,
        })}
      >
        {price}
      </p>
      {props.discount && <p>{getPriceFromDiscount(price, props.discount)}</p>}
      <p>NOK</p>
    </span>
  );
};
