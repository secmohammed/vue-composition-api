<template>
    <div>
        {{form.name}} {{ form.password }} {{ number }}

    </div>
</template>

<script>
import { reactive } from '@vue/composition-api'

export default {
    setup() {
        // // to create a reactive property, based on its type.
        // ref takes any primitive datatype.
        // to access value of ref and change its value, we have to use the ref.value
        // reactive accepts object.
        const state = reactive({
            form: {
                name: 'alex',
               password: 'password'
            },
            number: 0
        })
        setTimeout(() => {
            state.form.name = 'Billy'
            state.number = 1
        }, 2000)
        // when destructuring the reactive, primitive datatypes lose its reactivity.
        return {
            ...state
        }
    }
};
</script>
