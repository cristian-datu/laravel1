<template>
    <header>
        <div class="container">
            <ul class="nav">
                <li class="nav-item">
                    <router-link
                        :to="{ name: 'Users' }"
                        active-class="active"
                        class="nav-link"
                        >Users</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link
                        :to="{ name: 'TermsOfService' }"
                        active-class="active"
                        class="nav-link"
                        >Terms of Service</router-link
                    >
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style scoped>
.nav-link {
    transition: color 200ms ease-in;
}
.nav-link:hover,
.active {
    color: #000000;
}

.active {
    font-weight: 700;
}
</style>
