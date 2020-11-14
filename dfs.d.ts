import Graph, {Attributes, NodeIterationCallback} from 'graphology-types';

export default function dfs<N extends Attributes = Attributes>(graph: Graph<N>, callback: NodeIterationCallback<N>): void;
