import React from "react";
import Select from "react-select";
import { motion } from "framer-motion";

interface CategorySelectProps {
  categories: Category[];
  onChange: (selectedOptions: Category[]) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ categories, onChange }) => {
  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Select
        isMulti
        options={categories}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Select categories"
        onChange={selectedOptions => onChange(selectedOptions as Category[])}
      />
    </motion.div>
  );
};

export default CategorySelect;
