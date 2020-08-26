<template>
    <div>
        <AppHeader />
        <router-view />
    </div>
</template>

<script>
import AppHeader from "./AppHeader";

export default {
    name: "app",
    components: {
        AppHeader
    },
    mounted() {
        this.$router.push({ path: this.$router.options.routes[0].path });
    }
};
</script>
