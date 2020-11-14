import Graph, {Attributes, NodeIterationCallback} from 'graphology-types';

export function dfs<N extends Attributes = Attributes>(graph: Graph<N>, callback: NodeIterationCallback<N>): void;
