<template>
  <ClientOnly>
    <Swiper
      :modules="[Navigation, Pagination, Autoplay]"
      navigation
      loop
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="1000"
      :pagination="{ clickable: true }"
      class="w-full h-[300px] lg:h-[500px]"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <NuxtImg
          :src="slide.image"
          :alt="slide.alt"
          class="object-cover w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/banners/banner1.jpg",
    alt: "Banner 1",
  },
  {
    image: "/images/banners/banner2.jpg",
    alt: "Banner 2",
  },
];
</script>
