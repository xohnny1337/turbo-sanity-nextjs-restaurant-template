import Link from "next/link";
import Img from "next/image";
import { getNextImgFromSanitySrc } from "../../utils/sanity";
import { Button } from "ui";

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
    button: (props: any) => {
      return (
        <Link href={props.node.url} passHref>
          <a className="inline-block">
            <Button>{props.node.text}</Button>
          </a>
        </Link>
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
