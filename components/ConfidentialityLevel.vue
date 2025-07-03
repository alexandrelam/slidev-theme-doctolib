<script setup lang="ts">
interface Props {
  confidentialityLevel: number
  isLight?: boolean
  isSmall?: boolean
}

const props = defineProps<Props>()

function getConfidentialityText() {
    switch (props.confidentialityLevel) {
        case 0:
            return 'Public'
        case 1:
            return 'Internal'
        case 2:
            return 'Restricted'
        case 3:
            return 'Protected'
        default:
            return 'Unknown'
    }
}

</script>

<template>
    <div class="flex items-baseline gap-1">
        <div :class="['flex items-baseline gap-1 bg-[#00264C] dark:bg-[#4a9eff] px-1.5 py-0 rounded-full', {'text-white': isLight, 'dark:text-[#121212]': isLight}, isSmall ? 'text-xs': 'text-sm' ]">
            <span>C</span>
            <span>{{ props.confidentialityLevel }}</span>
        </div>
        <span :class="[isSmall ? 'text-xs' : 'text-sm', 'text-primary']">{{ getConfidentialityText() }}</span>
    </div>
</template>
