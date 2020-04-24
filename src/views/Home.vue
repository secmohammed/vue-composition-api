<template>
    <div>
        {{ nameShouting }}        
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from '@vue/composition-api'
export default {
    setup() {
        // const name = ref("Mohammed")
        const state = reactive({
            name: "Mohammed",
            nameShouting: computed(() => state.name.toUpperCase())
        })
        // const nameShouting = computed(() => name.value.toUpperCase())
        setTimeout(() => {
            state.name = "Ahmed"
        }, 2000)
        return toRefs(state)
        // return {
        //     // nameShouting
        // }
    }
};
</script>
