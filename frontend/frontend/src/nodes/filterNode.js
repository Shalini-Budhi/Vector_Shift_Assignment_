// filterNode.js
import { useState } from 'react';
import { BaseNode } from '../BaseNode';

export const FilterNode = ({ id, data }) => {
  const [filter, setFilter] = useState(data?.filter || '');

  return (
    <BaseNode 
      id={id} 
      title="Data Filter" 
      inputs={[{ id: `${id}-data` }]}
      outputs={[{ id: `${id}-filtered` }]}
    >
      <label className="flex flex-col text-sm text-gray-300">
        Filter Keyword:
        <input 
          type="text" 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)} 
          className="mt-1 bg-[#1a0f37] rounded-md px-3 py-2 text-white text-sm w-full outline-none focus:ring-1 focus:ring-[#8e6bfa]"
        />
      </label>
    </BaseNode>
  );
}
