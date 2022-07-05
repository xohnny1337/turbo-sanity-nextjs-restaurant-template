import { createClient } from "next-sanity";

import { sanityConfig } from "./config";

export const sanityClient = createClient(sanityConfig);

export const getClient = () => createClient(sanityConfig);
