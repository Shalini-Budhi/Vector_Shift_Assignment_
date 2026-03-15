// textNode.js

import { useState, useRef, useEffect } from 'react';
import { BaseNode } from '../BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Variable extraction
  useEffect(() => {
    const regex = /{{\s*([a-zA-Z0-9_]+)\s*}}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(currText)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    setVariables(matches);
  }, [currText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset to calculate new height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  return (
    <BaseNode 
      id={id} 
      title="Text" 
      inputs={variables.map(v => ({ id: `${id}-${v}` }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <div className="flex flex-col gap-2">
        <label className="flex flex-col text-sm text-gray-300">
          Text:
          <textarea 
            ref={textareaRef}
            value={currText} 
            onChange={handleTextChange} 
            className="mt-1 bg-[#1a0f37] rounded-md px-3 py-2 text-white text-sm w-full outline-none focus:ring-1 focus:ring-[#8e6bfa] resize-none overflow-hidden"
            rows={1}
          />
        </label>
      </div>
    </BaseNode>
  );
}
