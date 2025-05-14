// reactSnippets.js
const reactSnippets = [
  {
    title: "useState Hook",
    code: `const [count, setCount] = useState(0);`,
    description: "The 'useState' hook allows you to add state to functional components. This example tracks a 'count' variable with its setter function 'setCount'.",
    tags: ["react", "hooks", "state"]
  },
  {
    title: "useEffect Hook (on mount)",
    code: `useEffect(() => {\n  console.log("Component mounted");\n}, []);`,
    description: "The 'useEffect' hook allows you to perform side effects in functional components. This example runs once when the component mounts.",
    tags: ["react", "hooks", "effect"]
  },
  {
    title: "Passing Props",
    code: `<ChildComponent message="Hello" />`,
    description: "Props are used to pass data from a parent component to a child component. In this example, 'message' is passed as a prop to 'ChildComponent'.",
    tags: ["react", "props"]
  },
  {
    title: "Accessing Props in Child",
    code: `function ChildComponent({ message }) {\n  return <p>{message}</p>;\n}`,
    description: "Props are accessed in child components through destructuring. In this example, 'message' is extracted from props and displayed.",
    tags: ["react", "props"]
  },
  {
    title: "Conditional Rendering",
    code: `{isLoggedIn ? <Dashboard /> : <Login />}`,
    description: "Conditional rendering displays different components based on a condition. This example renders 'Dashboard' if 'isLoggedIn' is true, otherwise 'Login'.",
    tags: ["react", "rendering"]
  },
  {
    title: "Event Handling",
    code: `<button onClick={handleClick}>Click Me</button>`,
    description: "Event handling in React is done using the 'onClick' attribute. This example runs the 'handleClick' function when the button is clicked.",
    tags: ["react", "events"]
  },
  {
    title: "Inline Styling",
    code: `<div style={{ color: 'blue' }}>Text</div>`,
    description: "Inline styling in React is done using an object with camelCase properties. This example sets the text color to blue.",
    tags: ["react", "style"]
  },
  {
    title: "List Rendering with map()",
    code: `{items.map(item => <li key={item.id}>{item.name}</li>)}`,
    description: "The 'map' function is used to render lists in React. This example iterates over the 'items' array and creates a list item for each element.",
    tags: ["react", "list", "map"]
  },
  {
    title: "Fragment Usage",
    code: `<>\n  <h1>Title</h1>\n  <p>Description</p>\n</>`,
    description: "Fragments allow you to return multiple elements without adding an extra node to the DOM. This example wraps 'h1' and 'p' inside a fragment.",
    tags: ["react", "fragments"]
  },
  {
    title: "Form Handling",
    code: `<input value={input} onChange={(e) => setInput(e.target.value)} />`,
    description: "Form handling in React involves binding input values to state. This example binds the 'input' value and updates it on change.",
    tags: ["react", "forms"]
  },
  {
    title: "Controlled Component",
    code: `const [value, setValue] = useState("");\n<input value={value} onChange={(e) => setValue(e.target.value)} />`,
    description: "A controlled component in React means the component's state is controlled by React. This example controls the value of the input field.",
    tags: ["react", "forms", "controlled"]
  },
  {
    title: "useEffect with Cleanup",
    code: `useEffect(() => {\n  const timer = setInterval(() => console.log("tick"), 1000);\n  return () => clearInterval(timer);\n}, []);`,
    description: "The 'useEffect' hook can include a cleanup function to run when the component unmounts or before the effect is re-run. This example clears the interval when the component is unmounted.",
    tags: ["react", "effect", "cleanup"]
  },
  {
    title: "useRef Hook",
    code: `const inputRef = useRef(null);\n<input ref={inputRef} />`,
    description: "The 'useRef' hook provides a way to directly access a DOM element. In this example, a reference to the input element is stored in 'inputRef'.",
    tags: ["react", "ref", "hooks"]
  },
  {
    title: "useContext Usage",
    code: `const value = useContext(MyContext);`,
    description: "The 'useContext' hook allows you to access the value of a React context. This example accesses 'MyContext' and stores its value in 'value'.",
    tags: ["react", "context"]
  },
  {
    title: "Creating Context",
    code: `const MyContext = React.createContext();`,
    description: "Context provides a way to pass data through the component tree without passing props down manually at every level. This example creates a new context.",
    tags: ["react", "context"]
  },
  {
    title: "Custom Hook",
    code: `function useCounter() {\n  const [count, setCount] = useState(0);\n  return { count, increment: () => setCount(count + 1) };\n}`,
    description: "Custom hooks are reusable functions that can contain stateful logic. This example creates a custom hook for managing a counter.",
    tags: ["react", "hooks", "custom"]
  },
  {
    title: "Basic Router Setup",
    code: `<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n  </Routes>\n</BrowserRouter>`,
    description: "React Router is used for adding routing to your React app. This example sets up a basic route for the 'Home' component.",
    tags: ["react", "router"]
  },
  {
    title: "Link Component (Navigation)",
    code: `<Link to="/about">About</Link>`,
    description: "The 'Link' component is used to navigate between routes in React Router. This example links to the '/about' route.",
    tags: ["react", "router"]
  },
  {
    title: "Not Found Page",
    code: `<Route path="*" element={<NotFound />} />`,
    description: "In React Router, '*' is used to match all routes that don't exist. This example renders a 'NotFound' component for all unmatched routes.",
    tags: ["react", "router", "404"]
  },
  {
    title: "Lazy Loading a Component",
    code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));\n<Suspense fallback={<div>Loading...</div>}>\n  <LazyComponent />\n</Suspense>`,
    description: "Lazy loading allows you to load components only when needed. This example uses 'React.lazy' and 'Suspense' for lazy loading 'LazyComponent'.",
    tags: ["react", "lazy", "suspense"]
  }
];

export default reactSnippets;
