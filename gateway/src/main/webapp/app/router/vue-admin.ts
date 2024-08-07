/* tslint:disable */
// prettier-ignore

const VueAdminIcons = () => import('@/pages/vue-admin/icons/icons.vue');
const VueAdminTables = () => import('@/pages/vue-admin/tables/tables.vue');

export default [
  {
    path: '/vue-admin-icons',
    name: 'VueAdminIcons',
    component: VueAdminIcons,
  }, 
  {
    path: '/vue-admin-tables',
    name: 'VueAdminTables',
    component: VueAdminTables,
  }
]
