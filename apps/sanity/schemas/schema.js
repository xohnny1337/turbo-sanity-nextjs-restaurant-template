import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

//Documents
import product from "./product";
import category from "./category";
import settings from "./settings";

//Elements
import blockContent from "./elements/blockContent";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    //Documents
    product,
    category,
    settings,

    //Elements
    blockContent,
  ]),
});
