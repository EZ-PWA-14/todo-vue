<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <span class="navbar-brand ps-2">TodoList App</span>
    <button class="navbar-toggler" type="button" @click="isNavShow = !isNavShow">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="isNavShow ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">
            대시보드
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">
            정보 보기
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todos">
            투두리스트 보기
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isNavShow = ref(false);
</script>