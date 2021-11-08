<template>
    <form class="view-registration form" :class="className">
        <div class="heart">
            <div class="heart__background"></div>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.317 1.78949e-05C13.5072 -0.00198111 12.7079 0.189809 11.9815 0.560426C11.255 0.931042 10.6211 1.47046 10.1292 2.1366C9.63715 1.47034 9.00312 0.930834 8.27656 0.56021C7.54999 0.189586 6.75055 -0.0021327 5.94063 1.78949e-05C3.02317 1.78949e-05 0.640632 2.46643 0.629453 5.49789C0.618512 8.76041 2.14194 10.6839 3.36639 12.2301L3.62897 12.5624C5.07866 14.4135 9.5733 17.7383 9.76358 17.879C9.87045 17.9577 9.99836 18 10.1295 18C10.2607 18 10.3886 17.9577 10.4954 17.879C10.6857 17.7383 15.1804 14.4135 16.6301 12.5624L16.8924 12.2301C18.1166 10.6839 19.6403 8.76041 19.6293 5.49789C19.6179 2.46643 17.2351 1.78949e-05 14.317 1.78949e-05Z" fill="#D0F6E9"/>
            </svg>
        </div>
        <h2 class="view-title view-title--h3">
            Last step!
            <br><span>Free registration.</span>
        </h2>
        <Field 
            type="text"
            placeholder="Your name"
            :value="form.name"
            :error="$v.form.name.$error"
            :error-text="$v.form.name.$error && $v.form.name.$errors[0].$message || ''"
            @eventInput="($v.form.name.$model = $event, delayTouch($v.form.name))"
        />
        <Field 
            type="email"
            placeholder="E-mail"
            :value="form.email"
            :error="$v.form.email.$error"
            :error-text="$v.form.email.$error && $v.form.email.$errors[0].$message || ''"
            @eventInput="($v.form.email.$model = $event, delayTouch($v.form.email))"
        />
        <Checkbox 
            placeholder="I am not a robot"
            :error="$v.form.sign_agree.$error"
            @eventChange="$v.form.sign_agree.$model = $event"
        />
        <Button 
            class="button--large button--green"
            text="JOIN US"
            @eventClick="submit"
        />
    </form>
</template>

<script>
/* es-lint-disable */
import useVuelidate from '@vuelidate/core';
import { required, email, sameAs } from '@vuelidate/validators';
import Button from '@/components/Base/Button';
import Field from '@/components/Base/Field';
import Checkbox from '@/components/Base/Checkbox';

export default {
    name: 'Registration',
    props: {
        className: {
            type: String,
            default: ''
        }
    },
    components: {
        Field,
        Checkbox,
        Button
    },
    setup: () => ({
        $v: useVuelidate()
    }),
    data: () => ({
        form: {
            name: '',
            email: '',
            sign_agree: false,
        },
        wMap: new WeakMap(),
    }),
    validations: () => ({
        form: {
            name: { required },
            email: { required, email },
            sign_agree: { sameAs: sameAs(true) }
        }
    }),
    created() {
        this.getParams();
    },
    methods: {
        delayTouch($v) {
            $v.$reset();
            if (this.wMap.has($v)) clearTimeout(this.wMap.get($v));
            this.wMap.set($v, setTimeout($v.$touch, 1000));
        },

        async getIP() {
            try {
                const response = await fetch('https://api.ipify.org/?format=json');
                const { ip } = await response.json();

                return ip;
            } catch (error) {
                console.error(error);
                return null;
            }
        },

        async getParams() {
            const ip = await this.getIP();
            const url = new URL(document.location);
            const params = url.searchParams;

            Object.assign(this.form, {
                'pid': params.get('pid') || null,
                'pid-sid': params.get('sid') || null,
                'ip': ip,
            });
        },

        submit() {
            this.$v.$touch();

            if (this.$v.$error) return;
            else {
                const data = new FormData();
                for (const key in this.form) {
                    data.append(key, this.form[key]);
                }

                // Input body: data
            }
        }
    }
}
</script>

<style lang="scss">
    .view-registration {
        position: absolute;

        @include desktop {
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 50px 63.5px;
        }

        @include notebook {
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 50px 63.5px;
        }

        @include laptop {
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 50px 63.5px;
        }

        @include tablet {
            top: 50%;
            max-width: calc(100% + 40px);
            padding: 35.5px 27.5px;
            transform: translate(-50%, -50%);
        }
        
        @include mobile {
            top: 100px;
            max-width: calc(100% + 40px);
            padding: 35.5px 27.5px;
            transform: translateX(-50%);
        }


        left: 50%;
        width: 478px;
        max-width: 100%;
        border-radius: 20px;
        background: linear-gradient(143.63deg, #FFFFFF -4.46%, #F7FFFB 106.18%);
        box-shadow: 0px 34px 124px rgba(206, 222, 215, 0.48);
        transform: translateX(-50%);
        transition-delay: 600ms;

        &.active {

            .heart {
                
                opacity: 1;
                visibility: visible;
                animation: moveHeart 600ms ease 300ms forwards;

                @include mobile {
                    animation: moveHeartMobile 600ms ease 300ms forwards;
                }

                .heart__background {
                    animation: moveHeartBcg 400ms ease 600ms forwards;
                }
            }
        }

        .heart {
            z-index: 2;
            position: absolute;
            left: 50%;
            top: 0;
            transform: translate(-50%, -50%);
            transition-delay: 350ms;


            @media (min-width: 1281px) {
                width: 20px;
                height: 18px;
            }

            @media (max-width: 1280px) {
                width: 13.8px;
                height: 13px;
            }

            opacity: 0;
            visibility: hidden;
            transition: all 200ms ease-in-out;

            @include mobile {
                width: 12.57px;
                height: 11.91px;
            }

            &__background {
                z-index: -1;
                position: absolute;
                top: calc(50% - 41.5px);
                left: calc(50% - 38.5px);
                width: 77px;
                height: 77px;
                background: $white;
                box-shadow: 0px 34px 124px rgba(154, 193, 176, 0.48);
                border-radius: 77px;
                transform: scale(0);
                opacity: 0;
                transform-origin: center center;

                @include mobile {
                    width: 71px;
                    height: 71px;
                    left: calc(50% - 35.5px);
                    top: calc(50% - 37.5px);
                }
            }

            svg {
                display: block;
                width: 100%;
                height: 100%;
            }


            &:not(.prev) {
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }

        @keyframes moveHeartBcg {
            0% {
                opacity: 0;
                transform: scale(.5);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }

        @keyframes moveHeart {
            0% {
                right: 1px;
            }
            75% {
                left: 50%;
                transform: translate(-50%, -50%);
            }
            100% {
                left: 50%;
                transform: translate(-50%, -50%);
                width: 50px;
                height: 46px;
            }
        }

        @keyframes moveHeartMobile {
            0% {
                width: 12.57px;
                height: 11.91px;
            }
            100% {
                width: 44px;
                height: 40px;
            }
        }

        .button--large {
            min-width: 100%;
        }
    }
</style>