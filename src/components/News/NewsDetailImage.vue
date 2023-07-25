<template>
    <div class="news-detail-image mx-auto">
        <img :src="img"/>
    </div>
</template>
<script>
export default {
    name: 'NewsDetailImage',
    props: ['img']
}
</script>
<style lang="scss">
    .news-detail-image {
        width: 50%;
        height: 50%;
        img {
            width: 100%;
            object-fit: cover;
        }
    }

    @media screen and (max-width: 768px) {
        .news-detail-image {
            width: 100%;
        }
    }
</style>