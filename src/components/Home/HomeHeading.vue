<template>
    <div class="home-heading p-4 w-100 flex align-center flex-col">
        <Title text="News"/>
        <Subtitle text="by Radhif Azli Nurfahriza : Gnews API" class="text-sm"/>
        <SearchForm/>
    </div>
</template>
<script>
import Title from '@/components/Text/Title.vue'
import Subtitle from '@/components/Text/Subtitle.vue'
import SearchForm from '@/components/SearchForm.vue'

export default {
  name: 'HomeHeading',
  components: {
    Title, Subtitle, SearchForm
  }
}
</script>
<style lang="scss">
    
</style>