import { days } from "../constants";

export default {
  name: "settings",
  title: "Settings",
  type: "document",
  fieldsets: [{ name: "restaurantInfo", title: "Restaurant Info" }],
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      fieldset: "restaurantInfo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      fieldset: "restaurantInfo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Emailaddress",
      type: "string",
      fieldset: "restaurantInfo",
    },
    {
      name: "phone",
      title: "Phonenumber",
      type: "string",
      fieldset: "restaurantInfo",
    },
    {
      name: "logo",
      title: "Logo / Image",
      type: "image",
      fieldset: "restaurantInfo",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
      fieldset: "restaurantInfo",
    },

    {
      title: "Business hours",
      name: "openings",
      type: "array",
      validation: (Rule) => Rule.max(7).min(7).error("Max - Min 7 weekdays"),
      of: [
        {
          type: "object",
          fields: [
            {
              name: "day",
              title: "Dag",
              type: "string",
              options: {
                list: days,
              },
              validation: (Rule) => Rule.required(),
            },
            { name: "open", title: "Open", type: "boolean" },
            {
              name: "openTime",
              title: "Open",
              type: "string",
              description: "00:00 format",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "closeTime",
              title: "Close",
              type: "string",
              description: "00:00 format",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    { title: "Open for business", name: "openForBiz", type: "boolean" },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
