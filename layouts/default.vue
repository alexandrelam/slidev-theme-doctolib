<template>
    <div class="slidev-layout">
        <slot />
        <div class="flex items-center gap-3 absolute bottom-6 left-1/2 -translate-x-1/2">
            <img src="https://github.com/alexandrelam/slidev-theme-doctolib/blob/new-theme/public/logo-blue.png?raw=true" class="h-4" />
            <ConfidentialityLevel :confidentialityLevel="$slidev.configs.confidentialityLevel" :isLight="true" :isSmall="true"/>
        </div>
        <div class="absolute text-xs bottom-6 right-10">
            <span>{{ $nav?.currentPage || 1 }} / {{ $nav?.total || 1 }}</span>
        </div>
    </div>
</template>
