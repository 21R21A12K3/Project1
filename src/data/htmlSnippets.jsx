const htmlSnippets = [
    {
      title: "Basic HTML Structure",
      code: `<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Document</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n  </body>\n</html>`,
      tags: ["html", "structure"]
    },
    {
      title: "Anchor Tag (Link)",
      code: `<a href="https://www.example.com">Click Here</a>`,
      tags: ["html", "anchor", "link"]
    },
    {
      title: "Image Tag",
      code: `<img src="image.jpg" alt="description" />`,
      tags: ["html", "image"]
    },
    {
      title: "Table Structure",
      code: `<table>\n  <tr>\n    <th>Header</th>\n    <td>Data</td>\n  </tr>\n</table>`,
      tags: ["html", "table"]
    },
    {
      title: "Form Element",
      code: `<form action="/submit" method="POST">\n  <input type="text" name="name" />\n  <button type="submit">Submit</button>\n</form>`,
      tags: ["html", "form"]
    },
    {
      title: "Div and Span",
      code: `<div>This is a div element</div>\n<span>This is a span element</span>`,
      tags: ["html", "elements"]
    },
    {
      title: "Checkbox",
      code: `<input type="checkbox" id="accept" /> <label for="accept">Accept Terms</label>`,
      tags: ["html", "form", "checkbox"]
    },
    {
      title: "Radio Button",
      code: `<input type="radio" name="gender" value="male" /> Male\n<input type="radio" name="gender" value="female" /> Female`,
      tags: ["html", "form", "radio"]
    },
    {
      title: "Select Dropdown",
      code: `<select><option value="option1">Option 1</option><option value="option2">Option 2</option></select>`,
      tags: ["html", "form", "select"]
    },
    {
      title: "Meta Tag for Responsive Design",
      code: `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
      tags: ["html", "meta", "responsive"]
    }
  ];
  
export default htmlSnippets;
  