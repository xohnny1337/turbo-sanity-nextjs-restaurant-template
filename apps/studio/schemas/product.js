export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: "discount",
      title: "Discount",
      description: "1% - 100%",
      type: "number",
      validation: (Rule) => Rule.min(1).max(100),
    },
    {
      name: "productImage",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "variants",
      title: "Variants",
      type: "array",
      of: [
        {
          title: "Variant",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            },
            {
              name: "productImage",
              title: "Product Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "allergens",
              title: "Allergens",
              type: "array",
              of: [
                {
                  type: "string",
                },
              ],
              options: {
                layout: "tags",
              },
            },
          ],
        },
      ],
    },
    {
      name: "allergens",
      title: "Allergens",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: { type: "category" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "productImage",
    },
  },
};
