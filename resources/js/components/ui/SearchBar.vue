<template>
    <form action="#" v-on:submit.prevent="submitSearch" class="mb-4">
        <div class="input-group input-group-sm mb-3">
            <input
                v-model.trim="search"
                v-bind:placeholder="labelText"
                v-bind:aria-label="labelText"
                type="text"
                class="form-control"
                aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit">
                    {{ buttonText }}
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "SearchBar",
    props: {
        labelText: { type: String, required: false, default: "Search terms" },
        buttonText: { type: String, required: false, default: "Search" },
        eventType: { type: String, required: false, default: "on-search" }
    },
    data() {
        return {
            search: ""
        };
    },
    methods: {
        submitSearch() {
            this.$root.$emit(this.eventType, this.search);
        }
    }
};
</script>

<style scoped></style>
