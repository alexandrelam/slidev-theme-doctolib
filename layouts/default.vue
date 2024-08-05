<script setup>
import { useNav} from '@slidev/client'
const {currentPage, total} = useNav()
</script>

<template>
    <div class="slidev-layout">
        <slot />
        <img src="https://github.com/alexandrelam/slidev-theme-doctolib/blob/main/public/logo-blue.png?raw=true" class="h-4 absolute top-125 left-1/2 -translate-x-1/2" />
        <span class="text-sm absolute top-125 right-16">{{currentPage}} / {{total}}</span>
    </div>
</template>
