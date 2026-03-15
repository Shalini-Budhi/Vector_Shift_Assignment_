from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    try:
        pipeline_data = json.loads(pipeline)
    except json.JSONDecodeError:
        return {"error": "Invalid JSON mapping"}

    nodes = pipeline_data.get("nodes", [])
    edges = pipeline_data.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Initialize adjacency list
    adj_list = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        # Ensure nodes exist in adjacency list to avoid KeyError
        if source not in adj_list: adj_list[source] = []
        if target not in adj_list: adj_list[target] = []
        adj_list[source].append(target)

    # DFS to check for cycles
    def is_cyclic():
        visited = set()
        rec_stack = set()

        def dfs(node_id):
            visited.add(node_id)
            rec_stack.add(node_id)

            for neighbor in adj_list.get(node_id, []):
                if neighbor not in visited:
                    if dfs(neighbor):
                        return True
                elif neighbor in rec_stack:
                    return True

            rec_stack.remove(node_id)
            return False

        for node_id in adj_list:
            if node_id not in visited:
                if dfs(node_id):
                    return True
        return False

    is_dag = not is_cyclic()

    # Check if the graph is weakly connected
    def is_weakly_connected():
        if not nodes:
            return True
        undirected_adj = {node["id"]: [] for node in nodes}
        for edge in edges:
            source = edge.get("source")
            target = edge.get("target")
            if source in undirected_adj and target in undirected_adj:
                undirected_adj[source].append(target)
                undirected_adj[target].append(source)
                
        visited = set()
        def dfs_undirected(n):
            visited.add(n)
            for neighbor in undirected_adj.get(n, []):
                if neighbor not in visited:
                    dfs_undirected(neighbor)
                    
        # Start from the first node
        dfs_undirected(nodes[0]["id"])
        return len(visited) == len(nodes)
        
    is_connected = is_weakly_connected()

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
        "is_connected": is_connected
    }
