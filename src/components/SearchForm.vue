<template>
    <form class="search-form flex flex-col align-center w-50">
        <div class="search-wrapper flex gap-1 w-100">
            <CustomInput type="search" name="search" placeholder="e.g Indonesia" v-model="search"/>   
            <h1>
                {{ search }}
            </h1>
            <CustomButton type="submit" text="Search"/> 
        </div>
    </form>
</template>
<script>
export default {
    name: 'SearchForm',
    components: {
        CustomInput: () => import('@/components/Inputs/CustomInput.vue'),
        CustomButton: () => import('@/components/Buttons/CustomButton.vue')
    },
    data() {
        return {
            search: 'ee'
        }
    },
}
</script>
<style lang="scss">
@media (max-width: 768px) {
  .search-form {
    width: 100% !important;
  }
}
</style>