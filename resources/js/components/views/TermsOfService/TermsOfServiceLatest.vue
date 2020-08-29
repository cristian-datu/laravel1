<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h1 class="card-title">Latest Terms of Service</h1>
                <hr v-if="title" />
                <h2 v-if="title">{{ title }}</h2>
            </div>
            <div v-if="htmlContent" class="card-body">
                <div class="card-text" v-html="htmlContent"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TermsOfServiceLatest",
    data() {
        return {
            title: "",
            htmlContent: ""
        };
    },
    mounted() {
        axios
            .get("/api/terms-of-service/latest")
            .then(response => response.data)
            .then(responseData => {
                const { data } = responseData;
                console.log(data.content);
                if (data) {
                    this.title = data.title;
                    this.htmlContent = data.content;
                }
            })
            .catch(error => {
                this.htmlContent = "Error loading content";
            });
    }
};
</script>
