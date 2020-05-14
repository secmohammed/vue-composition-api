<template>
    <div>
        <a href="" @click.prevent="download">
            Download
        </a>
    </div>
</template>

<script>
export default {
    name: "home",
    setup(props, { root }) {
        const user = {
            pro: false
        }
        function download() {
            if(!user.pro) {
                root.$router.replace({name: 'pro'})
                return
            }
            console.log('download')
        }
        return { download}
    }
};
</script>
