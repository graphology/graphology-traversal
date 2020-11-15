/**
 * Graphology Traversal DFS
 * =========================
 *
 * Depth-First Search traversal function.
 */
var isGraph = require('graphology-utils/is-graph');
var TraversalRecord = require('./utils').TraversalRecord;

/**
 * DFS traversal in the given graph using a callback function
 *
 * @param  {any}     value - Target value.
 * @return {boolean}
 */
function dfs(graph, callback) {
  if (!isGraph(graph))
    throw new Error('graphology-traversal/dfs: expecting a graphology instance.');

  if (typeof callback !== 'function')
    throw new Error('graphology-traversal/dfs: given callback is not a function.');

  // Early termination
  if (graph.order === 0 || graph.size === 0)
    return;

  var seen = new Set();
  var stack = [];
  var depth, record;

  function neighborCallback(neighbor, attr) {
    if (seen.has(neighbor))
      return;

    seen.add(neighbor);
    stack.push(new TraversalRecord(neighbor, attr, depth + 1));
  }

  graph.forEachNode(function(node, attr) {
    if (seen.has(node))
      return;

    seen.add(node);
    stack.push(new TraversalRecord(node, attr, 0));

    while (stack.length !== 0) {
      record = stack.pop();
      depth = record.depth;

      callback(record.node, record.attributes, depth);

      graph.forEachOutboundNeighbor(record.node, neighborCallback);
    }
  });
}

exports.dfs = dfs;
