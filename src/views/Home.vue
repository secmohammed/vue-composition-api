<template>
    <div>
        {{name}} {{ password }} {{number}}

    </div>
</template>

<script>
import { reactive, toRefs, ref } from '@vue/composition-api'

export default {
    setup() {
        // // to create a reactive property, based on its type.
        // ref takes any primitive datatype.
        // to access value of ref and change its value, we have to use the ref.value
        // reactive accepts object.
        const state = reactive({
                name: 'alex',
               password: 'password'
        })
        const number = ref(0)
        setTimeout(() => {
            state.name = 'Billy'
            number.value++
        }, 2000)
        console.log(state, toRefs(state))
        // when destructuring the reactive, primitive datatypes lose its reactivity.
        return {
            ...toRefs(state),
            number
        }
    }
};
</script>
