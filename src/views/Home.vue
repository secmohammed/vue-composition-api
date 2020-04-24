<template>
    <div>
        <input type="password" v-model="form.password" />
        {{ passwordStrength }}
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from '@vue/composition-api'
import { usePasswordStrength } from './password'
export default {
    setup() {
        const state = reactive({
            form: {
                password: ''
            },
            passwordStrength: computed(() => usePasswordStrength(state.form.password))
        })
        return toRefs(state)
    }
};
</script>
