<template>
  <div
    class="p-[.49rem] border border-[#dee2e6] rounded-[8px] w-full flex flex-col gap-[.63rem]"
  >
    <div class="relative">
      <div class="image-zoom h-[8.06rem] md:h-[15.31rem]">
        <NuxtImg :src="image" :alt="name" class="w-full h-full object-cover" />
      </div>
      <div
        class="absolute bottom-[.25rem] right-[.25rem] w-[2.13rem] h-[2.13rem] flex justify-center items-center bg-[#ca2628] rounded-full cursor-pointer"
      >
        <IconsIconCart />
      </div>
    </div>
    <h2 class="text-[.94rem] md:text-[1.13rem] font-bold line-clamp-2">
      {{ name }}
    </h2>
    <p class="text-[#ca2628] font-bold text-[.88rem] md:text-[1.06rem]">
      {{ price }} <span class="font-normal">/Kg</span>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: number;
  name: string;
  image: string;
  price: string;
}>();
</script>
