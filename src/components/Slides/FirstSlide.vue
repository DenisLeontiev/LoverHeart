<template>
    <section class="view-first-slide">
        <h1 v-if="isMobile" class="view-title view-title--h4">
            <span>Attention!</span>
            <br>Men are required!
        </h1>
        <h1 v-else class="view-title view-title--h1">
            Hey <span>honey!</span>
        </h1>
        <div class="view-first-slide__text view-text">
            <p>There are too many girls and very few men on our dating site.</p>
        </div>
        <Button 
            class="button--large button--green"
            text="Let's go!"
            @eventClick="$emit('changeSlide')"
        />
    </section>
</template>

<script>
import Button from '@/components/Base/Button';
export default {
    name: 'FirstSlide',
    components: {
        Button
    },
    data: () => ({
        isMobile: false
    }),
    mounted() {
        this.isMobile = window.innerWidth < 768;
    }
}
</script>

<style lang="scss">
    .view-first-slide {
        position: absolute;
        left: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 519px;
        height: 100%;
        transition: opacity 400ms ease;
        transform: translateX(-50%);

        @include tablet {
            position: relative;
            height: auto;
            padding: 96px 0 0 0;
        }

        @include tablet {
            max-width: 100%;
        }

        @include mobile {
            position: relative;
            height: auto;
            padding: calc(9000vh / 760) 0 0 0;
        }

        .button {
            width: 100%;
            max-width: 320px;

            @include tablet {
                max-width: 100%;
            }
        }
    }
</style>