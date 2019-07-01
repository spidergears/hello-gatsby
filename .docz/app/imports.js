export const imports = {
  'src/components/header.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-components-header" */ 'src/components/header.mdx'
    ),
}
