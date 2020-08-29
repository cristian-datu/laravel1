<template>
    <header class="mb-4">
        <div v-if="hasUnaccepted" class="container text-center mb-4">
            <p><strong>New Terms of Service available!</strong></p>
            <p>
                You can accept them by clicking
                <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    v-on:click.prevent="acceptTerms"
                >
                    here
                </button>
            </p>
            <p>
                Read latest Terms of Service by clicking
                <router-link :to="{ name: 'latest-terms' }">here</router-link>
            </p>
            <p>
                Review accepted terms
                <router-link :to="{ name: 'accepted-terms' }">here</router-link>
            </p>
        </div>
        <div class="container">
            <ul class="nav">
                <li class="nav-item">
                    <router-link
                        :to="{ name: 'users.index' }"
                        active-class="active"
                        class="nav-link"
                        >Users</router-link
                    >
                </li>
                <li class="nav-item">
                    <router-link
                        :to="{ name: 'tos.index' }"
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
    name: "AppHeader",
    data() {
        return {
            hasUnaccepted: false,
            userId: 0
        };
    },
    methods: {
        acceptTerms: function() {
            if (this.userId > 0 && this.hasUnaccepted) {
                const formData = new FormData();
                formData.append("_method", "patch");
                axios
                    .post(`/api/users/${this.userId}/accept`, formData)
                    .then(response => response.data)
                    .then(responseData => {
                        const { error, data } = responseData;
                        this.hasUnaccepted = !(!error && data === "accepted");
                    })
                    .catch(error => {
                        alert("Error performing operation");
                    });
            }
        }
    },
    mounted() {
        axios
            .get("/api/terms-of-service/unaccepted")
            .then(response => response.data)
            .then(responseData => {
                const { error, data, userId } = responseData;
                this.hasUnaccepted = !error && data === "yes";
                this.userId = userId;
            })
            .catch(error => {
                this.error = "Error loading content";
            });
    }
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
