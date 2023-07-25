<template>
    <div class="news-detail w-100">
        <Sidebar :data="newsDetail" v-if="openSidebar" @click="openSidebar = false"/>
        <NewsDetailWrapper>
            <NewsDetailImage />
            <NewsDetailContent :source="newsDetail" @click="openSidebar = true"/>
        </NewsDetailWrapper>
    </div>
</template>
<script>
import NewsDetailWrapper from '@/components/News/NewsDetailWrapper.vue'
import NewsDetailImage from '@/components/News/NewsDetailImage.vue'
import NewsDetailContent from '@/components/News/NewsDetailContent.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'

import { mapGetters } from 'vuex';

export default {
    name: 'NewsDetail',
    components: {
        NewsDetailWrapper, NewsDetailImage, NewsDetailContent, Sidebar
    },
    data() {
        return {
            id: this.$route.params.id,
            newsDetail: {},
            openSidebar: false
        }
    },
    computed: {
        ...mapGetters(['news'])
    },
    created() {
        localStorage.getItem('news') ? this.newsDetail = JSON.parse(localStorage.getItem('news')) : this.newsDetail = this.news.find(item => item.id === this.id);
    }
}
</script>
<style lang="scss">
    .news-detail {
        width: 100%;
        position: relative;
        z-index: 1;
    }
</style>