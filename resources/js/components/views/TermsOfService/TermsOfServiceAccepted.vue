<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">Accepted Terms of Service</h1>
            </div>
            <div v-if="item" class="card-body">
                <h2 class="mb-2">{{ item.title }} ({{ item.published_at }})</h2>
                <div v-html="item.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TermsOfServiceAccepted",
    data() {
        return {
            item: "",
            error: ""
        };
    },
    mounted() {
        axios
            .get("/api/terms-of-service/accepted")
            .then(response => response.data)
            .then(responseData => {
                const { error, data } = responseData;
                this.error = error;
                console.log(data);
                if (data && data.published_at) {
                    data.published_at = new Date(
                        data.published_at
                    ).toLocaleString("en-US");
                    this.item = data;
                }
            })
            .catch(error => {
                this.error = "Error loading content";
            });
    }
};
</script>
