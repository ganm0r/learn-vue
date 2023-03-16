<script setup>
defineProps({
  name: String,
  email: String,
  status: Boolean,
});
</script>

<template>
    <tr class="flex gap-2 items-center justify-between w-full border-slate-900 p-3 bg-slate-800 border-2 rounded-xl">
      <td>
        <img class="rounded-full" :src="`https://i.pravatar.cc/100?u=${name}`" alt="avatar">
      </td>
        <td class="p-2 border bg-slate-600 rounded-lg text-white">{{ name }}</td>
        <td class="p-2 border bg-slate-900 rounded-lg text-white">{{ email }}</td>
        <td :class="`p-2 border bg-black rounded-lg ${ status ? 'text-green-500' : 'text-red-500' }`">{{ status ? 'Active' : 'Away' }}</td>
    </tr>
</template>
