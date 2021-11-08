<template>
    <div class="view-photo-card" :class="{last: step === 4}" :duration="{ enter: 500, leave: 0 }" tag="div">
        <transition-group name="fade" tag="div">
            <div 
                v-for="(item, index) in cards" 
                class="view-photo-card__item"
                :key="item.name"
                v-show="index === step"
            >
                <div class="view-photo-card__wrapper">
                    <div class="view-photo-card__status">
                        <span>Online</span>
                    </div>
                    <img :src="require(`@/assets/cards/${item.image}`)" :alt="item.name">
                    <div class="view-photo-card__caption">
                        <div class="view-photo-card__title">
                            {{ item.name}}, {{ item.age }} years
                        </div>
                        <div class="view-photo-card__location">
                            {{ item.location }}
                        </div>
                    </div>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'PhotoCards',
    props: {
        step: {
            type: Number,
            dafault: 1,
        },
        cards: {
            type: Array,
            default: () => {
                return [];
            }
        }
    }
}
</script>

<style lang="scss">
    .view-photo-card {
        position: relative;
        height: 100%;

        > div {
            width: 100%;
            height: 100%;
        }

        @include desktop {
            flex-shrink: 0;
            width: 945px;
        }

        @include notebook {
            flex-shrink: 0;
            width: 705px;
        }

        @include laptop {
            flex-shrink: 0;
            width: 502px;
        }

        @include tablet {
            width: 100%;
            height: 100%;
            max-height: 400px;
            margin: 20px 0 0 0;
            transition: 300ms ease;
            background: $white;

            &.last {
                opacity: 0;
                visibility: hidden;
                display: none;
            }
        }

        @include mobile {
            width: 100%;
            height: 100%;
            margin: 20px 0 0 0;

            &.last {
                opacity: 0;
                visibility: hidden;
            }
        }


        &::before, &::after {
            content: '';
            z-index: 2;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);

            @include mobile {
                display: none;
            }

            @include tablet {
                display: none;
            }
        }

        &::before {
            right: calc(100% - 62px);
            width: 33px;
            height: calc(65000% / 810);
            border-top-left-radius: 40px;
            border-bottom-left-radius: 40px;
            background: #EBEBEB;
        }

        &::after {
            left: 0;
            width: 29px;
            height: calc(56500% / 810);
            border-top-left-radius: 40px;
            border-bottom-left-radius: 40px;
            background: #F9F9F9;
        }

        &__item {
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            max-height: 100%;
            filter: drop-shadow(100px 23px 50px rgba(0, 40, 16, 0.25));

            @include desktop {
                width: calc(100% - 62px);
            }

            @include notebook {
                width: calc(100% - 62px);
            }

            @include laptop {
                width: calc(100% - 62px);
            }

            @include tablet {
                width: calc(100% + 200px);
                margin: 0 -100px;
                transition: opacity 400ms ease-in-out;
            }

            @include mobile {
                width: calc(100% + 80px);
                margin: 0 -40px;
                transition: opacity 400ms ease-in-out;
            }

            @media (max-width: 374px) {
                width: calc(100% + 40px);
                margin: 0 -20px;
            }
        }

        &__wrapper {
            position: relative;
            width: calc(100% + 20px);
            overflow: hidden;
            height: 100%;

            @include desktop {
                width: calc(100% + 20px);
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
            }
            @include notebook {
                width: calc(100% + 20px);
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
            }

            @include laptop {
                border-top-left-radius: 50px;
                border-bottom-left-radius: 50px;
            }

            @include tablet {
                height: 100%;
            }

            img {
                width: calc(100% + 20px);
                height: calc(100% + 20px);
                object-fit: cover;
                object-position: center top;
                margin-left: -20px;
            }

        }

        &__caption {
            z-index: 2;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 23px 60px;
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(10px);

            @include tablet {
                padding: 17px 50px;
            }

            @include mobile {
                padding: 17px 30px;
            }
        }

        &__title {
            margin: 0 0 3px 0;
            font-weight: 500;

            @include tablet {
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
            }

            @include mobile {
                font-weight: 400;
                font-size: 18px;
                line-height: 25px;
            }
        }

        &__location {
            font-size: 18px;
            line-height: 140%;
            color: #5C5C5C;

            @include mobile {
                font-size: 15px;
                line-height: 18px;
            }
        }

        &__status {
            z-index: 2;
            position: absolute;
            top: 40px;
            left: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 118px;
            height: 45px;
            padding: 10px 25px 10px 20px;
            border-radius: 22.5px;
            background: $green--lucid-2;
            backdrop-filter: blur(10px);
            font-size: 18px;
            line-height: 140%;
            color: $white;

            @include mobile {
                top: 20px;
                left: 20px;
                width: 104px;
                height: 38px;
                font-size: 15px;
                line-height: 18px;
            }

            &::before {
                content: '';
                flex-shrink: 0;
                display: inline-block;
                width: 7px;
                height: 7px;
                margin: 0 7px 0 0;
                background-color: $green;
                border-radius: 7px;
            }
        }
    }
</style>