/* tslint:disable */
// prettier-ignore

const VueAdminIcons = () => import('@/pages/vue-admin/icons/icons.vue');
const VueAdminTablesBootstrap = () => import('@/pages/vue-admin/tables/bootstrap/bootstrap-table.vue');
const VueAdminTablesTabulator = () => import('@/pages/vue-admin/tables/tabulator/tabulator-table.vue');

export default [
  {
    path: '/vue-admin-icons',
    name: 'VueAdminIcons',
    component: VueAdminIcons,
  }, 
  {
    path: '/vue-admin-tables-bootstrap',
    name: 'VueAdminTablesBootstrap',
    component: VueAdminTablesBootstrap,
  }
  {
    path: '/vue-admin-tables-tabulator',
    name: 'VueAdminTablesTabulator',
    component: VueAdminTablesTabulator,
  }
]
