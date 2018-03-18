const forEach = require('lodash/forEach')

function validateGraph (graph) {
  const failures = []

  forEach(graph.relationships, r => {
    const failure = {
      type: 'relationship',
      content: r,
      errors: []
    }

    if (!graph.nodes[r.start]) {
      failure.errors.push(`Start Node "${r.start}" does not exist.`)
    }

    if (!graph.nodes[r.end]) {
      failure.errors.push(`End Node "${r.end}" does not exist.`)
    }

    if (failure.errors.length > 0) {
      failures.push(failure)
    }
  })

  return Promise.resolve(failures)
}

module.exports = validateGraph
