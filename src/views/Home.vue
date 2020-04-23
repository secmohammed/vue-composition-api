<template>
    <div>
        <div v-for="user in users" :key="user.id">
            {{user.name}}
        </div>
    </div>
</template>

<script>
import { toRefs, onMounted, reactive, onUpdated } from '@vue/composition-api'
export default {
    setup() {
        const state = reactive({
            users: []
        })
        const getUsers = () => {
            state.users = [
                {id: 1, name: 'Mohammed'},
                {id: 2, name: 'Ahmed'}
            ]
        }
        onUpdated(() => {
            console.log('updated')
        })
        onMounted(() => {
            getUsers()
        })
        return {
            ...toRefs(state)
        }
    }
};
</script>
