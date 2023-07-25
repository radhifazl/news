<template>
    <div class="custom-button">
        <button :type="type" :disabled="disabled" class="py-2 px-4 rounded-xs font-semibold" :class="customClass">
            {{ text }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'CustomButton',
    props: {
        text: {
            type: String,
            required: true
        },
        type: {
            type: String,
            default: 'button'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customClass: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss">
    .custom-button {
        button {
            cursor: pointer;
            background-color: $primary-color;
            border: none;
            outline: none;
            color: $white;
        }
    }
</style>