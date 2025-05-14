const javaSnippets = [
  {
    title: "Hello World",
    code: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
    tags: ["java", "basics", "main"],
    description: "Basic structure of a Java program with the main method."
  },
  {
    title: "If-Else Condition",
    code: `int number = 10;\nif (number > 0) {\n  System.out.println("Positive");\n} else {\n  System.out.println("Negative or Zero");\n}`,
    tags: ["java", "conditional", "if-else"],
    description: "Conditional logic using if-else statement."
  },
  {
    title: "For Loop",
    code: `for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}`,
    tags: ["java", "loop", "for"],
    description: "Standard for loop printing numbers from 0 to 4."
  },
  {
    title: "Array Declaration",
    code: `int[] numbers = {1, 2, 3, 4};\nSystem.out.println(numbers[0]);`,
    tags: ["java", "array"],
    description: "Declaring and accessing elements of an array."
  },
  {
    title: "Method Definition",
    code: `public static int add(int a, int b) {\n  return a + b;\n}`,
    tags: ["java", "method"],
    description: "Creating a simple method that adds two integers."
  },
  {
    title: "Class and Object",
    code: `class Car {\n  String color = "Red";\n}\n\nCar myCar = new Car();\nSystem.out.println(myCar.color);`,
    tags: ["java", "oop", "class"],
    description: "Defining a class and creating an object in Java."
  },
  {
    title: "Try-Catch Block",
    code: `try {\n  int result = 10 / 0;\n} catch (ArithmeticException e) {\n  System.out.println("Cannot divide by zero.");\n}`,
    tags: ["java", "exception", "try-catch"],
    description: "Basic example of exception handling."
  },
  {
    title: "Switch Statement",
    code: `int day = 2;\nswitch(day) {\n  case 1:\n    System.out.println("Monday");\n    break;\n  case 2:\n    System.out.println("Tuesday");\n    break;\n}`,
    tags: ["java", "switch"],
    description: "Using switch-case to handle multiple conditions."
  },
  {
    title: "Inheritance Example",
    code: `class Animal {\n  void sound() { System.out.println("Animal sound"); }\n}\nclass Dog extends Animal {\n  void sound() { System.out.println("Bark"); }\n}`,
    tags: ["java", "inheritance", "oop"],
    description: "Basic inheritance in Java using method overriding."
  },
  {
    title: "ArrayList Usage",
    code: `ArrayList<String> list = new ArrayList<>();\nlist.add("Item");\nSystem.out.println(list.get(0));`,
    tags: ["java", "arraylist", "collections"],
    description: "Creating and using an ArrayList."
  }
];

export default javaSnippets;
