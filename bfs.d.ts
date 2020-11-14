import Graph, {Attributes, NodeIterationCallback} from 'graphology-types';

export function bfs<N extends Attributes = Attributes>(graph: Graph<N>, callback: NodeIterationCallback<N>): void;
