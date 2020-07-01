module.exports = {
  createSchemaCustomization: ({ actions, schema }) => {
    actions.createTypes([
      schema.buildObjectType({
        name: 'Keycap',
        fields: {
          x: 'Float!',
          y: 'Float!',
          width: {
            type: 'Float!',
            resolve: (source) => source.width || 1
          },
          height: {
            type: 'Float!',
            resolve: (source) => source.height || 1
          },
          color: {
            type: 'String!',
            resolve: (source) => source.color || '#ffffff'
          }
        },
        interfaces: ['Node'],
        extensions: { infer: false }
      })
    ])
  }
}
