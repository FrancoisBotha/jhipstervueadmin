import { type ComputedRef, defineComponent, provide, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import Navbar from '@/core/navbar/navbar.vue';
import SidebarMenu from '@/core/sidebar-menu/sidebar-menu.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import Home from '@/core/home/home.vue';

import { useAlertService } from '@/shared/alert/alert.service';

import '@/shared/config/dayjs';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'App',
  components: {
    ribbon: Ribbon,
    'navbar': Navbar,
    'sidebar-menu': SidebarMenu,
    'login-form': LoginForm,
    'home': Home
  },
  setup() {
    provide('alertService', useAlertService());
    const authenticated = inject<ComputedRef<boolean>>('authenticated');

    return {
      authenticated,
      t$: useI18n().t,
    };
  },
});
