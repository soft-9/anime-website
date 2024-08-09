import React from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';

// Define Category type for react-select
interface Category {
  value: string;
  label: string;
}

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
        instanceId="category-select"
        isMulti
        options={categories}
        className="basic-multi-select"
        classNamePrefix="select"
        placeholder="Select categories"
        onChange={(selectedOptions) => {
          // Ensure selectedOptions is not undefined and cast it to Category[]
          onChange(selectedOptions ? (selectedOptions as Category[]) : []);
        }}
      />
    </motion.div>
  );
};

export default CategorySelect;
