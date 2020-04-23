<template>
    <div>
    <p>{{ number }}</p>
    <p>{{string}}</p>
        
    </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
    setup() {
        // to create a reactive property, based on its type.
        const number = ref(0)
        const string = ref('Hello') // ref takes any primitive datatype.
        setInterval(() => {
            number.value++
        }, 1000)
        return {
            number,
            string
        }
    }
};
</script>
