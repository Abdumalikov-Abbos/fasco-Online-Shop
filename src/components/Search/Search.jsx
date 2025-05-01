// components/Search/Search.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center border border-gray-300 rounded-lg p-2"
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 rounded-lg"
      />
      <button type="submit" className="ml-2 text-xl">
        🔍
      </button>
    </form>
  );
};

export default Search;
