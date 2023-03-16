import { defineStore } from "pinia";

const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),
  actions: {
    fill: async function () {
      const data = await import("../team.json");
      const team = data.default;
      this.$state = team;
    },
  },
  getters: {
    remaining: function () {
      return this.spots - this.members.length;
    },
  },
});

export { useTeamStore };
