<script setup>
import Modal from "../components/Modal.vue";

import { ref } from "vue";
import { useTeamStore } from "../stores/TeamStore";

const team = useTeamStore();
const showModal = ref(false);
</script>

<template>
  <button
    class="px-3 py-2 bg-slate-800 text-green-500 rounded-lg active:scale-95"
    :disabled="!team.remaining"
    @click="showModal = true"
  >
    Add Members ({{ team.remaining }} spots remaining)
  </button>

  <teleport to="body">
    <modal :show="showModal">
      <template #header>
        <div class="flex justify-between items-center">
          <h1>Modal Title</h1>
          <button @click="showModal = false">X</button>
        </div>
      </template>
      <template #body>
        <div>Modal Body</div>
      </template>
    </modal>
  </teleport>
</template>
