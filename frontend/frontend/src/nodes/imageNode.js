// imageNode.js
import { BaseNode } from '../BaseNode';

export const ImageNode = ({ id }) => {
  return (
    <BaseNode 
      id={id} 
      title="Image Processor" 
      inputs={[{ id: `${id}-src` }]}
      outputs={[{ id: `${id}-result` }]}
    >
      <div className="text-sm text-gray-300 py-1">
        Applies filters to an uploaded image.
      </div>
    </BaseNode>
  );
}
