<template>
  <div id="app">
    <!-- <ribbon></ribbon> -->
    <navbar></navbar>
    <div>
        <div v-if="authenticated">
          <sidebar-menu></sidebar-menu>
        </div>
        <div v-if="!authenticated">
          <home></home>
        </div>
        <b-modal id="login-page" hide-footer lazy>
          <template #modal-title>
            <span data-cy="loginTitle" id="login-title" v-text="t$('login.title')"></span>
          </template>
          <login-form></login-form>
        </b-modal>
    </div>
  </div>
</template>

<script lang="ts" src="./app.component.ts"></script>
