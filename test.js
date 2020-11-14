/**
 * Graphology Utils Unit Tests
 * ============================
 */
var assert = require('assert'),
    Graph = require('graphology');

var dfs = require('./dfs.js');

describe('graphology-traversal', function() {
  describe('dfs', function() {

    it('should throw if given invalid arguments.', function() {
      assert.throws(function() {
        dfs(null);
      }, /graph/);

      assert.throws(function() {
        dfs(new Graph(), null);
      }, /function/);
    });

    it('should traverse the graph correctly.', function() {
      var graph = new Graph();

      graph.mergeEdge(1, 2);
      graph.mergeEdge(1, 3);
      graph.mergeEdge(2, 4);
      graph.mergeEdge(4, 3);

      graph.addNode(5, {hello: 'world'});
      graph.mergeEdge(6, 7);
      graph.mergeEdge(7, 8);
      graph.mergeEdge(8, 6);

      var path = [];

      dfs(graph, function(node, attr) {
        if (node === '5')
          assert.deepStrictEqual(attr, {hello: 'world'});
        else
          assert.deepStrictEqual(attr, {});

        path.push(node);
      });

      assert.deepStrictEqual(path, [
        '1', '3', '2', '4', '5', '6', '7', '8'
      ]);
    });
  });
});
