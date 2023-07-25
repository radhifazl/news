<template>
    <input 
        :type="type" 
        :name="name" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue($event.target.value)"
        class="custom-input rounded-xs px-2 py-1 w-100"
    />
</template>
<script>
export default {
    name: 'CustomInput',
    props: {
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        modelValue: {
            type: String,
        }
    },
    methods: {
        updateValue(value) {
            this.$emit('input', value);
        }
    }
}
</script>
<style lang="scss">
.custom-input {
  border: 2px solid $lighter-base-color;
  transition: border-color 0.3s ease; 

  &:focus {
    outline: none;
    border-color: $primary-color;; 
  }
}
</style>