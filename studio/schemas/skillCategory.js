export default {
  name: "skillCategory",
  title: "Skill Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "column",
      title: "Column",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "skills" } }],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
