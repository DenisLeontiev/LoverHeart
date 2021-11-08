<template>
    <main class="view-main">
        <div class="view-main__info" :class="{last: step === 4}">
            <transition name="fade" mode="out-in" tag="div" :duration="{ enter: 500, leave: 100 }">
                <FirstSlide 
                    v-if="step === 0"
                    key="first"
                    @changeSlide="($emit('changeStep', step + 1), prevClick = true)"
                />
                <NextSlides 
                    v-if="step > 0"
                    key="second"
                    :step="step"
                    :prev="prevClick"
                    @changeSlide="$emit('changeStep', step + 1)"
                />
            </transition>
        </div>
        <PhotoCards 
            :cards="cards"
            :step="step"
        />
    </main>
</template>

<script>
import FirstSlide from '@/components/Slides/FirstSlide';
import NextSlides from '@/components/Slides/NextSlides';
import PhotoCards from '@/components/PhotoCards';
export default {
    name: "Main",
    components: {
        FirstSlide,
        NextSlides,
        PhotoCards
    },
    props: {
        step: {
            type: Number,
            default: 0,
        }
    },
    data: () => ({
        prevClick: false,
        cards: [
            {
                name: 'Anastasiya',
                age: '19',
                location: 'Ukraine, Kiev',
                image: 'card-1.png',
            }, {
                name: 'Vladlena',
                age: '26',
                location: 'Ukraine, Kiev',
                image: 'card-2.png',
            }, {
                name: 'Zoya',
                age: '26',
                location: 'Ukraine, Odessa',
                image: 'card-3.png',
            }, {
                name: 'Vika',
                age: '37',
                location: 'Ukraine, Kiev',
                image: 'card-4.png',
            }, {
                name: 'Daria',
                age: '23',
                location: 'Ukraine, Zaporozhye',
                image: 'card-5.png',
            }
        ]
    }),
}
</script>

<style lang="scss">
    .view-main {
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: space-between;
        height: 100%;

        @include mobile {
            flex-direction: column;
        }

        @include tablet {
            flex-direction: column;
        }

        &__info {
            position: relative;
            width: 100%;
            height: 100%;
            max-width: 800px;

            @include tablet {
                height: auto;
                flex-shrink: 0;

                &.last {
                    height: 100%;
                }
            }

            @include mobile {
                height: 100%;
                max-height: 334px;
                flex-shrink: 0;
                margin: 0 0 15px 0;

                &.last {
                    height: 100%;
                }
            }

            > div {
                @include tablet {
                    position: relative;
                }

                @include mobile {
                    position: relative;
                }

                width: 100%;
                height: 100%;
            }
        }
    }
</style>