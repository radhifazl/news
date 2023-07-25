<template>
    <div class="home-heading p-4">
        <Title text="Today's News"/>
        <Subtitle text="by Radhif Azli Nurfahriza"/>
    </div>
</template>
<script>
import Title from '@/components/Text/Title.vue'
import Subtitle from '@/components/Text/Subtitle.vue'

export default {
  name: 'HomeView',
  components: {
    Title, Subtitle
  }
}
</script>
<style lang="scss">
    
</style>