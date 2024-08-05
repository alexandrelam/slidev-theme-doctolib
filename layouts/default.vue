<template>
    <div class="slidev-layout">
        <slot />
        <div class="flex items-center gap-3 absolute bottom-6 left-1/2 -translate-x-1/2">
            <img src="https://github.com/alexandrelam/slidev-theme-doctolib/blob/new-theme/public/logo-blue.png?raw=true" class="h-4" />
            <ConfidentialityLevel :confidentialityLevel="$slidev.configs.confidentialityLevel" :isLight="true" :isSmall="true"/>
        </div>
    </div>
</template>
