import { computed, defineAsyncComponent, defineComponent, inject, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { importRemote } from '@module-federation/utilities';
import type LoginService from '@/account/login.service';
import type AccountService from '@/account/account.service';
import languages from '@/shared/config/languages';
import EntitiesMenu from '@/entities/entities-menu.vue';

import { useStore } from '@/store';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Page-2',
  components: {
  },
  setup() {
    console.log("Page 2 component setup")
  },
  methods: {
  },
});
