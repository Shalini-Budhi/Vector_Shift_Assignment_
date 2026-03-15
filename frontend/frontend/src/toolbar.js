// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#110826] border-b-2 border-[#4f289d] shadow-lg px-4 py-2">
            <div className="flex flex-wrap gap-3 items-center justify-center">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='api' label='API Fetch' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='filter' label='Filter' />
                <DraggableNode type='condition' label='Condition' />
            </div>
        </div>
    );
};
