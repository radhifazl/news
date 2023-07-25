<template>
    <form class="search-form flex flex-col align-center w-50" @submit.prevent="$emit('submit')">
        <slot />
    </form>
</template>
<script>
export default {
    name: 'SearchForm',
}
</script>
<style lang="scss">
@media (max-width: 768px) {
  .search-form {
    width: 100% !important;
  }
}
</style>