class Graph {
    constructor() {
        this.nodes = []
    }

    addNode(node) {
        // if node doesn't exist then sets edges to empty array
        if (this.node.hasOwnProperty(node) === false) {
            this.nodes[node] = []
        }
    }

    addEdge(node, edge) {
        // checks graph to see if the node already exists
        if (this.node.hasOwnProperty(node) === true) {
            // checks to see if edge exists, adds edge if it doesn't
            if (this.nodes[node].includes(edge) === false) {
                this.nodes.push(edge)
            }
        }        
    }

}