<template>
  <div>
    <div :class="['sidebar', { active: isActive }]" v-if="hasAnyAuthority('ROLE_ADMIN')">
    <div class="menu-toggle-button">
      <div id="btn"  @click="toggleSidebar">
        <font-awesome-icon class="jva-icon" :icon="['fas', 'bars']"/>
      </div>
    </div>
    <ul>
      <li :class="{ active: $route.path === '/' }">
        <div class="menu-item" @click="$router.push({ name: 'Home' })">
          <font-awesome-icon class="jva-icon" icon="home" />
          <span class="nav-item">Home</span>
        </div>
        <span class="tooltip">Test Page 1</span>
      </li>
      <li :class="{ active: $route.path === '/page1' }">
        <div class="menu-item" @click="$router.push({ name: 'Page1' })">
          <font-awesome-icon class="jva-icon" icon="gear" />
          <span class="nav-item">Test Page 1</span>
        </div>
        <span class="tooltip">Test Page 1</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Test Page 2</span>
        </router-link>
        <span class="tooltip">Test Page 2</span>
      </li>
      <li :class="{ active: $route.path === '/page3' }">
        <router-link to="/page3" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="sitemap" />
          <span class="nav-item">Test Page 3</span>
        </router-link>
        <span class="tooltip">Test Page 3</span>
      </li>
    </ul>
  </div>
  <div class="main-content">
      <div class="jva-container">
        <router-view></router-view>
        <!-- <jhi-footer></jhi-footer>  -->
      </div>
  </div>
  </div>
</template>

<script lang="ts" src="./sidebar-menu.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
