<template>
    <label class="text-md font-medium">
        {{ text }}
    </label>
</template>
<script>
export default {
    name: 'CustomLabel',
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