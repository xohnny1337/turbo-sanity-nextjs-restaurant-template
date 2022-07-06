import Link from "next/link";
import Img from "next/image";
import { getNextImgFromSanitySrc } from "../../utils/sanity";

//TODO: Fix sanity typings
export const serializers = {
  types: {
    image: (props: any) => {
      const imageProps = getNextImgFromSanitySrc(props.node);
      return (
        <Img
          {...imageProps}
          layout="intrinsic"
          objectFit="cover"
          className="overflow-hidden rounded-lg"
        />
      );
    },
  },
  marks: {
    link: (props: { mark: { href: string; _type: "link" }; children: any }) => {
      if (!props.mark.href) return null;

      return (
        <Link href={props.mark.href}>
          <a className="underline">{props.children}</a>
        </Link>
      );
    },
  },
};
