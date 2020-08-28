<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col-6"><strong>Terms of Service List</strong></div>
            <div class="col-6 text-right">
                <router-link
                    :to="{ name: 'tos.create' }"
                    class="btn btn-primary btn-sm"
                >
                    Add Terms of Service
                </router-link>
            </div>
        </div>

        <SearchBar
            labelText="Search by title"
            buttonText="Search"
            eventType="search-tos"
        />

        <TermsOfServiceTable v-bind:data="store" />

        <Pagination
            v-on:pagination-change="onPaginationChange"
            v-bind:per_page="meta.per_page"
            v-bind:current_page="meta.current_page"
            v-bind:last_page="meta.last_page"
            v-bind:from="meta.from"
            v-bind:to="meta.to"
            v-bind:total="meta.total"
        />
    </div>
</template>

<script>
import Pagination from "../../ui/Pagination";
import SearchBar from "../../ui/SearchBar";
import TermsOfServiceTable from "../../ui/TermsOfService/TermsOfServiceTable";

export default {
    name: "TermsOfServiceList",
    components: {
        Pagination,
        SearchBar,
        TermsOfServiceTable
    },

    data() {
        return {
            store: [],
            isLoading: false,
            page: 1,
            meta: {
                per_page: 0,
                current_page: 1,
                last_page: 1,
                from: 0,
                to: 0,
                total: 0
            }
        };
    },

    methods: {
        parseDates(item) {
            if (item.published_at) {
                item.published_at = new Date(item.published_at);
            } else {
                item.published_at = null;
            }
            if (item.created_at) {
                item.created_at = new Date(item.created_at);
            } else {
                item.created_at = null;
            }
            if (item.updated_at) {
                item.updated_at = new Date(item.updated_at);
            } else {
                item.updated_at = null;
            }
            return item;
        },

        updateItem(data) {
            if (data && data.id) {
                data = this.parseDates(data);
                this.store = this.store.map(val => {
                    if (val.id === data.id) {
                        return data;
                    } else {
                        return val;
                    }
                });
            }
        },

        loadItems(arr) {
            if (arr instanceof Array) {
                this.store = arr;
                this.store = arr.map(item => this.parseDates(item));
            }
        },

        loadData(page, search) {
            this.isLoading = true;
            search = search ?? "";
            if (page < 1) {
                page = 1;
            } else if (page > this.meta.last_page) {
                page = this.meta.last_page;
            }
            axios
                .get(`/api/terms-of-service?page=${page}&search=${search}`)
                .then(response => response.data)
                .then(response => {
                    const { data, meta } = response;

                    this.loadItems(data);

                    this.page = page;
                    if (meta instanceof Object) {
                        this.meta = meta;
                    }
                })
                .catch(error => {
                    this.store = [];
                    this.meta = {
                        per_page: 0,
                        current_page: 1,
                        last_page: 1,
                        from: 0,
                        to: 0,
                        total: 0
                    };
                    alert("Error loading Terms of Service");
                })
                .finally(() => (this.isLoading = false));
        },

        onSearch(term) {
            this.page = 1;
            this.meta = {
                per_page: 0,
                current_page: 1,
                last_page: 1,
                from: 0,
                to: 0,
                total: 0
            };
            this.loadData(1, term);
        },

        onPaginationChange(page) {
            if (
                !this.isLoading &&
                this.page !== page &&
                page > 0 &&
                page <= this.meta.last_page
            ) {
                this.loadData(page);
            }
        },

        onDelete(data) {
            // Validate passed data and get the id
            const item = this.store.find(val => val === data);

            if (!item) {
                return;
            }
            if (item.published_at) {
                alert("Published terms cannot be deleted");
            }
            if (
                confirm(
                    `Are you sure you want to delete item with ID ${item.id}?`
                )
            ) {
                this.isLoading = true;
                axios
                    .delete(`/api/terms-of-service/${item.id}`)
                    .then(response => response.data)
                    .then(responseData => {
                        const { error, data } = responseData;
                        if (error) {
                            alert(error);
                            this.updateItem(data);
                        } else {
                            this.store = this.store.filter(
                                val => val.id !== item.id
                            );
                            let page = this.page;
                            if (this.store.length === 0) {
                                page--;
                            }
                            this.loadData(page);
                        }
                    })
                    .catch(error =>
                        alert(`Error deleting item with ID ${item.id}`)
                    )
                    .finally(() => (this.isLoading = false));
            }
        },

        onPublish(data) {
            // Validate passed data and get the id
            const item = this.store.find(val => val === data);

            if (!item) {
                return;
            }
            if (item.published_at) {
                alert("Item already published");
                return;
            }

            const form = new FormData();
            form.append("_method", "patch");
            axios
                .post(`/api/terms-of-service/${item.id}/publish`, form)
                .then(response => response.data)
                .then(responseData => {
                    const { error, data } = responseData;
                    if (error) {
                        alert(error);
                    } else {
                        this.updateItem(data);
                    }
                })
                .catch(error =>
                    alert(`Error publishing item with ID ${item.id}`)
                );
        },

        onUnpublish(data) {
            // Validate passed data and get the id
            const item = this.store.find(val => val === data);

            if (!item) {
                return;
            }
            if (!item.published_at) {
                alert("Item not published");
                return;
            }

            const form = new FormData();
            form.append("_method", "patch");
            axios
                .post(`/api/terms-of-service/${item.id}/unpublish`, form)
                .then(response => response.data)
                .then(responseData => {
                    const { error, data } = responseData;
                    if (error) {
                        alert(error);
                    } else {
                        this.updateItem(data);
                    }
                })
                .catch(error =>
                    alert(`Error publishing item with ID ${item.id}`)
                );
        }
    },

    mounted() {
        this.loadData(1, "");
        this.$root.$on("search-tos", term => this.onSearch(term));
        this.$root.$on("delete-tos", item => this.onDelete(item));
        this.$root.$on("publish-tos", item => this.onPublish(item));
        this.$root.$on("unpublish-tos", item => this.onUnpublish(item));
    }
};
</script>
