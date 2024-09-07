import React, { useState, useTransition } from "react";

const FilterComponent: React.FC<{ data: string[] }> = ({ data }) => {
  const [filterText, setFilterText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [filteredData, setFilteredData] = useState(data);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setFilterText(text);
    startTransition(() => {
      setFilteredData(
        data.filter((item) => item.toLowerCase().includes(text.toLowerCase()))
      );
    });
  };

  return (
    <div>
      <h3>Filter Animals</h3>
      <input
        type="text"
        value={filterText}
        onChange={handleFilter}
        placeholder="Type to filter..."
      />
      {isPending ? (
        <div>Loading filtered data...</div>
      ) : (
        <ul>
          {filteredData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterComponent;
