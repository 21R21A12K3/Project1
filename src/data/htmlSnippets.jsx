const htmlSnippets = [
  {
    title: "Basic HTML Structure",
    code: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>`,
    description: "This is the basic structure of an HTML document. It includes the DOCTYPE declaration, the root <html> element, and essential metadata in the <head> section, as well as a body with a heading.",
    tags: ["html", "structure"]
  },
  {
    title: "Anchor Tag (Link)",
    code: `<a href="https://www.example.com">Click Here</a>`,
    description: "The anchor tag (<a>) is used to create hyperlinks that navigate to another page or resource. The 'href' attribute specifies the target URL.",
    tags: ["html", "anchor", "link"]
  },
  {
    title: "Image Tag",
    code: `<img src="image.jpg" alt="description" />`,
    description: "The <img> tag is used to embed images in a webpage. The 'src' attribute defines the image source, and 'alt' provides alternative text for accessibility.",
    tags: ["html", "image"]
  },
  {
    title: "Table Structure",
    code: `<table>\n  <tr>\n    <th>Header</th>\n    <td>Data</td>\n  </tr>\n</table>`,
    description: "The <table> tag is used to create a table structure. <tr> defines rows, <th> defines table headers, and <td> defines table data cells.",
    tags: ["html", "table"]
  },
  {
    title: "Form Element",
    code: `<form action="/submit" method="POST">\n  <input type="text" name="name" />\n  <button type="submit">Submit</button>\n</form>`,
    description: "The <form> element is used to collect user input. The 'action' attribute specifies where to send form data, and 'method' determines how the data will be sent.",
    tags: ["html", "form"]
  },
  {
    title: "Div and Span",
    code: `<div>This is a div element</div>\n<span>This is a span element</span>`,
    description: "The <div> tag is a block-level container element, often used to group other elements, while <span> is an inline container used for styling small portions of content.",
    tags: ["html", "elements"]
  },
  {
    title: "Checkbox",
    code: `<input type="checkbox" id="accept" /> <label for="accept">Accept Terms</label>`,
    description: "This HTML snippet creates a checkbox input field. The <label> element is used to associate a label with the checkbox for better accessibility.",
    tags: ["html", "form", "checkbox"]
  },
  {
    title: "Radio Button",
    code: `<input type="radio" name="gender" value="male" /> Male\n<input type="radio" name="gender" value="female" /> Female`,
    description: "Radio buttons are used when you want the user to select only one option from a group. Each radio button in a group must have the same 'name' attribute.",
    tags: ["html", "form", "radio"]
  },
  {
    title: "Select Dropdown",
    code: `<select><option value="option1">Option 1</option><option value="option2">Option 2</option></select>`,
    description: "The <select> element creates a dropdown menu, with <option> elements representing individual selectable items.",
    tags: ["html", "form", "select"]
  },
  {
    title: "Meta Tag for Responsive Design",
    code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
    description: "This <meta> tag helps control the viewport's width and scaling on mobile devices. It's essential for creating responsive designs.",
    tags: ["html", "meta", "responsive"]
  }
];

export default htmlSnippets;
