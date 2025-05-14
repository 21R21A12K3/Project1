import React from "react";

function Navbar({ onSearch }) {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow">
      
      <div className="text-3xl font-bold text-blue-500">
        CodeSPT
      </div>

      
      <div className="flex items-center space-x-10 text-lg font-medium">
        <div style={{ borderRadius: '10px', padding: '10px', backgroundColor: 'black' }}>
          <input
            type="text"
            placeholder="Search by tag..."
            onChange={(e) => onSearch(e.target.value)}
            style={{ padding: '1px', width: '250px' }}
          />
        </div>

        
        <button className="hover:text-blue-400 cursor-pointer">Home</button>
        <button className="hover:text-blue-400 cursor-pointer">About</button>
        
      </div>
    </nav>
  );
}

export default Navbar;
