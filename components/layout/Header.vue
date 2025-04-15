<template>
  <header
    class="flex items-center justify-center min-h-[4.06rem] header-gradient lg:py-[.5rem]"
  >
    <div
      class="custom-container flex items-center justify-between gap-[1.25rem]"
    >
      <NuxtImg
        src="/images/logo-brand.png"
        alt="Logo brand"
        class="md:h-auto lg:h-[5rem]"
      />
      <div
        class="flex items-center justify-between relative max-w-[34rem] flex-1"
      >
        <input
          type="text"
          placeholder="Tìm kiếm"
          class="h-[2.03rem] lg:h-[2.5rem] pl-[.61rem] w-[6.25rem] md:w-full flex flex-1 outline-none rounded-[6px] bg-[#f6f6f6] border border-[#ced4da]"
          v-model="searchInput"
        />
        <IconsIconSearch
          class="absolute right-[.63rem] top-2 lg:right-[.75rem] lg:top-[.63rem] w-[1.02rem] h-[1.02rem] lg:w-[1.25rem] lg:h-[1.25rem] cursor-pointer"
          v-if="!isShowIconClose"
        />
        <IconsIconClose
          class="absolute right-[.63rem] top-2 lg:right-[.75rem] lg:top-[.63rem] w-[1.02rem] h-[1.02rem] lg:w-[1.25rem] lg:h-[1.25rem] cursor-pointer"
          v-if="isShowIconClose"
          v-on:click="handleClickIconClose"
        />
      </div>
      <div class="gap-[.45rem] hidden lg:flex">
        <IconsIconPhone class="w-[2.06rem] h-[2.06rem]" />
        <div
          class="flex flex-col gap-[.25rem] !font-bold text-[.88rem] lg:text-[1rem]"
        >
          <p>Hotline</p>
          <p>1900 066 890</p>
        </div>
      </div>
      <div class="gap-[.45rem] hidden lg:flex">
        <IconsIconUser class="w-[2.19rem] h-[2.19rem]" />
        <div
          class="flex flex-col gap-[.25rem] !font-bold text-[.88rem] lg:text-[1rem]"
        >
          <p>Hi,</p>
          <p>Đăng nhập</p>
        </div>
      </div>
      <div
        class="p-[.2rem] rounded-[10px] border-[2px] border-[#C9262C] justify-center items-center cursor-pointer hidden lg:flex"
      >
        <IconsIconCart class="lg:h-[2rem] lg:w-[2rem]" type="primary" />
      </div>
      <div class="flex">
        <IconsIconVi class="h-[1.42rem] lg:h-[1.75rem] cursor-pointer" />
        <IconsIconEn
          class="h-[1.42rem] lg:h-[1.75rem] -ml-[.63rem] lg:ml-0 cursor-pointer"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
import { IconsIconUser } from "#components";

const searchInput = ref("");
const isShowIconClose = ref(false);

watch(searchInput, (value) => {
  if (value) {
    isShowIconClose.value = true;
  } else {
    isShowIconClose.value = false;
  }
});

const handleClickIconClose = () => {
  searchInput.value = "";
  isShowIconClose.value = false;
};
</script>
