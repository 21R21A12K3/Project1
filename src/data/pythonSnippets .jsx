const pythonSnippets = [
  {
    id: 1,
    title: "Print Hello World",
    code: `print("Hello, World!")`,
    description: "Basic output in Python",
    tags: ["basics", "output"]
  },
  {
    id: 2,
    title: "If-Else Statement",
    code: `x = 10\nif x > 5:\n    print("x is greater than 5")\nelse:\n    print("x is 5 or less")`,
    description: "Simple if-else condition",
    tags: ["condition", "if-else"]
  },
  {
    id: 3,
    title: "For Loop",
    code: `for i in range(5):\n    print(i)`,
    description: "Loop from 0 to 4",
    tags: ["loop", "for"]
  },
  {
    id: 4,
    title: "While Loop",
    code: `i = 0\nwhile i < 5:\n    print(i)\n    i += 1`,
    description: "Print numbers using while loop",
    tags: ["loop", "while"]
  },
  {
    id: 5,
    title: "Function Definition",
    code: `def greet(name):\n    print(f"Hello, {name}!")\ngreet("Alice")`,
    description: "Basic function in Python",
    tags: ["function", "definition"]
  },
  {
    id: 6,
    title: "List Operations",
    code: `fruits = ["apple", "banana", "cherry"]\nfruits.append("mango")\nprint(fruits)`,
    description: "Add an item to a list",
    tags: ["list", "array", "append"]
  },
  {
    id: 7,
    title: "Dictionary Usage",
    code: `person = {"name": "John", "age": 25}\nprint(person["name"])`,
    description: "Access value from dictionary",
    tags: ["dictionary", "data structure"]
  },
  {
    id: 8,
    title: "Class and Object",
    code: `class Person:\n    def __init__(self, name):\n        self.name = name\n\np = Person("Alice")\nprint(p.name)`,
    description: "Basic class example",
    tags: ["oop", "class", "object"]
  },
  {
    id: 9,
    title: "File Read Example",
    code: `with open("file.txt", "r") as f:\n    print(f.read())`,
    description: "Reading a file in Python",
    tags: ["file", "io", "read"]
  },
  {
    id: 10,
    title: "List Comprehension",
    code: `squares = [x**2 for x in range(10)]\nprint(squares)`,
    description: "Create a list of squares",
    tags: ["list", "comprehension", "loop"]
  }
];

export default pythonSnippets;
