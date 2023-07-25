<template>
  <div class="home">
    <HomeHeading />

    <Title text="Today's News" class="p-2"/>

    <HomeNews />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeading from '@/components/Home/HomeHeading.vue'
import HomeNews from '@/components/Home/HomeNews.vue'
import Title from '@/components/Text/Title.vue';

export default {
  name: 'HomeView',
  components: {
    HomeHeading, HomeNews,
    Title
  }
}
</script>
