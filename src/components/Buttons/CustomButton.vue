<template>
    <div class="custom-button">
        <button :type="type" :disabled="disabled" class="py-2 px-4 rounded-xs font-semibold" :class="customClass"
            @click="$emit('click')"
        >
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
            transition: background-color 0.3s ease-in-out;

            &:hover {
                background-color: $primary-color-darker;
            }
        }
    }
</style>