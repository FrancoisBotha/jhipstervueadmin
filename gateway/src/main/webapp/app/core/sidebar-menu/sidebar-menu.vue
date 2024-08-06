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
        <span class="tooltip">Home</span>
      </li>
      <li :class="{ active: $route.path === '/page1' }">
        <div class="menu-item" @click="$router.push({ name: 'Page1' })">
          <font-awesome-icon class="jva-icon" icon="gear" />
          <span class="nav-item">Dashboard</span>
        </div>
        <span class="tooltip">Dashboard</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Components</span>
        </router-link>
        <span class="tooltip">Components</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Icons</span>
        </router-link>
        <span class="tooltip">Icons</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Table</span>
        </router-link>
        <span class="tooltip">Table</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Tabs</span>
        </router-link>
        <span class="tooltip">Tabs</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Excel</span>
        </router-link>
        <span class="tooltip">Excel</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Pdf</span>
        </router-link>
        <span class="tooltip">Pdf</span>
      </li>
      <li :class="{ active: $route.path === '/page2' }">
        <router-link to="/page2" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="user" />
          <span class="nav-item">Clipboard</span>
        </router-link>
        <span class="tooltip">Clipboard</span>
      </li>
      <li :class="{ active: $route.path === '/page3' }">
        <router-link to="/page3" class="menu-item">
          <font-awesome-icon class="jva-icon" icon="sitemap" />
          <span class="nav-item">Maps</span>
        </router-link>
        <span class="tooltip">Maps</span>
      </li>
      <!-- Micro Frontends Entities menu -->
      <li>
        <div class="menu-item-parent" @click="toggleEntities">
          <font-awesome-icon class="jva-icon" icon="folder" />
          <span class="nav-item">Entities</span>
          <font-awesome-icon class="jva-icon-toggle" :icon="entitiesIcon" @click="toggleEntities"/>
        </div>
        <span class="tooltip">Entities</span>
      </li>
      <div v-show="entitiesVisible">
        <demoapp-entities-menu :is-active="isActive"></demoapp-entities-menu>
        <store-menu :is-active="isActive"></store-menu>
      </div>
                <!-- JHipster Admin menu -->
                <li>
            <div class="menu-item-parent" @click="toggleAdmin">
              <font-awesome-icon class="jva-icon" icon="folder" />
              <span class="nav-item">Admin</span>
              <font-awesome-icon class="jva-icon-toggle" :icon="adminIcon" @click="toggleAdmin"/>
            </div>
            <span class="tooltip">Admin</span>
          </li>
          <!-- Transition for admin items -->
          <transition name="slide">
            <div>
              <li v-show="adminVisible">
              <div class="menu-item" @click="$router.push({ name: 'JhiUser' })">
                <font-awesome-icon class="jva-icon" icon="user" />
                <span class="nav-item">{{ $t('global.menu.admin.userManagement') }}</span>
              </div>
              <span class="tooltip">User Management</span>
            </li>
            <li v-show="adminVisible">
              <div class="menu-item" @click="$router.push({ name: 'JhiMetricsComponent' })">
                <font-awesome-icon class="jva-icon" icon="tachometer-alt" />
                <span class="nav-item">{{ $t('global.menu.admin.metrics') }}</span>
              </div>
              <span class="tooltip">Metrics</span>
            </li>
            <li v-show="adminVisible">
              <div class="menu-item" @click="$router.push({ name: 'JhiHealthComponent' })">
                <font-awesome-icon class="jva-icon" icon="heart" />
                <span class="nav-item">{{ $t('global.menu.admin.health') }}</span>
              </div>
              <span class="tooltip">Health</span>
            </li>
            <li v-show="adminVisible">
              <div class="menu-item" @click="$router.push({ name: 'JhiConfigurationComponent' })">
                <font-awesome-icon class="jva-icon" icon="list" />
                <span class="nav-item">{{ $t('global.menu.admin.configuration') }}</span>
              </div>
              <span class="tooltip">Configuration</span>
            </li>
            <li v-show="adminVisible">
              <div class="menu-item" @click="$router.push({ name: 'JhiLogsComponent' })">
                <font-awesome-icon class="jva-icon" icon="tasks" />
                <span class="nav-item">{{ $t('global.menu.admin.logs') }}</span>
              </div>
              <span class="tooltip">Logs</span>
            </li>
            <li v-show="adminVisible" v-if="openAPIEnabled">
              <div class="menu-item" @click="$router.push({ name: 'JhiDocsComponent' })">
                <font-awesome-icon class="jva-icon" icon="book" />
                <span class="nav-item">{{ $t('global.menu.admin.apidocs') }}</span>
              </div>
              <span class="tooltip">API</span>
            </li>
            </div>
          </transition>
        <li>
          <div class="menu-item" v-on:click="logout()">
            <font-awesome-icon class="jva-icon" icon="sign-out-alt" />
            <span class="nav-item">Log out</span>
          </div>
          <span class="tooltip">Log out</span>
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
