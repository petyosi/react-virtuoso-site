const fs = require("fs")

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
        allSources: {
          type: `[Source!]!`,
          resolve: (source, args, context, info) => {
            return fs.readdirSync("./src/examples/").map(fileName => {
              const key = fileName.split(".")[0]
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
