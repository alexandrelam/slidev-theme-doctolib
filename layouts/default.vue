<template>
    <div class="slidev-layout">
        <slot />
        <div class="flex items-center gap-3 absolute bottom-6 left-1/2 -translate-x-1/2">
            <img src="https://github.com/alexandrelam/slidev-theme-doctolib/blob/new-theme/public/logo-blue.png?raw=true" class="h-4 dark:hidden" />
            <img src="https://raw.githubusercontent.com/alexandrelam/slidev-theme-doctolib/new-theme/public/logo-white.png" class="h-4 hidden dark:block" />
            <ConfidentialityLevel :confidentialityLevel="$slidev.configs.confidentialityLevel" :isLight="true" :isSmall="true"/>
        </div>
        <div class="absolute text-xs bottom-6 right-10 text-secondary">
            <span>{{ $nav?.currentPage || 1 }} / {{ $nav?.total || 1 }}</span>
        </div>
    </div>
</template>
