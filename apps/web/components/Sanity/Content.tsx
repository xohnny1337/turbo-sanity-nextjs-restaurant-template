import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "./serializers";

export const Content = ({ blocks }: { blocks: any }) => (
  <BlockContent
    blocks={blocks}
    serializers={serializers}
    className="space-y-4"
  />
);
