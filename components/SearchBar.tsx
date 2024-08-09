import React from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
  searchTerm: string;
  onChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onChange }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        placeholder="Search anime by name"
        className="border p-2 rounded w-full"
        value={searchTerm}
        onChange={e => onChange(e.target.value)}
      />
    </motion.div>
  );
};

export default SearchBar;
