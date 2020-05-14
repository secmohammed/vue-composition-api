<template>
    <div>
        {{ counter }} <a href="" @click.prevent="increment(1)">increment</a>
    </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
    name: "home",
    setup(props, {root: {$store} }) {
        const counter = computed(() => $store.getters.counter)
        function increment(increment) {
            $store.dispatch('incrementCounter', increment)
        }
        return { counter, increment}
    }
};
</script>
