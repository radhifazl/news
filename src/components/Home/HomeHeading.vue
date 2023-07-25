<template>
    <div class="home-heading p-4 w-100 flex align-center flex-col">
        <Title text="News"/>
        <Subtitle text="by Radhif Azli Nurfahriza : Gnews API" class="text-sm"/>
        <SearchForm @submit="searchNews">
          <div class="search-wrapper flex gap-1 w-100">
              <CustomInput 
                type="search" 
                name="search" 
                placeholder="e.g Indonesia" 
                v-model="search"
              />   
              <CustomButton type="submit" text="Search"/> 
          </div>
        </SearchForm>
    </div>
</template>
<script>
import Title from '@/components/Text/Title.vue'
import Subtitle from '@/components/Text/Subtitle.vue'
import SearchForm from '@/components/SearchForm.vue'

export default {
  name: 'HomeHeading',
  components: {
    Title, Subtitle, SearchForm,
    CustomInput: () => import('@/components/Inputs/CustomInput.vue'),
    CustomButton: () => import('@/components/Buttons/CustomButton.vue')
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searchNews() {
      this.$store.state.news = [];
      this.$store.dispatch('fetchNews', this.search);
    }
  },
}
</script>
<style lang="scss">
    
</style>