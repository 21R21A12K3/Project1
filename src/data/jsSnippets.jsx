const jsSnippets = [
  {
    title: "For Loop",
    code: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`,
    description: "The 'for' loop is used to repeat a block of code a specific number of times. This example logs the numbers 0 through 4 to the console.",
    tags: ["js", "loops"]
  },
  {
    title: "Arrow Function",
    code: `const add = (a, b) => a + b;`,
    description: "Arrow functions provide a shorter syntax for writing functions. This example defines an 'add' function that sums two values.",
    tags: ["js", "function", "arrow"]
  },
  {
    title: "Destructuring Assignment",
    code: `const { name, age } = person;`,
    description: "Destructuring assignment allows you to unpack values from objects or arrays into distinct variables. In this example, 'name' and 'age' are extracted from the 'person' object.",
    tags: ["js", "destructuring"]
  },
  {
    title: "Array Map",
    code: `const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);`,
    description: "The 'map' method creates a new array by applying a function to each element of the original array. In this example, each number in the array is doubled.",
    tags: ["js", "array", "map"]
  },
  {
    title: "Array Filter",
    code: `const numbers = [1, 2, 3, 4];\nconst evenNumbers = numbers.filter(num => num % 2 === 0);`,
    description: "The 'filter' method creates a new array with all elements that pass a given condition. This example filters out the even numbers from the array.",
    tags: ["js", "array", "filter"]
  },
  {
    title: "Promise Example",
    code: `const fetchData = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("Data loaded"), 2000);\n});`,
    description: "A promise represents the eventual completion (or failure) of an asynchronous operation. This example simulates loading data with a delay of 2 seconds.",
    tags: ["js", "promise"]
  },
  {
    title: "Async/Await",
    code: `async function fetchData() {\n  const response = await fetch("https://api.example.com");\n  const data = await response.json();\n  console.log(data);\n}`,
    description: "Async/Await allows you to write asynchronous code in a more readable, synchronous style. In this example, 'fetchData' fetches data from an API and logs it.",
    tags: ["js", "async", "await"]
  },
  {
    title: "Object Spread Operator",
    code: `const newObj = { ...oldObj, newProp: "value" };`,
    description: "The spread operator ('...') allows you to copy all properties of an object into a new one. This example creates a new object with all properties from 'oldObj' and adds a new property 'newProp'.",
    tags: ["js", "object", "spread"]
  },
  {
    title: "Local Storage",
    code: `localStorage.setItem("key", "value");\nconst value = localStorage.getItem("key");`,
    description: "Local Storage allows you to store data in the browser persistently. This example stores a value under a key and retrieves it later.",
    tags: ["js", "local-storage"]
  },
  {
    title: "Event Listener",
    code: `button.addEventListener("click", () => {\n  alert("Button clicked!");\n});`,
    description: "The 'addEventListener' method attaches an event handler to an element. This example shows how to display an alert when a button is clicked.",
    tags: ["js", "event"]
  }
];

export default jsSnippets;
