<template>
  <div class="slidev-layout cover">
    <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/main/public/logo-white.png" alt="doctolib logo" class="absolute w-[100px] left-1/2 -translate-x-1/2 top-14">
    <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/main/public/doodle-bottom.png" alt="bottom right doodle" class="absolute w-[300px] -bottom-16 -right-16">
    <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/main/public/doodle-top.png" alt="top left doodle" class="absolute w-[300px] -top-24 -left-24">
    <div class="flex items-center justify-center">
      <div class="text-center">
        <slot />
      </div>
    </div>
  </div>
</template>
