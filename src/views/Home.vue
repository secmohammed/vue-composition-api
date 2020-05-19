<template>
    <div>
         {{ counter}} <a href="#" @click.prevent="incrementCounter(1)">Increment</a>
    </div>
</template>

<script>
import { useGetters, useActions } from 'vuex-composition-helpers'
export default {
    name: "home",
    setup(_, {root}) {
        const { counter } = useGetters({
            counter: 'counter'
        })
        const {incrementCounter }= useActions({
            incrementCounter: 'incrementCounter'
        })
        return { counter, incrementCounter }
    }
};
</script>
