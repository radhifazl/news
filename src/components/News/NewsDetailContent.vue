<template>
    <div class="news-detail-contents p-2 px-5 my-5">
        <div class="news-title my-5">
            <h1 class="text-h1">
                {{ source.title }}
            </h1>
        </div>
        <div class="news-source my-5 w-100 flex justify-between align-center text-md">
            <p>{{ source.source.name }}</p>
            <div class="flex align-center gap-3">
                <p>{{ date }}</p>
                <CustomButton text="Edit Article" @click="$emit('click')"/>
            </div>
        </div>
        <div class="news-content">
            <p class="text-h5">
                {{ getPlainTextFromHTML(source.content) }}
            </p>
        </div>
    </div>
</template>
<script>
import CustomButton from '@/components/Buttons/CustomButton.vue'
import moment from 'moment';

export default {
    name: 'NewsDetailContent',
    components: {
        CustomButton
    },
    computed: {
        date() {
            return moment(this.source.publishedAt).format('YYYY-MM-DD');
        }
    },
    props: {
        source: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        getPlainTextFromHTML(htmlString) {
            // Create a temporary element to convert HTML to plain text
            const tempElement = document.createElement('div');
            tempElement.innerHTML = htmlString;

            // Return the text content of the temporary element
            return tempElement.textContent || tempElement.innerText || '';
        },
    }
}
</script>
<style lang="scss">
    .news-detail-contents {
        border: 2px solid #888;
        border-left-color: transparent;
        border-right-color: transparent;
        padding-bottom: 25px;
    }
</style>