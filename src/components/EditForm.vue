<template>
    <form class="edit-form flex flex-col align-center w-100 my-5" @submit.prevent="$emit('submit')">
        <slot />
    </form>
</template>
<script>
export default {
    name: 'EditForm',
}
</script>
<style lang="scss">
@media (max-width: 768px) {
  .edit-form {
    width: 100% !important;
  }
}
</style>