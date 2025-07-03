<template>
  <div class="slidev-layout cover">
    <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/new-theme/public/logo-white.png" alt="doctolib logo" class="absolute w-[100px] left-1/2 -translate-x-1/2 top-14">
    <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/new-theme/public/doodle-bottom.png" alt="bottom right doodle" class="absolute w-[300px] -bottom-16 -right-16 opacity-20 dark:opacity-10">
    <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/new-theme/public/doodle-top.png" alt="top left doodle" class="absolute w-[300px] -top-24 -left-24 opacity-20 dark:opacity-10">
    <div class="flex items-center justify-center">
      <div class="text-center">
        <slot />
      </div>
      <div class="absolute left-1/2 -translate-x-1/2 bottom-6">
        <ConfidentialityLevel :confidentialityLevel="$slidev.configs.confidentialityLevel" />
      </div>
    </div>
  </div>
</template>
