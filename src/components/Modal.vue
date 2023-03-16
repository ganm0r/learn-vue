<script setup>
defineProps({
  show: Boolean,
});
</script>

<template>
  <div
    v-if="show"
    class="grid place-items-center bg-black bg-opacity-60 fixed inset-0"
  >
    <div class="p-8 bg-white">
      <slot name="header"></slot>
      <slot name="body"></slot>
    </div>
  </div>
</template>
