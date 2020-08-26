<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
        axios({
            method: "get",
            url: "/api/users",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => console.log(response))
            .catch(error => console.error(error));

        axios({
            method: "get",
            url: "/api/user/1",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => console.log(response))
            .catch(error => console.error(error));
    }
};
</script>
