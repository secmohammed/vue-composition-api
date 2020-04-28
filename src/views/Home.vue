<template>
    <div>{{ number }}</div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "@vue/composition-api";
export default {
    name: "Home",
    setup() {
        // const number = ref(0);
        // setInterval(() => {
        //     number.value++;
        // }, 1000);
        // watch(number, (number, previous) => {
        //     console.log("changed", number, previous);
        // });
        const state = reactive({
            number: 0,
        });
        setInterval(() => {
            state.number++;
        }, 1000);
        // to watch on reactive state, we have to use function
        watch(
            () => state,
            (state) => {
                console.log(state.number);
            },
            { deep: true }
        );

        return toRefs(state);
    },
};
</script>
