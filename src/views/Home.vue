<template>
    <div>
        {{ number }}
        <a href="#" @click.prevent="increment"> Increment </a>
    </div>
</template>

<script>
import { reactive, toRefs, ref } from '@vue/composition-api'
import useNumbers from './number'
export default {
    setup() {
      const number = ref(0)
      const { increment, decrement } = useNumbers(number)
      return {
        number,
        increment,
        decrement
      }
    }
};
</script>
