// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, selected, title, inputs, outputs, children }) => {
  return (
    <div className={`w-[280px] rounded-xl shadow-xl border-2 ${selected ? 'border-[#8e6bfa]' : 'border-transparent'} bg-[#2f1b63] overflow-hidden flex flex-col font-sans transition-all duration-200`}>
      {/* Handlers */}
      {inputs?.map((input, index) => (
        <Handle
          key={input.id || index}
          type="target"
          position={Position.Left}
          id={input.id}
          style={input.style || { top: `${((index + 1) / (inputs.length + 1)) * 100}%` }}
          className="w-3 h-3 bg-[#b9a3ff] border-2 border-[#2f1b63]"
        />
      ))}
      
      {outputs?.map((output, index) => (
        <Handle
          key={output.id || index}
          type="source"
          position={Position.Right}
          id={output.id}
          style={output.style || { top: `${((index + 1) / (outputs.length + 1)) * 100}%` }}
          className="w-3 h-3 bg-[#b9a3ff] border-2 border-[#2f1b63]"
        />
      ))}

      {/* Header */}
      <div className="bg-[#4f289d] px-4 py-2 flex items-center justify-between">
        <span className="text-white text-sm font-semibold tracking-wide">{title}</span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
};
