import Graph, {Attributes} from 'graphology-types';
import {TraversalCallback} from './types';

export function bfs<N extends Attributes = Attributes>(graph: Graph<N>, callback: TraversalCallback<N>): void;
