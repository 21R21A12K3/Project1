const cppSnippets = [
  {
    title: "Hello World",
    code: `#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, World!";\n  return 0;\n}`,
    tags: ["c++", "basics", "output"],
    description: "A basic C++ program that prints 'Hello, World!' to the console."
  },
  {
    title: "For Loop",
    code: `for (int i = 0; i < 5; i++) {\n  cout << i << endl;\n}`,
    tags: ["c++", "loops", "for"],
    description: "Prints numbers from 0 to 4 using a for loop."
  },
  {
    title: "Function Definition",
    code: `int add(int a, int b) {\n  return a + b;\n}`,
    tags: ["c++", "function"],
    description: "Defines a function that returns the sum of two integers."
  },
  {
    title: "If Statement",
    code: `if (x > 0) {\n  cout << "Positive";\n} else {\n  cout << "Non-positive";\n}`,
    tags: ["c++", "conditional"],
    description: "Checks if a number is positive or not."
  },
  {
    title: "Array Declaration",
    code: `int arr[5] = {1, 2, 3, 4, 5};`,
    tags: ["c++", "array"],
    description: "Declares and initializes an integer array with 5 elements."
  },
  {
    title: "Class Definition",
    code: `class Car {\npublic:\n  string brand;\n  void honk() {\n    cout << "Beep!";\n  }\n};`,
    tags: ["c++", "class", "OOP"],
    description: "Defines a simple class with a method and a data member."
  },
  {
    title: "Constructor",
    code: `class Car {\npublic:\n  Car() {\n    cout << "Car created";\n  }\n};`,
    tags: ["c++", "constructor"],
    description: "Demonstrates the use of a constructor in a class."
  },
  {
    title: "Vector Example",
    code: `#include <vector>\nvector<int> nums = {1, 2, 3};`,
    tags: ["c++", "vector", "STL"],
    description: "Declares and initializes a vector using the Standard Template Library."
  },
  {
    title: "Pointer Usage",
    code: `int x = 10;\nint *ptr = &x;\ncout << *ptr;`,
    tags: ["c++", "pointer"],
    description: "Creates a pointer to an integer and accesses its value."
  },
  {
    title: "File Input/Output",
    code: `ofstream out("file.txt");\nout << "Hello";\nout.close();`,
    tags: ["c++", "file", "IO"],
    description: "Writes text to a file using file output stream."
  }
];
export default cppSnippets;