<template>
    <input type="text" :value="value" @input="handleInput" />
</template>
<script>
export default {
    props: {
        value: {
            required: false,
        },
    },
    setup(props, { emit }) {
        function handleInput(e) {
            emit("input", e.target.value);
        }
        return {
            handleInput,
        };
    },
};
</script>
