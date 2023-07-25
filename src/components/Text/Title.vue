<template>
    <h1 class="heading-title font-semibold">
        {{ text }}
    </h1>
</template>
<script>
export default {
    name: 'HeadingTitle',
    props: {
        text: {
            type: String,
            required: true
        },
    }
}
</script>
<style lang="scss">
</style>