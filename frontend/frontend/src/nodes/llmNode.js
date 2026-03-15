// llmNode.js

import { BaseNode } from '../BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputs={[
        { id: `${id}-response` }
      ]}
    >
      <div className="text-sm text-gray-300 py-2">
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
