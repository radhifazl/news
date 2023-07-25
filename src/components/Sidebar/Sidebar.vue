<template>
    <div class="sidebar w-25 h-screen p-4">
        <CustomButton text="Close" @click="$emit('click')"/>
        <EditForm>
            <div class="inp-box title">
                <CustomLabel text="Title"/>
                <CustomInput type="text" name="title" placeholder="Title" class="my-2"/>
            </div>
            <div class="inp-box author">
                <CustomLabel text="Author"/>
                <CustomInput type="text" name="author" placeholder="Author" class="my-2"/>
            </div>
            <div class="inp-box content">
                <CustomLabel text="Content"/>
                <CustomInput type="text" name="content" placeholder="Content" class="my-2"/>
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

export default {
    name: "SidebarComponent",
    components: { CustomButton, EditForm, CustomInput, CustomLabel },
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
<style lang="scss">
    .sidebar {
        background-color: $base-color;
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