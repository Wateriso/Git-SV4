
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/category"
  },
  {
    "renderMode": 2,
    "route": "/product"
  },
  {
    "renderMode": 2,
    "route": "/user"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6159, hash: '514df944fe1d467ca63438683da7916ff95f7385ec2a5eea671d9229b8d34349', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6677, hash: '0ab3c821e147c3bae568da741a3ad43750fbdba17b6cdc95203a411844f3cd7d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10309, hash: '754c5594f736bc2602d228b47585e7f43d83e384ba273eb77922aabd6eb710de', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 10309, hash: '754c5594f736bc2602d228b47585e7f43d83e384ba273eb77922aabd6eb710de', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 17348, hash: '2c8a16c9bad39009233b55061bd40ad2383ee2cb14d24b1da40c75793f2a679f', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'category/index.html': {size: 12547, hash: '9203dd7e5eb23f09873bc896ec560daaebdf4e6bdfeeda3a7269d29074b67c66', text: () => import('./assets-chunks/category_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 21494, hash: '7892156ab1ec31e479a5a48b8a3d6d3865b1e0138e41b29a3be64678ded25365', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'user/index.html': {size: 13379, hash: 'df0ebe17732852b92a6d254a5db1802a8477a6b9100c95888a78e7fca07eacb7', text: () => import('./assets-chunks/user_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
