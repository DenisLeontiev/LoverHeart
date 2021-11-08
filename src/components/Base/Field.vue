<template>
    <div class="form__group">
        <input 
            class="form__field"
            :class="{error: error}"
            :value="value"
            :type="type"
            :placeholder="placeholder"
            @input="$emit('eventInput', $event.target.value)"
        >

        <transition name="fade">
            <div v-if="error" class="form__group__error">
                {{ errorText }}
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Field',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: String,
            default: ''
        },
        error: {
            type: Boolean,
            default: false
        },
        errorText: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .form__field {
        display: block;
        width: 100%;
        height: 50px;
        padding: 16px 26px;
        border: 1px solid $field-border;
        border-radius: 15px;
        background: $white;
        font-size: 15px;
        color: $field-color;
        font-family: $font;
        transition: 100ms ease-in-out;

        &.error {
            border-color: $red;
        }

        &::placeholder {
            transition: 100ms ease;
        }

        &:focus {

            &::placeholder {
                opacity: 0;
            }
        }
    }
</style>