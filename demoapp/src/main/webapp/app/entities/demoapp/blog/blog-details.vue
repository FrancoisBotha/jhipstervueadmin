<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="blog">
        <h2 class="jh-entity-heading" data-cy="blogDetailsHeading">
          <span v-text="t$('demoappApp.demoappBlog.detail.title')"></span> {{ blog.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="t$('demoappApp.demoappBlog.name')"></span>
          </dt>
          <dd>
            <span>{{ blog.name }}</span>
          </dd>
          <dt>
            <span v-text="t$('demoappApp.demoappBlog.handle')"></span>
          </dt>
          <dd>
            <span>{{ blog.handle }}</span>
          </dd>
        </dl>
        <button type="submit" v-on:click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="t$('entity.action.back')"></span>
        </button>
        <router-link v-if="blog.id" :to="{ name: 'BlogEdit', params: { blogId: blog.id } }" custom v-slot="{ navigate }">
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="t$('entity.action.edit')"></span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./blog-details.component.ts"></script>
