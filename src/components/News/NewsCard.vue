<template lang="">
    <Card>
        <div class="news-thumbnail w-100 rounded-xs">
            <img :src="news.image" alt="News Thumbnail">
        </div>
        <div class="news-source my-3 w-100 flex justify-between align-center text-xs">
            <p>{{ news.source.name }}</p>
            <p>{{ date }}</p>
        </div>
        <div class="news-title">
            <Title :text="news.title" class="text-h6"/>
        </div>
        <div class="news-subtitle">
            <Subtitle :text="news.description" class="text-xs font-light"/>
        </div>
        <div class="news-button">
            <CustomButton text="Read" customClass="w-100" @click="readDetail(news.id)"/>
        </div>
    </Card>
</template>
<script>
import Card from '@/components/Card/Card.vue';
import Title from '@/components/Text/Title.vue';
import Subtitle from '@/components/Text/Subtitle.vue';
import CustomButton from '@/components/Buttons/CustomButton.vue';
import moment from 'moment';

export default {
    name: 'NewsCard',
    components: {
        Card, Title, Subtitle, CustomButton
    },
    props: {
        news: {
            type: Object,
            required: true
        }
    },
    computed: {
        date() {
            return moment(this.news.publishedAt).format('YYYY-MM-DD');
        }
    },
    methods: {
        readDetail(id) {
            this.$router.push(`/news/${id}`);
            localStorage.setItem('news', JSON.stringify(this.news));
        }
    }
}
</script>
<style lang="scss">
    .custom-card {
        .news-thumbnail {
            height: 50%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        } 

        .news-title {
            height: 40px;
        }

        .news-title, .news-subtitle {
            overflow: hidden;
        }

        .news-subtitle {
            height: 70px;
            margin-bottom: 0.5rem;
        }
    }
</style>