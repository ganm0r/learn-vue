<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="h-screen w-screen bg-slate-400 flex flex-col">
    <nav class="flex gap-4 pt-4 pl-4">
      <router-link to="/" class="p-2 bg-gray-800 rounded-md text-white"
        >Home</router-link
      >
      <router-link to="/team" class="p-2 bg-gray-800 rounded-md text-white"
        >Team</router-link
      >
    </nav>
    <router-view />
  </div>
</template>
