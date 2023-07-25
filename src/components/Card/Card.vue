<template>
    <div class="custom-card rounded-xs p-2 shadow-sm">
        <slot />
    </div>
</template>
<script>
export default {
    name: 'CustomCard'
}
</script>
<style>
    .custom-card {
        width: 310px;
        height: 420px;
    }

    @media screen and (max-width: 768px) {
        .custom-card {
            width: 100%;
            height: 400px;
        }
    }
</style>