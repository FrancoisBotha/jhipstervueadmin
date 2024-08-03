import { defineComponent} from 'vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Page-1',
  components: {
  },
  setup() {
    console.log("Page 1 component setup")
  },
  methods: {
  },
});
