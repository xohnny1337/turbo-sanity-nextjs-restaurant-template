import { useNextSanityImage } from "next-sanity-image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { getClient } from "../lib/sanity.server";

export const getSanityImageProps = (sanityImg: SanityImageSource) =>
  useNextSanityImage(getClient(), sanityImg);
