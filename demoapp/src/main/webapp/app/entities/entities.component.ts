import { defineComponent, provide } from 'vue';

import BlogService from './demoapp/blog/blog.service';
import PostService from './demoapp/post/post.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Entities',
  setup() {
    provide('blogService', () => new BlogService());
    provide('postService', () => new PostService());
    // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
  },
});
