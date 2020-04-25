<template>
    <div>
        {{ zipUpperCase }}
        <input type="text" v-model="zipUpperCase">
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from '@vue/composition-api'
import { usePasswordStrength } from './password'
export default {
    setup() {
        const zip = ref('')
        const zipUpperCase = computed({
            get: () => zip.value.toUpperCase(),
            set: value => zip.value = value.toUpperCase()
        })
        return {
            zipUpperCase
        }
    }
};
</script>
