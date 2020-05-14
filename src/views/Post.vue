<template>
    <div>
        <a href="#" @click.prevent="nextPost">Next Post</a>
        {{ postID }}
    </div>
</template>
<script>
import { computed } from "@vue/composition-api"
    export default {
        props: {
            id: {
                required: true
            }
        },
        name:"post",
        setup(props, { root }) {
            const postID = computed(() => parseInt(props.id))
            // const postID = computed(() => parseInt(root.$route.params.id))
            function nextPost() {
                root.$router.replace({
                    params: {
                        id: postID.value + 1
                    }
                })
            }
            return {
                nextPost, postID
            }
        }
    }
</script>