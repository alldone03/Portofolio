

import '@xyflow/react/dist/style.css';

import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';

const initialNodes = [
    { id: 1, position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: 2, position: { x: 0, y: 100 }, data: { label: '2' } },
    { id: 3, position: { x: 0, y: 200 }, data: { label: '3' } },
];
const initialEdges = [
    // { id: 'e1-2', source: '1', target: '2' },


];

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
        (params) => setEdges((eds) => { return addEdge(params, eds); }),

        [setEdges],

    );





    return (
        <>
            <button onClick={() => { setNodes([...initialNodes, { id: 4, position: { x: 0, y: 300 }, data: { label: '4' } },]) }} className='btn'>+</button>
            <div style={{ width: '100vw', height: '100vh' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                />
            </div>
        </>
    );
}