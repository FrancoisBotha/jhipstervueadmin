/* tslint:disable */
// prettier-ignore

// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here
const Page1 = () => import('@/pages/page1/page-1.vue');
const Page2 = () => import('@/pages/page2/page-2.vue');
const Page3 = () => import('@/pages/page3/page-3.vue');


export default [
  // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  {
    path: '/page1',
    name: 'Page1',
    component: Page1,
  }, 
  {
    path: '/page2',
    name: 'Page2',
    component: Page2,
  },
  {
    path: '/page3',
    name: 'Page3',
    component: Page3,
  },
]
