<template>
    <footer class="view-footer">
        2008-{{ (new Date()).getFullYear() }} © All rights reserved
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss">
    .view-footer {
        flex-shrink: 0;
        font-size: 15px;
        line-height: 120%;
        color: $footer-color;

        @include tablet {
            position: absolute;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
        }

        @include mobile {
            display: none;
        }
    }
</style>