const cssSnippets = [
    {
      title: "Centering an Element",
      code: `.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
      tags: ["css", "layout", "center"]
    },
    {
      title: "Font Styling",
      code: `.title {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #333;\n}`,
      tags: ["css", "styling", "font"]
    },
    {
      title: "Border Radius",
      code: `.rounded {\n  border-radius: 10px;\n}`,
      tags: ["css", "styling", "border-radius"]
    },
    {
      title: "Box Shadow",
      code: `.shadow {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}`,
      tags: ["css", "styling", "shadow"]
    },
    {
      title: "Flexbox Layout",
      code: `.container {\n  display: flex;\n  justify-content: space-between;\n}`,
      tags: ["css", "layout", "flexbox"]
    },
    {
      title: "Grid Layout",
      code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}`,
      tags: ["css", "layout", "grid"]
    },
    {
      title: "Hover Effect",
      code: `.button:hover {\n  background-color: #007bff;\n  color: white;\n}`,
      tags: ["css", "hover"]
    },
    {
      title: "Responsive Design with Media Query",
      code: `@media (max-width: 600px) {\n  .container {\n    flex-direction: column;\n  }\n}`,
      tags: ["css", "responsive", "media-query"]
    },
    {
      title: "Transition Effect",
      code: `.button {\n  transition: all 0.3s ease;\n}\n.button:hover {\n  transform: scale(1.1);\n}`,
      tags: ["css", "transition"]
    },
    {
      title: "Positioning with Absolute",
      code: `.absolute {\n  position: absolute;\n  top: 10px;\n  left: 20px;\n}`,
      tags: ["css", "position"]
    }
  ];
  
  export default cssSnippets;
  