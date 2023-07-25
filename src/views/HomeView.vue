<template>
  <div class="home">
    <HomeHeading/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeading from '@/components/Home/HomeHeading.vue'

export default {
  name: 'HomeView',
  components: {
    HomeHeading
  }
}
</script>
