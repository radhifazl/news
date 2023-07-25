<template>
    <h2 class="heading-subtitle font-medium my-2 truncate-multiple">
        {{ text }}
    </h2>
</template>
<script>
export default {
    name: 'HeadingSubtitle',
    props: {
        text: {
            type: String,
            required: true
        },
    }
}
</script>
<style lang="scss">
.heading-subtitle {
    -webkit-line-clamp: 4 !important;
}
</style>