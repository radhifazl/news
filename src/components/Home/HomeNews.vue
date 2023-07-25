<template>
    <div class="home-news p-2">
        <p>
            {{ news }}
        </p>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'HomeNews',
    // data() {
    //     return {
    //         news: []
    //     }
    // },
    computed: {
        ...mapGetters(['news'])
    },
    methods: {
        ...mapActions(['fetchNews'])
    },
    mounted() {
        this.fetchNews();
    }
}
</script>
<style lang="scss">
    
</style>