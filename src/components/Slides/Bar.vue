<template>
    <div class="view-bar">
        <div class="view-bar__svg-wrapper">
            <svg class="view-bar__svg" :class="{hide: step > 3}" width="446" height="22" viewBox="0 0 446 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                    cx="11" cy="11" fill="#07CA84" 
                    :r="step === 1 ? 9 : 5"
                    :stroke="step === 1 ? '#D0F6E9' : '#ffffff'"
                    :stroke-width="step === 1 ? 4 : 0"
                />
                <rect x="28" y="9.5" width="109.21" height="3" rx="1.5" fill="#D0F6E9"/>
                <rect 
                    x="28" y="9.5" height="3" rx="1.5" fill="#07CA84"
                    :width="step > 1 ? 109.21 : 0" 
                />
                <circle cx="152.21" cy="11"
                    :r="step === 2 ? 9 : 5"
                    :fill="step > 1 ? '#07CA84' : '#D0F6E9'"
                    :stroke="step === 2 ? '#D0F6E9' : '#ffffff'"
                    :stroke-width="step === 2 ? 4 : 0"
                />
                <rect x="167.21" y="9.5" width="109.21" height="3" rx="1.5" fill="#D0F6E9"/>
                <rect 
                    x="167.21" y="9.5" height="3" rx="1.5" fill="#07CA84"
                    :width="step > 2 ? 109.21 : 0"
                />
                <circle 
                    cx="291.42" cy="11"
                    :r="step === 3 ? 9 : 5"
                    :fill="step > 2 ? '#07CA84' : '#D0F6E9'"
                    :stroke="step === 3 ? '#D0F6E9' : '#ffffff'"
                    :stroke-width="step === 3 ? 4 : 0"
                />
                <rect x="306.42" y="9.5" width="109.21" height="3" rx="1.5" fill="#D0F6E9"/>
                <rect 
                    x="306.42" y="9.5" height="3" rx="1.5" fill="#07CA84"
                    :width="step > 3 ? 109.21 : 0"
                />
                <g clip-path="url(#clip0_138:1839)">
                    <path d="M439.898 2.00002C439.088 1.99802 438.288 2.18981 437.562 2.56043C436.836 2.93104 436.202 3.47046 435.71 4.1366C435.218 3.47034 434.584 2.93083 433.857 2.56021C433.131 2.18959 432.331 1.99787 431.521 2.00002C428.604 2.00002 426.221 4.46643 426.21 7.49789C426.199 10.7604 427.723 12.6839 428.947 14.2301L429.21 14.5624C430.659 16.4135 435.154 19.7383 435.344 19.879C435.451 19.9577 435.579 20 435.71 20C435.841 20 435.969 19.9577 436.076 19.879C436.266 19.7383 440.761 16.4135 442.211 14.5624L442.473 14.2301C443.697 12.6839 445.221 10.7604 445.21 7.49789C445.198 4.46643 442.816 2.00002 439.898 2.00002V2.00002Z" 
                        fill="#D0F6E9"
                    />
                </g>
                <defs>
                <clipPath id="clip0_138:1839">
                    <rect width="20" height="20" fill="white" transform="translate(425.629 1)"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bar',
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
}
</script>

<style lang="scss">
    .view-bar {
        width: 100%;

        &__svg-wrapper {

            @include desktop {
                padding: 170px 0 70px 0;
            }

            @include notebook {
                padding: 150px 0 64px 0;
            }

            @include laptop {
                padding: 100px 0 40px 0;
            }

            @include tablet {
                padding: 80px 0 34px 0;
            }

            @include mobile {
                padding: 44px 0 26px 0;
            }
        }

        &__svg {
            @include laptop {
                width: 324px;
            }

            @include tablet {
                width: 324px;
            }

            @include mobile {
                width: 295px;
            }

            transition: all 150ms ease-in-out;
            transition-delay: 200ms;

            rect {
                transition: 200ms ease;
            }

            circle, path {
                transition: fill 200ms ease, stroke 300ms ease-in-out, r 400ms ease-in-out, stroke-width 200ms ease-in-out;
            }

            &.hide {
                opacity: 0;
                visibility: hidden;
            }
        }
    }
</style>