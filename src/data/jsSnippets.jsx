const jsSnippets = [
    {
      title: "For Loop",
      code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
      tags: ["js", "loops"]
    },
    {
      title: "Arrow Function",
      code: `const add = (a, b) => a + b;`,
      tags: ["js", "function", "arrow"]
    },
    {
      title: "Destructuring Assignment",
      code: `const { name, age } = person;`,
      tags: ["js", "destructuring"]
    },
    {
      title: "Array Map",
      code: `const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);`,
      tags: ["js", "array", "map"]
    },
    {
      title: "Array Filter",
      code: `const numbers = [1, 2, 3, 4];\nconst evenNumbers = numbers.filter(num => num % 2 === 0);`,
      tags: ["js", "array", "filter"]
    },
    {
      title: "Promise Example",
      code: `const fetchData = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Data loaded"), 2000);\n});`,
      tags: ["js", "promise"]
    },
    {
      title: "Async/Await",
      code: `async function fetchData() {\n  const response = await fetch("https://api.example.com");\n  const data = await response.json();\n  console.log(data);\n}`,
      tags: ["js", "async", "await"]
    },
    {
      title: "Object Spread Operator",
      code: `const newObj = { ...oldObj, newProp: "value" };`,
      tags: ["js", "object", "spread"]
    },
    {
      title: "Local Storage",
      code: `localStorage.setItem("key", "value");\nconst value = localStorage.getItem("key");`,
      tags: ["js", "local-storage"]
    },
    {
      title: "Event Listener",
      code: `button.addEventListener("click", () => {\n  alert("Button clicked!");\n});`,
      tags: ["js", "event"]
    }
  ];
  
  export default jsSnippets;
  