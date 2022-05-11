import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import IDE from './views/IDE.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/ide', component: IDE, meta: { title: 'IDE'} },
  { path: '/:path(.*)', component: NotFound },
]
