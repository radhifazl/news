<template>
    <div class="home-news p-2">
        <ul class="news-list flex align-center flex-wrap gap-4">
            <li class="news-card" v-for="item in news" :key="item.id">
                <NewsCard :news="item"/>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import NewsCard from '@/components/News/NewsCard.vue';

export default {
    name: 'HomeNews',
    computed: {
        ...mapGetters(['news'])
    },
    methods: {
        ...mapActions(['fetchNews'])
    },
    mounted() {
        this.fetchNews();
    },
    components: {
        NewsCard
    }
}
</script>
<style lang="scss">
    
</style>