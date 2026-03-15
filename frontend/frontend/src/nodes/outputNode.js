// outputNode.js

import { useState } from 'react';
import { BaseNode } from '../BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode 
      id={id} 
      title="Output" 
      inputs={[{ id: `${id}-value` }]}
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm text-gray-300">
          Name:
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
            className="mt-1 bg-[#1a0f37] rounded-md px-3 py-2 text-white text-sm w-full outline-none focus:ring-1 focus:ring-[#8e6bfa]"
          />
        </label>
        <label className="flex flex-col text-sm text-gray-300">
          Type:
          <select 
            value={outputType} 
            onChange={handleTypeChange}
            className="mt-1 bg-[#1a0f37] rounded-md px-3 py-2 text-white text-sm w-full outline-none focus:ring-1 focus:ring-[#8e6bfa]"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
