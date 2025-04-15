<template>
  <div>
    <div class="bg-[#ca2628] py-[.75rem]">
      <div class="custom-container flex items-center gap-[1.25rem]">
        <IconsIconeMore class="w-[1.25rem] h-[1.25rem] cursor-pointer" />
        <h1 class="text-[.94rem] md:text-[1.13rem] font-bold text-white">
          DANH MỤC SẢN PHẨM
        </h1>
      </div>
    </div>
    <div class="py-[0.41rem]">
      <PagesHomeSlideShow />
    </div>
    <div class="custom-container mt-[1.44rem]">
      <div class="flex items-center gap-[.81rem] overflow-auto">
        <NuxtImg
          src="/images/banners/banner3_1.webp"
          alt="Sub banner 1"
          class="w-auto max-w-[27rem]"
        />
        <NuxtImg
          src="/images/banners/banner3_2.webp"
          alt="Sub banner 2"
          class="w-auto max-w-[29.31rem]"
        />
        <NuxtImg
          src="/images/banners/banner3_3.webp"
          alt="Sub banner 3"
          class="w-auto max-w-[29.31rem]"
        />
      </div>
      <NuxtImg
        src="/images/banners/banner3.jpg"
        alt="Banner 3"
        class="w-full mt-[1.75rem] mb-[.81rem]"
      />
      <div v-if="status === 'pending'"><UiLoading /></div>
      <div v-else-if="error" class="text-center my-[1.25rem]">
        Có lỗi trong quá trình tải dữ liệu <br />
        {{ error.message }}
      </div>
      <div class="flex flex-col gap-[2.31rem]" v-else>
        <PagesHomeListFood title="FISH AND SEAFOOD" :list_food="data.fish_and_seafood" />
        <PagesHomeListFood title="FROZEN MEAT" :list_food="data.frozen_meat" />
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Yen Market",
  description: "Đây là 1 trang hiển thị danh mục các sản phẩm của Yen Market",
});

const { data, error, status } = useAsyncData("products", () =>
  $fetch("/api/products")
);
</script>
