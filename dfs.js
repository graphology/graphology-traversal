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
  var attrs = [];
  var n, a;

  function neighborCallback(neighbor, an) {
    if (seen.has(neighbor))
      return;

    stack.push(neighbor);
    attrs.push(an);
  }

  graph.forEachNode(function(node, attr) {
    if (seen.has(node))
      return;

    stack.push(node);
    attrs.push(attr);

    while (stack.length !== 0) {
      n = stack.pop();
      a = attrs.pop();

      seen.add(n);
      callback(n, a);

      graph.forEachOutboundNeighbor(n, neighborCallback);
    }
  });
};
