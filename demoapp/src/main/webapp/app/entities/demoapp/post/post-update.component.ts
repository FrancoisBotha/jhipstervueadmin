import { computed, defineComponent, inject, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';

import PostService from './post.service';
import useDataUtils from '@/shared/data/data-utils.service';
import { useValidation, useDateFormat } from '@/shared/composables';
import { useAlertService } from '@/shared/alert/alert.service';

import BlogService from '@/entities/demoapp/blog/blog.service';
import { type IBlog } from '@/shared/model/demoapp/blog.model';
import { type IPost, Post } from '@/shared/model/demoapp/post.model';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'PostUpdate',
  setup() {
    const postService = inject('postService', () => new PostService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const post: Ref<IPost> = ref(new Post());

    const blogService = inject('blogService', () => new BlogService());

    const blogs: Ref<IBlog[]> = ref([]);
    const isSaving = ref(false);
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'en'), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);

    const retrievePost = async postId => {
      try {
        const res = await postService().find(postId);
        res.date = new Date(res.date);
        post.value = res;
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    if (route.params?.postId) {
      retrievePost(route.params.postId);
    }

    const initRelationships = () => {
      blogService()
        .retrieve()
        .then(res => {
          blogs.value = res.data;
        });
    };

    initRelationships();

    const dataUtils = useDataUtils();

    const { t: t$ } = useI18n();
    const validations = useValidation();
    const validationRules = {
      title: {
        required: validations.required(t$('entity.validation.required').toString()),
      },
      content: {
        required: validations.required(t$('entity.validation.required').toString()),
      },
      date: {
        required: validations.required(t$('entity.validation.required').toString()),
      },
      blog: {},
    };
    const v$ = useVuelidate(validationRules, post as any);
    v$.value.$validate();

    return {
      postService,
      alertService,
      post,
      previousState,
      isSaving,
      currentLanguage,
      blogs,
      ...dataUtils,
      v$,
      ...useDateFormat({ entityRef: post }),
      t$,
    };
  },
  created(): void {},
  methods: {
    save(): void {
      this.isSaving = true;
      if (this.post.id) {
        this.postService()
          .update(this.post)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showInfo(this.t$('demoappApp.demoappPost.updated', { param: param.id }));
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      } else {
        this.postService()
          .create(this.post)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showSuccess(this.t$('demoappApp.demoappPost.created', { param: param.id }).toString());
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      }
    },
  },
});
