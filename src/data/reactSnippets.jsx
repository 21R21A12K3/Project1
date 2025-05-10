// reactSnippets.js
const reactSnippets = [
    {
      title: "useState Hook",
      code: `const [count, setCount] = useState(0);`,
      tags: ["react", "hooks", "state"]
    },
    {
      title: "useEffect Hook (on mount)",
      code: `useEffect(() => {\n  console.log("Component mounted");\n}, []);`,
      tags: ["react", "hooks", "effect"]
    },
    {
      title: "Passing Props",
      code: `<ChildComponent message="Hello" />`,
      tags: ["react", "props"]
    },
    {
      title: "Accessing Props in Child",
      code: `function ChildComponent({ message }) {\n  return <p>{message}</p>;\n}`,
      tags: ["react", "props"]
    },
    {
      title: "Conditional Rendering",
      code: `{isLoggedIn ? <Dashboard /> : <Login />}`,
      tags: ["react", "rendering"]
    },
    {
      title: "Event Handling",
      code: `<button onClick={handleClick}>Click Me</button>`,
      tags: ["react", "events"]
    },
    {
      title: "Inline Styling",
      code: `<div style={{ color: 'blue' }}>Text</div>`,
      tags: ["react", "style"]
    },
    {
      title: "List Rendering with map()",
      code: `{items.map(item => <li key={item.id}>{item.name}</li>)}`,
      tags: ["react", "list", "map"]
    },
    {
      title: "Fragment Usage",
      code: `<>\n  <h1>Title</h1>\n  <p>Description</p>\n</>`,
      tags: ["react", "fragments"]
    },
    {
      title: "Form Handling",
      code: `<input value={input} onChange={(e) => setInput(e.target.value)} />`,
      tags: ["react", "forms"]
    },
    {
      title: "Controlled Component",
      code: `const [value, setValue] = useState("");\n<input value={value} onChange={(e) => setValue(e.target.value)} />`,
      tags: ["react", "forms", "controlled"]
    },
    {
      title: "useEffect with Cleanup",
      code: `useEffect(() => {\n  const timer = setInterval(() => console.log("tick"), 1000);\n  return () => clearInterval(timer);\n}, []);`,
      tags: ["react", "effect", "cleanup"]
    },
    {
      title: "useRef Hook",
      code: `const inputRef = useRef(null);\n<input ref={inputRef} />`,
      tags: ["react", "ref", "hooks"]
    },
    {
      title: "useContext Usage",
      code: `const value = useContext(MyContext);`,
      tags: ["react", "context"]
    },
    {
      title: "Creating Context",
      code: `const MyContext = React.createContext();`,
      tags: ["react", "context"]
    },
    {
      title: "Custom Hook",
      code: `function useCounter() {\n  const [count, setCount] = useState(0);\n  return { count, increment: () => setCount(count + 1) };\n}`,
      tags: ["react", "hooks", "custom"]
    },
    {
      title: "Basic Router Setup",
      code: `<BrowserRouter>\n  <Routes>\n    <Route path="/" element={<Home />} />\n  </Routes>\n</BrowserRouter>`,
      tags: ["react", "router"]
    },
    {
      title: "Link Component (Navigation)",
      code: `<Link to="/about">About</Link>`,
      tags: ["react", "router"]
    },
    {
      title: "Not Found Page",
      code: `<Route path="*" element={<NotFound />} />`,
      tags: ["react", "router", "404"]
    },
    {
      title: "Lazy Loading a Component",
      code: `const LazyComponent = React.lazy(() => import('./LazyComponent'));\n<Suspense fallback={<div>Loading...</div>}>\n  <LazyComponent />\n</Suspense>`,
      tags: ["react", "lazy", "suspense"]
    }
  ];
  
export default reactSnippets;
  