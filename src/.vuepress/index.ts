export const withInstall = <T>(component: T, alias?: string): T & Plugin => {
  const comp = component as any
  comp.install = (app) => {
    app.component(comp.name || comp.displayName, component)
    if (alias) {
      app.config.globalProperties[alias] = component
    }
  }
  return component as T & Plugin
}
