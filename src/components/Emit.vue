<template>
    <input type="text" @input="handleChange" />
</template>
<script>
export default {
    setup(props, { emit }) {
        function handleChange(e) {
            emit("changed", e.target.value);
        }
        return {
            handleChange,
        };
    },
};
</script>
