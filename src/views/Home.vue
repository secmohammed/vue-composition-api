<template>
    <div>
        <base-input v-model="name" />
        {{ name }}
    </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "@vue/composition-api";
import BaseInput from "@/components/BaseInput";
export default {
    name: "Home",
    components: {
        BaseInput,
    },
    setup() {
        const name = ref("");
        return {
            name,
        };
    },
};
</script>
