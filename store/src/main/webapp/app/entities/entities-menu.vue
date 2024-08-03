<template>
  <div>
    <li :class="{ active: $route.path === '/store/product' }">
      <router-link to="/store/product" class="menu-item">
        <font-awesome-icon icon="asterisk" />
        <span class="nav-item" v-text="t$('global.menu.entities.storeProduct')"></span>
      </router-link>
    </li>
    <!-- jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here -->
  </div>
</template>

<script lang="ts" src="./entities-menu.component.ts"></script>
