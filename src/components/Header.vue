<template>
    <header class="view-header" :class="{last: step === 4}">
        <div class="view-header__wrapper">
            <div class="view-header__logotype">
                <Logo />
            </div>
            <div class="view-header__devider"></div>
            <div class="view-header__caption">
                <NumberOne />
                Among international
                <br>dating sites
            </div>
            <Button 
                class="button--small"
                text="Sign up"
                @eventClick="$emit('lastStep', 4)"
            />
        </div>
    </header>
</template>

<script>
import Logo from '@/assets/logo.svg';
import NumberOne from '@/assets/number-one.svg';
import Button from '@/components/Base/Button';

export default {
    props: {
        step: {
            type: Number,
            default: 0
        }
    },
    components: {
        Logo,
        NumberOne,
        Button
    }
}
</script>

<style lang="scss">
    .view-header {
        position: relative;
        width: 100%;
        flex-shrink: 0;

        @include tablet {
            height: 38px;

            &.last .view-header__wrapper {
                transform: translateX(-50%);
                left: 50%;
            }
        }

        &__wrapper {

            @include tablet {
                left: 0;
                position: absolute;
            }

            @include mobile {
                position: static;
                transform: unset !important;
            }

            display: flex;
            align-items: center;
            transition: 300ms ease;
            transform-origin: left;
        }

        &__logotype {
            width: 101px;
            height: 36px;

            @include mobile {
                width: 91px;
                height: 32px;
            }

            svg {
                width: 100%;
                height: 100%;
            }
        }

        &__devider {
            width: 1px;
            height: 30.5px;
            margin: 0 30px;
            background-color: $devider;
        }

        &__caption {

            @media (min-width: 1281px) {
                display: inline-flex;
                align-items: center;
                margin: 0 30px 0 0;
                font-size: 15px;
                line-height: 120%;
                color: $gray;
    
                svg {
                    margin-right: 9.8px;
                }
            }

            @include mobile {
                display: none;
            }

            @include tablet {
                display: none;
            }

            @include laptop {
                display: none;
            }
        }
    }
</style>