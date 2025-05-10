import React from "react";

function Snippetviewer({ selectedLanguage, Snippets }) {
  return (
    <div className="p-6 w-4/5">
      <h2 className="text-xl font-bold mb-4">{selectedLanguage} Snippets</h2>
      {Snippets[selectedLanguage]?.map((snippet, index) => (
        <div key={index} className="mb-4 bg-gray-100 p-4 rounded">
          <h3 className="font-semibold mb-2">{snippet.title}</h3>
          <pre className="bg-white p-2 rounded overflow-auto text-sm">
            <code>{snippet.code}</code>
          </pre>
          <div className="mt-2 flex flex-wrap gap-2">
            {snippet.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Snippetviewer;
