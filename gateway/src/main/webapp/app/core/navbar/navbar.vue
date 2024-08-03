<!-- jhcc-custom begin -->
<template>
  <b-navbar class="jva-navbar" data-cy="navbar">
    <div class="jh-logo-container" my-auto>
        <b-navbar-brand class="logo" b-link to="/">
          <span class="logo-img"></span>
          <span class="navbar-title">JHipster Vue Admin</span>
          <!-- <span class="navbar-version">{{ version }}</span> -->
        </b-navbar-brand>
    </div>
    <div class="sign-out" v-if="authenticated" v-on:click="logout()" id="logout" active-class="active">
      <font-awesome-icon class="sign-out-icon" icon="sign-out-alt" />
    </div>
    <div class="sign-in" v-if="!authenticated" v-on:click="openLogin()" id="login" active-class="active">
      <span>Sign in</span>
    </div>
  </b-navbar>
</template>

<script lang="ts" src="./navbar.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>