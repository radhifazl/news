<template>
    <div class="news-detail-wrapper w-75 mx-auto">
        <slot />
    </div>
</template>
<script>
export default {
    name: 'NewsDetailWrapper'
}
</script>
<style lang="scss">
.news-detail-wrapper {
    height: fit-content;
}
</style>