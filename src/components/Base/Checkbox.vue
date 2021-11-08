<template>
    <div class="form__group">
        <label class="form__checkbox" :class="{error: error}">
            <input
                :checked="checked"
                type="checkbox"
                @change="$emit('eventChange', $event.target.checked)"
            >
            <pre></pre>
            {{ placeholder }}
        </label>
    </div>
</template>

<script>
export default {
    name: 'Checkbox',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: String,
            default: ''
        },
        checked: {
            type: Boolean,
            default: false
        },
        error: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
    .form__checkbox {
        display: flex;
        align-items: center;
        padding: 15px 0;
        font-size: 16px;
        color: $black;
        cursor: pointer;

        input {
            width: 0;
            height: 0;
            opacity: 0;
            visibility: hidden;

            &:checked ~ pre::before {
                opacity: 1;
                visibility: visible;
                transform: rotate(45deg) scale(1);
            }
        }

        pre {
            position: relative;
            flex-shrink: 0;
            width: 20px;
            height: 20px;
            margin: 0 15px 0 0;
            background: $white;
            border: 1px solid $green;
            border-radius: 5px;

            &::before {
                content: '';
                position: absolute;
                top: 10%;
                left: 30%;
                width: 4px;
                height: 10px;
                border-bottom: 3px solid $green;
                border-right: 3px solid $green;
                border-radius: 2px;
                transform: rotate(45deg) scale(0.75);
                transition: 125ms ease;
                opacity: 0;
                visibility: hidden;
            }
        }

        &.error {

            pre {
                border-color: $red;
            }
        }
    }
</style>