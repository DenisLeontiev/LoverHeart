<template>
    <div class="view-next-slide">
        <Bar 
            :step="step"
            :prev="prev"
        />
        <transition-group name="fade" :duration="{ enter: 500, leave: 0 }" tag="div">
            <section
                v-for="(item, index) in steps"
                :key="item.id"
                v-show="step - 1 === index"
                class="view-next-slide__item"
            >
                <h2 class="view-title view-title--h2" v-html="item.title"></h2>
                <div class="view-next-slide__text view-text">
                    <p>{{ item.caption }}</p>
                </div>
                <Button 
                    v-if="index === 0"
                    class="button--large button--green"
                    text="GO"
                    @eventClick="$emit('changeSlide')"
                />
                <template v-else>
                    <Button
                        class="button--base button--green"
                        text="YES"
                        @eventClick="$emit('changeSlide')"
                    />
                    <Button
                        class="button--base button--red"
                        text="NO"
                        @eventClick="$emit('changeSlide')"
                    />
                </template>
            </section>
        </transition-group>
        <transition name="fade" :duration="{ enter: 2000, leave: 0 }">
            <Registration v-if="step > 3" className="active" />
        </transition>
    </div>
</template>

<script>
import Bar from '@/components/Slides/Bar';
import Button from '@/components/Base/Button';
import Registration from '@/components/Registration';

export default {
    name: 'NextSlides',
    props: {
        step: {
            type: Number,
            default: 1
        },
        prev: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Bar,
        Button,
        Registration
    },
    data: () => ({
        steps: [
            {
                id: 0,
                title: 'The girls on our site want <span>to get to know you better!</span>',
                caption: 'Take a few minutes to answer their questions.',
            }, {
                id: 1,
                title: 'Some girls on our site <span>don’t want a serious relationship.</span>',
                caption: 'Do you support their choice?',
            }, {
                id: 2,
                title: '<span>You also can meet very popular girls</span> on our website.',
                caption: 'Do you promise to keep their identity a secret?',
            },
        ]
    }),
}
</script>

<style lang="scss">
    .view-next-slide {
        position: absolute;
        width: 100%;

        @include desktop {
            padding-right: 30px;
        }

        @include notebook {
            padding-right: 60px;
        }

        @include mobile {
            position: relative;
        }

        &__item {
            width: 100%;
            height: 100%;
            transition: opacity 400ms ease;
        }

        .button ~ .button {

            @media (min-width: 1281px) {
                margin: 0 0 0 20px;
            }

            @media (max-width: 1280px) {
                margin: 0 0 0 12px;
            }
        }
    }
</style>