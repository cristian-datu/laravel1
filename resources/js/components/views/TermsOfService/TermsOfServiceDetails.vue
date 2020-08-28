<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col-6">
                <strong>Showing Terms of Service Details</strong>
            </div>
            <div class="col-6 text-right">
                <router-link
                    :to="{ name: 'tos.index' }"
                    class="btn btn-primary btn-sm"
                >
                    Terms of Service List
                </router-link>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h1 class="card-title">{{ data && data.title }}</h1>
            </div>
            <div class="card-body">
                <div class="card-text" v-html="data && data.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import TermsOfServiceForm from "../../ui/TermsOfService/TermsOfServiceForm";
export default {
    name: "TermsOfServiceEdit",
    components: { TermsOfServiceForm },

    data() {
        return {
            data: null
        };
    },

    methods: {
        loadData(id) {
            this.data = null;
            axios
                .get(`/api/terms-of-service/${id}`)
                .then(response => response.data)
                .then(responseData => {
                    const { data } = responseData;
                    if (data && data.id) {
                        this.data = data;
                    } else {
                        alert("Error loading Terms of Service");
                    }
                })
                .catch(error => {
                    alert("Error loading Terms of Service");
                });
        }
    },

    mounted() {
        const id = this.$route.params.id;
        if (id) {
            this.loadData(id);
        }
    }
};
</script>
