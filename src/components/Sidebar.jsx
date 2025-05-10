import React from 'react';

const languages = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Routing'];

function Sidebar({ onSelectLanguage }) {
  return (
    <div className="w-1/5 bg-gray-100 h-screen p-4">
      <ul className="space-y-4">
        {languages.map((lang, idx) => (
          <li
            key={idx}
            className="cursor-pointer text-lg font-semibold hover:text-blue-600"
            onClick={() => onSelectLanguage(lang)}
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
