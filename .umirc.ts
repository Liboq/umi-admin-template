import { defineConfig } from '@umijs/max';
import { route } from './route';
export default defineConfig({
  antd: {
    // configProvider
    // babel-plugin-import
    import: false,
    // less or css, default less
    style: 'less',
    // shortcut of `configProvider.theme`
    // use to configure theme token, antd v5 only
    theme: {},
    // antd <App /> valid for version 5.1.0 or higher, default: undefined
    appConfig: {},
    // Add StyleProvider for legacy browsers
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'pikachu',
  },
  routes: route,
  npmClient: 'pnpm',
});
