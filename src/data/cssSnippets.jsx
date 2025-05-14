const cssSnippets = [
  {
    title: "Centering an Element",
    code: `.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
    description: "This CSS snippet uses Flexbox to center an element both horizontally and vertically within its container.",
    tags: ["css", "layout", "center"]
  },
  {
    title: "Font Styling",
    code: `.title {\n  font-size: 2rem;\n  font-weight: bold;\n  color: #333;\n}`,
    description: "This snippet styles the font of an element with a larger size, bold weight, and a dark gray color.",
    tags: ["css", "styling", "font"]
  },
  {
    title: "Border Radius",
    code: `.rounded {\n  border-radius: 10px;\n}`,
    description: "Applies rounded corners to an element with a radius of 10px, useful for softer, more modern UI elements.",
    tags: ["css", "styling", "border-radius"]
  },
  {
    title: "Box Shadow",
    code: `.shadow {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}`,
    description: "Adds a subtle shadow effect behind an element, providing depth and a sense of elevation.",
    tags: ["css", "styling", "shadow"]
  },
  {
    title: "Flexbox Layout",
    code: `.container {\n  display: flex;\n  justify-content: space-between;\n}`,
    description: "This Flexbox layout arranges child elements with space distributed evenly between them within the container.",
    tags: ["css", "layout", "flexbox"]
  },
  {
    title: "Grid Layout",
    code: `.container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}`,
    description: "Uses the CSS Grid to create a 3-column layout with equal-width columns, each taking up 1 fraction of the available space.",
    tags: ["css", "layout", "grid"]
  },
  {
    title: "Hover Effect",
    code: `.button:hover {\n  background-color: #007bff;\n  color: white;\n}`,
    description: "Changes the background color and text color of a button when the user hovers over it, enhancing interactivity.",
    tags: ["css", "hover"]
  },
  {
    title: "Responsive Design with Media Query",
    code: `@media (max-width: 600px) {\n  .container {\n    flex-direction: column;\n  }\n}`,
    description: "This media query ensures that when the viewport width is 600px or less, the layout switches to a column-based structure for better mobile responsiveness.",
    tags: ["css", "responsive", "media-query"]
  },
  {
    title: "Transition Effect",
    code: `.button {\n  transition: all 0.3s ease;\n}\n.button:hover {\n  transform: scale(1.1);\n}`,
    description: "Adds a smooth transition effect when the button is hovered, making it scale up slightly to indicate interaction.",
    tags: ["css", "transition"]
  },
  {
    title: "Positioning with Absolute",
    code: `.absolute {\n  position: absolute;\n  top: 10px;\n  left: 20px;\n}`,
    description: "Positions an element absolutely within its nearest positioned ancestor, with specific offsets from the top and left of the parent container.",
    tags: ["css", "position"]
  }
];

export default cssSnippets;
