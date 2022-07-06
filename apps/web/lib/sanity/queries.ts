export const settingsQuery = `"settings": *[_type == "settings"][0]`;
export const menuQuery = `"menu": *[_type == "category"] | order(order asc) {..., "products": *[_type == "product" && references(^._id)] | order(order asc)}`;
