import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useNextSanityImage } from "next-sanity-image";
import { sanityClient } from "../lib/sanity/sanity.server";

export const getNextImgFromSanitySrc = (source: SanityImageSource) =>
  useNextSanityImage(sanityClient, source);
