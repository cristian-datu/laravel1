<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col-6">
                <strong>Edit existing Terms of Service</strong>
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

        <TermsOfServiceForm v-bind:data="data" @submit="onSubmit" />
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
        },

        onSubmit(formData) {
            formData.append("_method", "patch");
            axios
                .post(`/api/terms-of-service/${this.data.id}`, formData)
                .then(response => response.data)
                .then(responseData => {
                    const { data } = responseData;
                    if (data && data.id) {
                        this.$router.push({ name: "tos.index" });
                    } else {
                        alert("Error saving Terms of Service");
                    }
                })
                .catch(error => {
                    const message = error?.response?.data?.message;
                    if (message) {
                        alert(message);
                    } else {
                        alert("Error saving Terms of Service");
                    }
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
