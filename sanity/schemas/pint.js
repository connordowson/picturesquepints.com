export default {
  name: "post",
  type: "document",
  title: "Pints",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "URL for the post",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "")
            .slice(0, 200),
      },
    },
    {
      name: "featuredImage",
      title: "Featured image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },
    {
      name: "post",
      title: "Post",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "location",
      title: "Location",
      type: "object",
      fields: [
        {
          name: "locationName",
          title: "Location name",
          type: "string",
        },
        {
          name: "geopoint",
          title: "Location on map",
          type: "geopoint",
        },
        {
          name: "country",
          title: "Country",
          type: "string",
          description: "Enter the countries 2 letter ISO code.",
        },
      ],
    },

    {
      name: "drink",
      title: "Drink",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "object",
      fields: [
        {
          name: "currency",
          title: "Currency",
          type: "string",
          description: "Enter the currencies 3 letter ISO code.",
        },
        {
          name: "amount",
          title: "Amount",
          type: "number",
        },
      ],
    },
  ],
  
};
