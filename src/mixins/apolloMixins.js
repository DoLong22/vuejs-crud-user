import Vue from 'vue';

Vue.mixin({
    destroyed() {
        if (this.$_apollo) {
          this.$_apollo.destroy();
        }
    },
});
