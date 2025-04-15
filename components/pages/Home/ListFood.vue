<template>
  <div class="flex flex-col gap-[.81rem]">
    <h3 class="text-[1.06rem] md:text-[1.19rem] font-bold">{{ title }}</h3>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-fit gap-[.63rem]"
    >
      <PagesHomeFoodInfo
        v-for="product in list_food"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :image="product.image"
        :price="formatNumberPrice(product.price)"
      />
    </div>
    <div class="flex gap-[1.23rem] items-center">
      <div class="h-[.06rem] bg-[#dee2e6] flex-1"></div>
      <UiButton> Xem tất cả </UiButton>
      <div class="h-[.06rem] bg-[#dee2e6] flex-1"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IProduct } from "@/types/Product";

defineProps<{
  title: string;
  list_food: IProduct[];
}>();
</script>
