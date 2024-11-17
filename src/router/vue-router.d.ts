import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    ariaLabel?: string
    iconName?: string
  }
}
