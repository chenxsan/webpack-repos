module.exports = class MyPlugin {
  constructor() {}
  apply(compiler) {
    compiler.resolverFactory.hooks.resolver
      .for('normal')
      .tap('MyPlugin', (resolver) => {
        resolver.hooks.result.tap('MyPlugin', (result) => {
          return result
        })
      })
  }
}
