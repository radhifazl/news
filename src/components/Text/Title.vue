<template>
    <h1 class="heading-title font-semibold text-center">
        {{ text }}
    </h1>
</template>
<script>
export default {
    name: 'Heading-Title',
    props: {
        text: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="scss">
</style>