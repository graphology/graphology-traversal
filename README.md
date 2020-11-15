[![Build Status](https://travis-ci.org/graphology/graphology-traversal.svg)](https://travis-ci.org/graphology/graphology-traversal)

# Graphology Traversal

Miscellaneous traversal functions to be used with [`graphology`](https://graphology.github.io).

## Installation

```
npm install graphology-traversal
```

## Usage

* [bfs](#bfs)
* [dfs](#dfs)

### bfs

Perform a BFS (Breadth-First Search) over the given graph using a callback.

```js
import {bfs} from 'graphology-traversal';
// Alternatively, to only load the relevant code
import {bfs} from 'graphology-traversal/bfs';

bfs(graph, function(node, attr, depth) {
  console.log(node, attr, depth);
});
```

*Arguments*

* **graph** *Graph*: a graphology instance.
* **callback** *function*: iteration callback taking the traversed node, its attributes and the traversal's depth.

### dfs

Perform a DFS (Depth-First Search) over the given graph using a callback.

```js
import {dfs} from 'graphology-traversal';
// Alternatively, to only load the relevant code
import {dfs} from 'graphology-traversal/dfs';

dfs(graph, function(node, attr, depth) {
  console.log(node, attr, depth);
});
```

*Arguments*

* **graph** *Graph*: a graphology instance.
* **callback** *function*: iteration callback taking the traversed node, its attributes and the traversal's depth.
