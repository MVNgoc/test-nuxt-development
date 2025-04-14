<template>
  <div>
    <div v-if="status === 'pending'">Đang tải dữ liệu...</div>
    <div v-else-if="error">Lỗi tải dữ liệu: {{ error.message }}</div>
    <div v-for="product in data.fish_and_seafood" :key="product.id">
      <h2>{{ product.name }}</h2>
      <NuxtImg :src="product.image" :alt="product.name" loading="lazy" />
      <p>{{ formatNumberPrice(product.price) }}</p>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Danh mục sản phẩm - Yen Market",
  description: "Đây là 1 trang hiển thị danh mục các sản phẩm của Yen Market",
});

const { data, error, status } = useAsyncData("products", () =>
  $fetch("/api/products")
);
</script>
