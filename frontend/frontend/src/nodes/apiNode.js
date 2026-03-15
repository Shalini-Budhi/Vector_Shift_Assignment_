// apiNode.js
import { useState } from 'react';
import { BaseNode } from '../BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');

  return (
    <BaseNode 
      id={id} 
      title="API Fetch" 
      inputs={[{ id: `${id}-url` }]}
      outputs={[{ id: `${id}-data` }, { id: `${id}-error` }]}
    >
      <label className="flex flex-col text-sm text-gray-300">
        Endpoint URL:
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          className="mt-1 bg-[#1a0f37] rounded-md px-3 py-2 text-white text-sm w-full outline-none focus:ring-1 focus:ring-[#8e6bfa]"
        />
      </label>
    </BaseNode>
  );
}
