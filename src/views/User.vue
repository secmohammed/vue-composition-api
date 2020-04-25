<template>
    <div>{{ user.name }} {{ formattedPoint }}</div>
</template>
<script>
import { computed } from "@vue/composition-api";
import numeral from "numeral";
export default {
    props: {
        user: {
            required: true,
            type: Object,
        },
    },
    setup(props) {
        // props by default is a reactive property, if we destructure it, we lose the reactivity.
        // to tackle this, we can take the value of the prop after destructuring to a ref.
        // const points = ref(props.user.point)
        // computed works because it will reinvoke whenever a prop is changed.
        const formattedPoint = computed(() =>
            numeral(props.user.points).format("0,0")
        );
        return {
            formattedPoint,
        };
    },
};
</script>
