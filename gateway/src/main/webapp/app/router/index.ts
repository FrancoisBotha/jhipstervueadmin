import { createRouter as createVueRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import { importRemote } from '@module-federation/utilities';

const Home = () => import('@/core/home/home.vue');
const Error = () => import('@/core/error/error.vue');
import account from '@/router/account';
import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';
import vueAdmin from '@/router/vue-admin';

export const createRouter = () =>
  createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/forbidden',
        name: 'Forbidden',
        component: Error,
        meta: { error403: true },
      },
      {
        path: '/not-found',
        name: 'NotFound',
        component: Error,
        meta: { error404: true },
      },
      ...account,
      ...admin,
      entities,
      ...pages,
      ...vueAdmin
    ],
  });

const router = createRouter();

export const lazyRoutes = Promise.all([
  importRemote<any>({
    url: `./services/demoapp`,
    scope: 'demoapp',
    module: './entities-router',
  })
    .then(demoappRouter => {
      router.addRoute(demoappRouter.default as RouteRecordRaw);
      return demoappRouter.default;
    })
    .catch(error => {
      console.log(`Error loading demoapp menus. Make sure it's up. ${error}`);
    }),
  importRemote<any>({
    url: `./services/store`,
    scope: 'store',
    module: './entities-router',
  })
    .then(storeRouter => {
      router.addRoute(storeRouter.default as RouteRecordRaw);
      return storeRouter.default;
    })
    .catch(error => {
      console.log(`Error loading store menus. Make sure it's up. ${error}`);
    }),
]);

router.beforeResolve(async (to, from, next) => {
  if (!to.matched.length) {
    await lazyRoutes;
    if (router.resolve(to.fullPath).matched.length > 0) {
      next({ path: to.fullPath });
      return;
    }

    next({ path: '/not-found' });
    return;
  }
  next();
});

export default router;
