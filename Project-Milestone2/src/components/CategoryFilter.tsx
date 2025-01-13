import React from 'react';

const CategoryFilter: React.FC<{ categories: string[], onChange: (category: string) => void }> = ({ categories, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
