/**
 * Graphology BFS
 * ===============
 *
 * Breadth-First Search traversal function.
 */
var isGraph = require('graphology-utils/is-graph');
var FixedDeque = require('mnemonist/fixed-deque');

/**
 * BFS traversal in the given graph using a callback function
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
function bfs(graph, callback) {
  if (!isGraph(graph))
    throw new Error('graphology-traversal/bfs: expecting a graphology instance.');

  if (typeof callback !== 'function')
    throw new Error('graphology-traversal/bfs: given callback is not a function.');

  // Early termination
  if (graph.order === 0 || graph.size === 0)
    return;

  var seen = new Set();
  var queue = new FixedDeque(Array, graph.order);
  var r, n, a;

  function neighborCallback(neighbor, an) {
    if (seen.has(neighbor))
      return;

    seen.add(neighbor);
    queue.push([neighbor, an]);
  }

  graph.forEachNode(function(node, attr) {
    if (seen.has(node))
      return;

    seen.add(node);
    queue.push([node, attr]);

    while (queue.size !== 0) {
      r = queue.shift();
      n = r[0];
      a = r[1];

      callback(n, a);

      graph.forEachOutboundNeighbor(n, neighborCallback);
    }
  });
}

exports.bfs = bfs;
