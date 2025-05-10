import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow">
      <div className="text-3xl font-bold text-blue-500">
        CodeSPT
      </div>

      <div className="flex-1 mx-10">
        <input
          type="text"
          placeholder="Search code snippets..."
          className="w-30px p-2  rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-x-10 text-lg font-medium ">
        <button className="hover:text-blue-400 cursor-pointer">Home</button>
        <button className="hover:text-blue-400 cursor-pointer">About</button>
        <button className="hover:text-blue-400 cursor-pointer">Login</button>
        <button className="hover:text-blue-400 cursor-pointer">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
