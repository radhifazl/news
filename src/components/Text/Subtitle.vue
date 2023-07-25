<template>
    <h1 class="heading-subtitle font-medium my-2 text-center">
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