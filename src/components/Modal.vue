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
      <header>Modal Header</header>
      <div>Modal Body</div>
      <footer>Modal Footer</footer>
    </div>
  </div>
</template>
