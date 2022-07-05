import { ClientConfig } from "next-sanity";

export const sanityConfig: ClientConfig = {
  dataset: process.env.SANITY_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  apiVersion: "2022-07-05",
  useCdn: process.env.NODE_ENV === "production",
};
