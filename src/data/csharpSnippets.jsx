const csharpSnippets = [
  {
    title: "Hello World",
    code: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}`,
    tags: ["csharp", "basics", "output"],
    description: "A basic C# program that prints 'Hello, World!' to the console."
  },
  {
    title: "For Loop",
    code: `for (int i = 0; i < 5; i++) {\n  Console.WriteLine(i);\n}`,
    tags: ["csharp", "loops", "for"],
    description: "Prints numbers from 0 to 4 using a for loop."
  },
  {
    title: "Function Example",
    code: `int Add(int a, int b) {\n  return a + b;\n}`,
    tags: ["csharp", "function"],
    description: "Defines a method that returns the sum of two integers."
  },
  {
    title: "If Statement",
    code: `if (x > 0) {\n  Console.WriteLine("Positive");\n} else {\n  Console.WriteLine("Non-positive");\n}`,
    tags: ["csharp", "conditional"],
    description: "Checks whether a number is positive or not."
  },
  {
    title: "Array Declaration",
    code: `int[] arr = new int[] {1, 2, 3, 4, 5};`,
    tags: ["csharp", "array"],
    description: "Declares and initializes an integer array."
  },
  {
    title: "Class Definition",
    code: `class Car {\n  public string brand;\n  public void Honk() {\n    Console.WriteLine("Beep!");\n  }\n}`,
    tags: ["csharp", "class", "OOP"],
    description: "Defines a class with a property and a method."
  },
  {
    title: "Constructor Usage",
    code: `class Car {\n  public Car() {\n    Console.WriteLine("Car created");\n  }\n}`,
    tags: ["csharp", "constructor"],
    description: "Demonstrates how to use a constructor in C#."
  },
  {
    title: "List Example",
    code: `List<int> numbers = new List<int> {1, 2, 3};`,
    tags: ["csharp", "list", "collection"],
    description: "Creates a generic list and initializes it with values."
  },
  {
    title: "Exception Handling",
    code: `try {\n  int x = 5 / 0;\n} catch (DivideByZeroException e) {\n  Console.WriteLine(e.Message);\n}`,
    tags: ["csharp", "exception"],
    description: "Handles division by zero using try-catch block."
  },
  {
    title: "File Write Example",
    code: `File.WriteAllText("file.txt", "Hello World");`,
    tags: ["csharp", "file", "IO"],
    description: "Writes text to a file using `File.WriteAllText` method."
  }
];
export default csharpSnippets