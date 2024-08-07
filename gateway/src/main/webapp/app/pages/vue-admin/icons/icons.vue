<template>
    <div>
      <h1>Icons</h1>
      <span>See:  <a href="https://fontawesome.com/search?q=icon&o=r&m=free">https://fontawesome.com/search?q=icon&o=r&m=free</a></span>

      <div class="va-icon-container">
        <div class="grid">
        <div v-for="item of iconList" :key="item">
            <div id="icon-item">
                <font-awesome-icon class="jva-icon" :icon="item"/>
                <span>{{ item }}</span>
            </div>
          </div>
      </div>
      </div>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core';

export default defineComponent({
  name: 'IconList',
  components: {
  },
  setup() {
    const iconList = ref(
      Object.keys(library.definitions.fas).map((icon) => `${icon}`).sort((a, b) => a.localeCompare(b))
    );

    return { iconList };
  },
});
</script>
  
<style lang="scss" scoped>
.va-icon-container {
  overflow: hidden;
  background-color: white;
  padding: 3rem;
  margin-top: 1rem;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-bottom: 30px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>