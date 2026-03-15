// mathNode.js
import { useState } from 'react';
import { BaseNode } from '../BaseNode';

export const MathNode = ({ id, data }) => {
  const [operator, setOperator] = useState(data?.operator || 'Add');

  return (
    <BaseNode
      id={id}
      title="Math"
      inputs={[{ id: `${id}-a` }, { id: `${id}-b` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm text-gray-300">
          Operation:
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            className="mt-1 bg-[#1a0f37] rounded-md px-3 py-2 text-white text-sm w-full outline-none focus:ring-1 focus:ring-[#8e6bfa]"
          >
            <option value="Add">Add</option>
            <option value="Subtract">Subtract</option>
            <option value="Multiply">Multiply</option>
            <option value="Divide">Divide</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
