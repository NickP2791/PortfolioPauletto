export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Live site",
      name: "siteUrl",
      type: "url",
    },
    {
      title: "Code",
      name: "codeUrl",
      type: "url",
    },

    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "skills",
      title: "Skills used",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
  },
};
