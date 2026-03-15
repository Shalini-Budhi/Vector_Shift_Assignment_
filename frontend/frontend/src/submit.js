// submit.js

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify({ nodes, edges }));
            
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            
            alert(
                `Pipeline Analysis\n\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag}\n` + 
                `Is Connected: ${data.is_connected}`
            );
        } catch (error) {
            console.error(error);
            alert("Error analyzing pipeline.");
        }
    }

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center pointer-events-none">
            <button 
                type="button" 
                onClick={handleSubmit} 
                className="pointer-events-auto bg-[#512da8] hover:bg-[#6b3fd6] text-white px-8 py-3 rounded-full font-bold tracking-wide shadow-[0_0_15px_rgba(113,63,214,0.6)] hover:shadow-[0_0_25px_rgba(142,107,250,0.8)] transition-all border-2 border-[#8e6bfa]"
            >
                Submit
            </button>
        </div>
    );
}
