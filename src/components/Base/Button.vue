<template>
  <button
    @click.prevent="$emit('eventClick')"
    :type="type"
    class="button"
    :disabled="disabled"
    :class="classNames"
  >
    <span>{{ text }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: String,
    classNames: String,
    disabled: [String, Boolean],
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    eventclick() {
      this.$emit('eventclick');
    }
  }
};
</script>

<style lang="scss">
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    box-shadow: none;
    text-align: center;
    transition: 200ms ease-in-out;
    outline: none;
    cursor: pointer;
    text-decoration: none;

    &--green {
      background-color: $green;

      &:hover, &:active {
        background-color: $green--hover;
      }
    }

    &--red {
      background-color: $red;

      &:hover, &:active {
        background-color: $red--hover;
      }
    }

    &--base {
      @media (min-width: 1281px) {
        min-width: 224px;
        height: 60px;
        padding: 18px 57px;
        border-radius: 30px;
      }

      @media (max-width: 1280px) {
        min-width: 141px;
        height: 50px;
        padding: 13px 52.6px;
        border-radius: 25px;
      }

      @include mobile {
        width: 141px;
      }

      font-size: 20px;
      letter-spacing: 0.02em;
      border: none;
      font-weight: 500;
      color: $white;
    }

    &--large {
      @media (min-width: 1281px) {
        min-width: 320px;
        height: 60px;
        padding: 18px 57px;
        border-radius: 30px;
      }

      @media (max-width: 1280px) {
        max-width: 275px;
        height: 50px;
        padding: 13px 52.6px;
        border-radius: 25px;
      }

      @include mobile {
        width: 100%;
      }

      @include tablet {
        width: 100%;
      }

      font-size: 20px;
      letter-spacing: 0.02em;
      border: none;
      font-weight: 500;
      color: $white;
    }

    &--small {
      min-width: 105px;
      height: 38px;
      padding: 9.5px 29px;

      @include mobile {
        padding: 9.5px 22.5px;
      }
      border: 1px solid $green;
      border-radius: 19px;
      font-size: 16px;
      color: $green;

      &:hover, &:active {
        background-color: $green--lucid;
      }
    }
  }
</style>