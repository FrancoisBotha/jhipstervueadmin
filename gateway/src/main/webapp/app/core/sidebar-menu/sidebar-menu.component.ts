// VueSidebarMenu.vue
import { computed, defineAsyncComponent, defineComponent, inject, ref, type Ref } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';
import type AccountService from '@/account/account.service';
import EntitiesMenu from '@/entities/entities-menu.vue';
import { importRemote } from '@module-federation/utilities';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'SidebarMenu',
  components: {
    'entities-menu': EntitiesMenu,
    'demoapp-entities-menu': defineAsyncComponent(() => {
      return importRemote<any>({
        url: `./services/demoapp`,
        scope: 'demoapp',
        module: './entities-menu',
      }).catch(() => import('@/core/error/error-loading.vue'));
    }),
    'store-menu': defineAsyncComponent(() => {
      return importRemote<any>({
        url: `./services/store`,
        scope: 'store',
        module: './entities-menu',
      }).catch(() => import('@/core/error/error-loading.vue'));
    }),
    JhiFooter: JhiFooter
  },
  setup() {
    const accountService = inject<AccountService>('accountService');


    const router = useRouter();
    const store = useStore();

    const version = 'v' + APP_VERSION;
    const hasAnyAuthorityValues: Ref<any> = ref({});
    const openAPIEnabled = computed(() => store.activeProfiles.indexOf('api-docs') > -1);
    const inProduction = computed(() => store.activeProfiles.indexOf('prod') > -1);
    const authenticated = computed(() => store.authenticated);

    const subIsActive = (input: string | string[]) => {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return router.currentRoute.value.path.indexOf(path) === 0; // current path starts with this path string
      });
    };

    const isActive = ref(true);

    const toggleSidebar = () => {
      isActive.value = !isActive.value;
    };

    const oosVisible = ref(true);

    const toggleModuleOO = () => {
      oosVisible.value = !oosVisible.value;
    };

    const ooIcon = computed(() => {
      return oosVisible.value ? 'chevron-up' : 'chevron-down';
    });


    const entitiesVisible = ref(true);

    const toggleEntities = () => {
      entitiesVisible.value = !entitiesVisible.value;
    };

    const adminVisible = ref(true);

    const toggleAdmin = () => {
      adminVisible.value = !adminVisible.value;
    };
    
    const logout = async () => {
      localStorage.removeItem('jhi-authenticationToken');
      sessionStorage.removeItem('jhi-authenticationToken');
      store.logout();
      if (router.currentRoute.value.path !== '/') {
        router.push('/');
      }
    };

    const adminIcon = computed(() => {
      return adminVisible.value ? 'chevron-up' : 'chevron-down';
    });

    const entitiesIcon = computed(() => {
      return entitiesVisible.value ? 'chevron-up' : 'chevron-down';
    });

    return {
      oosVisible,
      toggleModuleOO,
      ooIcon,
      toggleAdmin,
      adminVisible,
      adminIcon,
      entitiesIcon,
      entitiesVisible,
      toggleEntities,
      logout,
      subIsActive,
      accountService,
      version,
      hasAnyAuthorityValues,
      openAPIEnabled,
      inProduction,
      authenticated,
      isActive,
      toggleSidebar,
    };
  },
  methods: {
    hasAnyAuthority(authorities: any): boolean {
      this.accountService?.hasAnyAuthorityAndCheckAuth(authorities).then((value: any) => {
        if (this.hasAnyAuthorityValues[authorities] !== value) {
          this.hasAnyAuthorityValues = { ...this.hasAnyAuthorityValues, [authorities]: value };
        }
      });
      return this.hasAnyAuthorityValues[authorities] ?? false;
    },
  },
});

function alert(arg0: number) {
  throw new Error('Function not implemented.');
}
