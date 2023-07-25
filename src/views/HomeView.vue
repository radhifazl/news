<template>
  <div class="home">
    <HomeHeading />

      <Title text="Loading news..." class="p-2" v-if="$store.state.loading === true"/>
      <Title text="Today's news" class="p-2" v-else/>

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
