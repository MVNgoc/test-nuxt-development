<template>
  <button
    :class="[
      'w-[9rem] h-[2.75rem] bg-[#ca2628] text-white rounded-[100px] transition cursor-pointer',
      customClass,
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  customClass?: string;
}>();
</script>
