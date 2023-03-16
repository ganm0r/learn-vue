<script setup>
import { useCounterStore } from "../stores/CounterStore";

defineProps({
  msg: String,
});

const counter = useCounterStore();
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h1>{{ msg }}</h1>
    <h1 class="text-bold text-center text-gray-800">{{ counter.count }}</h1>
    <div class="flex gap-2">
      <button
        type="button"
        class="p-2 bg-gray-800 rounded-md text-white"
        @click="counter.increment"
      >
        Increment
      </button>
      <button
        type="button"
        class="p-2 bg-gray-800 rounded-md text-white"
        @click="counter.decrement"
      >
        Decrement
      </button>
    </div>
  </div>
</template>
