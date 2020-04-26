<template>
    <div>
        <User v-for="user in users" :user="user" :key="user.id" />
    </div>
</template>

<script>
import { ref, computed, reactive, toRefs } from "@vue/composition-api";
import { usePasswordStrength } from "./password";
import User from "./User";
export default {
    name: "Home",
    components: {
        User,
    },
    setup() {
        const users = ref([
            {
                name: "Mohammed",
                id: 1,
                points: 10,
            },
            {
                name: "Ahmed",
                id: 2,
                points: 20,
            },
        ]);
        setTimeout(() => {
            users.value = users.value.map((user) => {
                if (user.id == 1) {
                    user.points = 1000;
                }
                return user;
            });
        }, 2000);
        return {
            users,
        };
    },
};
</script>
