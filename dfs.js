/**
 * Graphology DFS
 * ===============
 *
 * Depth-First Search traversal function.
 */
var isGraph = require('graphology-utils/is-graph');

/**
 * DFS traversal in the given graph using a callback function
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
module.exports = function dfs(graph, callback) {
  if (!isGraph(graph))
    throw new Error('graphology-traversal/dfs: expecting a graphology instance.');

  if (typeof callback !== 'function')
    throw new Error('graphology-traversal/dfs: given callback is not a function.');

  var seen = new Set();
  var stack = [];
  var r, n, a;

  function neighborCallback(neighbor, an) {
    if (seen.has(neighbor))
      return;

    seen.add(neighbor);
    stack.push([neighbor, an]);
  }

  graph.forEachNode(function(node, attr) {
    if (seen.has(node))
      return;

    seen.add(node);
    stack.push([node, attr]);

    while (stack.length !== 0) {
      r = stack.pop();
      n = r[0];
      a = r[1];

      callback(n, a);

      graph.forEachOutboundNeighbor(n, neighborCallback);
    }
  });
};
