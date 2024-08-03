<template>
  <div>
    <li :class="{ active: $route.path === '/demoapp/blog' }">
      <router-link to="/demoapp/blog" class="menu-item">
          <font-awesome-icon icon="asterisk" />
          <span class="nav-item" v-text="t$('global.menu.entities.demoappBlog')"></span>
        </router-link>
    </li>
    <li :class="{ active: $route.path === '/demoapp/post' }">
      <router-link to="/demoapp/post" class="menu-item">
          <font-awesome-icon icon="asterisk" />
          <span class="nav-item" v-text="t$('global.menu.entities.demoappPost')"></span>
        </router-link>
    </li>
    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
  </div>
</template>

<script lang="ts" src="./entities-menu.component.ts"></script>
