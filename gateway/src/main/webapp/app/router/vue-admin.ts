/* tslint:disable */
// prettier-ignore

const VueAdminIcons = () => import('@/pages/vue-admin/icons/icons.vue');
const VueAdminComponents = () => import('@/pages/vue-admin/components/components.vue');
const VueAdminTablesBootstrap = () => import('@/pages/vue-admin/tables/bootstrap/bootstrap-table.vue');
const VueAdminTablesTabulator = () => import('@/pages/vue-admin/tables/tabulator/tabulator-table.vue');
const VueAdminCharts = () => import('@/pages/vue-admin/charts/charts.vue');

export default [
  {
    path: '/vue-admin-icons',
    name: 'VueAdminIcons',
    component: VueAdminIcons,
  }, 
  {
    path: '/vue-admin-components',
    name: 'VueAdminComponents',
    component: VueAdminComponents,
  }, 
  {
    path: '/vue-admin-tables-bootstrap',
    name: 'VueAdminTablesBootstrap',
    component: VueAdminTablesBootstrap,
  },
  {
    path: '/vue-admin-tables-tabulator',
    name: 'VueAdminTablesTabulator',
    component: VueAdminTablesTabulator,
  },
  {
    path: '/vue-admin-charts',
    name: 'VueAdminCharts',
    component: VueAdminCharts,
  }
]
