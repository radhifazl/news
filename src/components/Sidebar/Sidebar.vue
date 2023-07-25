<template>
    <div class="sidebar w-50 h-screen p-4 shadow-sm">
        <CustomButton text="Close" @click="$emit('click')"/>
        <EditForm @submit="submitNews">
            <div class="inp-box title">
                <CustomLabel text="Title"/>
                <CustomInput type="text" name="title" :placeholder="data.title" class="my-2" v-model="editNews.title"/>
            </div>
            <div class="inp-box author">
                <CustomLabel text="Author"/>
                <CustomInput type="text" name="author" :placeholder="data.source.name" class="my-2" v-model="editNews.author"/>
            </div>
            <div class="inp-box content">
                <CustomLabel text="Content"/>
                <VueEditor v-model="editNews.content" class="my-2"/>
            </div>

            <div class="inp-box">
                <CustomButton type="submit" text="Submit"/>
            </div>
        </EditForm>
    </div>
</template>
<script>
import CustomButton from '../Buttons/CustomButton.vue';
import CustomLabel from '../Labels/CustomLabel.vue';
import CustomInput from '../Inputs/CustomInput.vue';
import EditForm from '../EditForm.vue';
import { VueEditor } from "vue2-editor";

export default {
    name: "SidebarComponent",
    components: { CustomButton, EditForm, CustomInput, CustomLabel, VueEditor },
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            editNews: {
                id: this.$route.params.id,
                image: this.data.image,
                title: this.data.title,
                author: this.data.source.name,
                date: this.data.publishedAt,
                content: this.data.content
            },
        };
    },
    methods: {
        submitNews() {
            const news = {
                title: this.editNews.title,
                author: this.editNews.author,
                image: this.data.image,
                content: this.editNews.content
            }

            localStorage.setItem('news', JSON.stringify({
                title: news.title,
                source: {
                    name: news.author
                },
                content: news.content,
                ...news
            }));

            window.location.reload();
        }
    }
}
</script>
<style lang="scss">
    .sidebar {
        background: $white;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1;

        .inp-box {
            margin-bottom: 1rem;
            width: 100%;
        }
    }
</style>