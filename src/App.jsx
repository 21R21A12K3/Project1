import React, { useState } from "react";
import Navbar from "./components/Navbar"
import htmlSnippets from "./data/htmlSnippets";
import cssSnippets from "./data/cssSnippets";
import jsSnippets from "./data/jsSnippets";
import tailwindSnippets from "./data/tailwindSnippets";
import pythonSnippets from './data/pythonSnippets ';
import Snippetviewer from "./components/Snippetviewer"; 
import reactSnippets from "./data/reactSnippets";
import javaSnippets from "./data/javaSnippets";
import cppSnippets from "./data/cppSnippets"
import csharpSnippets from "./data/csharpSnippets"
import sqlSnippets from "./data/sqlSnippets"

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("HTML"); 

  const Snippets = {
    HTML: htmlSnippets,
    CSS: cssSnippets,
    JS: jsSnippets,
    Tailwind: tailwindSnippets,
    Python: pythonSnippets,
    React: reactSnippets,
    Java: javaSnippets,
    Cpp : cppSnippets,
    Csharp:csharpSnippets,
    SQL:sqlSnippets
  };

  const [searchTag,setSearchtag]=useState("")
  const allSnippets=[...htmlSnippets,...cssSnippets]
  const filtersnippets=allSnippets.filter(snippet=>snippet.tags.some(tag=>tag.toLowerCase().includes(searchTag.toLowerCase())))

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
            onClick={() => setSelectedLanguage("Tailwind")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            Tailwind
          </button>

          <button
            onClick={() => setSelectedLanguage("JS")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            JavaScript
          </button>

          <button
            onClick={() => setSelectedLanguage("React")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            React
          </button>

          <button
            onClick={() => setSelectedLanguage("Python")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            Python
          </button>

          <button
            onClick={() => setSelectedLanguage("Java")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            Java
          </button>

          <button
            onClick={() => setSelectedLanguage("Cpp")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            C++
          </button>

          <button
            onClick={() => setSelectedLanguage("Csharp")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            C#
          </button>

          <button
            onClick={() => setSelectedLanguage("SQL")}
            className="block mb-4 w-full text-lg font-semibold cursor-pointer"
          >
            SQL
          </button>
        </div>

        <div className="w-3/4 p-4">
          <Navbar onSearch={setSearchtag} />

        <Snippetviewer
          selectedLanguage={selectedLanguage}
          Snippets={Snippets}
          searchTag={searchTag}
        />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
