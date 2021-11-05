<template>
    <div class="view-error">
        <ErrorSvg />
        <img :src="require('@/assets/error.png')" alt="error">
        <div class="view-error__title">ERROR</div>
        <div class="view-text">
            <p>Page not found</p>
        </div>
        <router-link to="/" class="button button--large button--green">
            <span>Back to main</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Error',
}
</script>

<style lang="scss" scoped>
    .view-error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 20px;
        
        img {
            width: 100%;
            max-width: 595px;
            height: auto;
        }

        &__title {
            font-size: 60px;
            line-height: 66px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }


    }
</style>