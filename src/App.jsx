import React, { useState } from "react";
import Navbar from "./components/Navbar"
import htmlSnippets from "./data/htmlSnippets";
import cssSnippets from "./data/cssSnippets";
import jsSnippets from "./data/jsSnippets";
import tailwindSnippets from "./data/tailwindSnippets";
import Snippetviewer from "./components/Snippetviewer"; 

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("HTML"); 

  const Snippets = {
    HTML: htmlSnippets,
    CSS: cssSnippets,
    JS: jsSnippets,
    Tailwind: tailwindSnippets,
  };

  return (
    <>
    <Navbar/>
    <div className="App">
      <div className="flex">
        <div className="w-1/4 bg-gray-100 p-4 ">
          <button 
            onClick={() => setSelectedLanguage("HTML")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            HTML
          </button>
          <button
            onClick={() => setSelectedLanguage("CSS")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            CSS
          </button>
          <button
            onClick={() => setSelectedLanguage("JS")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            JavaScript
          </button>
          <button
            onClick={() => setSelectedLanguage("Tailwind")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            Tailwind
          </button>
        </div>

        <div className="w-3/4 p-4">
          <Snippetviewer selectedLanguage={selectedLanguage} Snippets={Snippets} />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
