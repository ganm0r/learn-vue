<script setup>
import TeamMember from "../components/TeamMember.vue";
import Modal from "../components/Modal.vue";

import { useTeamStore } from "../stores/TeamStore";

const team = useTeamStore();
team.fill();
</script>

<template>
  <div class="flex flex-col gap-8 items-center justify-center p-8">
    <div class="flex gap-8 items-center justify-center">
      <h1 class="text-center font-bold text-4xl">{{ team.name }}</h1>
      <button
        class="px-3 py-2 bg-slate-800 text-green-500 rounded-lg active:scale-95"
        :disabled="!team.remaining"
      >
        Add Members ({{ team.remaining }} spots remaining)
      </button>
    </div>
    <table class="flex flex-col items-center justify-between gap-2">
      <team-member
        v-for="member in team.members"
        :key="member.name"
        :name="member.name"
        :email="member.email"
        :status="member.status"
      />
    </table>
  </div>
  <modal :show="true" />
</template>
