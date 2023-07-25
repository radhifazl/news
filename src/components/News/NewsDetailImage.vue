<template>
    <div class="news-detail-image w-50 h-50 mx-auto">
        <img :src="'https://m-cdn.phonearena.com/images/article/149030-wide-two_1200/Sony-WF-1000XM5-may-come-on-July-24-with-updated-ANC-capabilities.jpg'"/>
    </div>
</template>
<script>
export default {
    name: 'NewsDetailImage',
}
</script>
<style lang="scss">
    .news-detail-image {
        img {
            width: 100%;
            object-fit: cover;
        }
    }
</style>