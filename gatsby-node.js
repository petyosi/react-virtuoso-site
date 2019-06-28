const fs = require('fs')

module.exports = {
  sourceNodes: ({ actions }) => {
    const { createTypes } = actions
    const typeDefs = `
    type Source {
      key: String
      source: String
    }
  `
    createTypes(typeDefs)
  },

  createResolvers: ({ createResolvers }) => {
    const resolvers = {
      Query: {
        readme: {
          type: `String!`,
          resolve: () => {
            return fs
              .readFileSync(`./src/content/README.md`)
              .toString()
          },
        },
        virtuosoApi: {
          type: `String!`,
          resolve: () => {
            return fs
              .readFileSync(`./src/content/virtuoso-api.md`)
              .toString()
          },
        },
        groupedVirtuosoApi: {
          type: `String!`,
          resolve: () => {
            return fs
              .readFileSync(`./src/content/grouped-virtuoso-api.md`)
              .toString()
          },
        },
        virtuosoGridApi: {
          type: `String!`,
          resolve: () => {
            return fs
              .readFileSync(`./src/content/virtuoso-grid-api.md`)
              .toString()
          },
        },

        allSources: {
          type: `[Source!]!`,
          resolve: () => {
            return fs.readdirSync('./src/examples/').map(fileName => {
              const key = fileName.split('.')[0]
              const source = fs
                .readFileSync(`./src/examples/${fileName}`)
                .toString()

              return {
                key,
                source,
              }
            })
          },
        },
      },
    }
    createResolvers(resolvers)
  },
}
