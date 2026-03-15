// conditionNode.js
import { BaseNode } from '../BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode 
      id={id} 
      title="Condition" 
      inputs={[{ id: `${id}-value` }]}
      outputs={[{ id: `${id}-true` }, { id: `${id}-false` }]}
    >
      <div className="text-sm text-gray-300 py-1">
        Evaluates input as True or False.
      </div>
    </BaseNode>
  );
}
