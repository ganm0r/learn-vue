<script setup>
import TeamMember from "./TeamMember.vue";
import AddMemberModal from "./AddMemberModal.vue";

import { useTeamStore } from "../stores/TeamStore";

const team = useTeamStore();
team.fill();
</script>

<template>
  <div class="flex flex-col gap-8 items-center justify-center p-8">
    <div class="flex gap-8 items-center justify-center">
      <h1 class="text-center font-bold text-4xl">{{ team.name }}</h1>
      <add-member-modal />
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
</template>
