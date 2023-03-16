import { defineStore } from "pinia";

const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),
  actions: {
    async fill () {
      const data = await import("../team.json");
      const team = data.default;
      this.$state = team;
    },
    add (newMember) {
        this.members.push(newMember);
    },
    remove (memberName) {
        this.members = this.members.filter(member => member.name != memberName);
    }
  },
  getters: {
    remaining () {
      return this.spots - this.members.length;
    },
  },
});

export { useTeamStore };
