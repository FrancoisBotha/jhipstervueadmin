import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore
const Entities = () => import('@/entities/entities.vue');

const Blog = () => import('@/entities/demoapp/blog/blog.vue');
const BlogUpdate = () => import('@/entities/demoapp/blog/blog-update.vue');
const BlogDetails = () => import('@/entities/demoapp/blog/blog-details.vue');

const Post = () => import('@/entities/demoapp/post/post.vue');
const PostUpdate = () => import('@/entities/demoapp/post/post-update.vue');
const PostDetails = () => import('@/entities/demoapp/post/post-details.vue');

// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default {
  path: '/demoapp',
  component: Entities,
  children: [
    {
      path: 'blog',
      name: 'Blog',
      component: Blog,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'blog/new',
      name: 'BlogCreate',
      component: BlogUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'blog/:blogId/edit',
      name: 'BlogEdit',
      component: BlogUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'blog/:blogId/view',
      name: 'BlogView',
      component: BlogDetails,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'post',
      name: 'Post',
      component: Post,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'post/new',
      name: 'PostCreate',
      component: PostUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'post/:postId/edit',
      name: 'PostEdit',
      component: PostUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'post/:postId/view',
      name: 'PostView',
      component: PostDetails,
      meta: { authorities: [Authority.USER] },
    },
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ],
};
