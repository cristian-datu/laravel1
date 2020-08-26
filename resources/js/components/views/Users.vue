<template>
    <div class="container">
        <UserTable v-bind:users="users" />
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
import Pagination from "../ui/Pagination";
import UserTable from "../Users/UserTable";

export default {
    name: "Users",

    components: {
        Pagination,
        UserTable
    },

    data() {
        return {
            isLoading: false,
            selectedUser: null,
            page: 1,
            users: [],
            meta: {
                per_page: 0,
                current_page: 0,
                last_page: 0,
                from: 0,
                to: 0,
                total: 0
            }
        };
    },

    methods: {
        loadUsers(page) {
            const update = data => {};
            this.isLoading = true;

            axios({
                method: "get",
                url: `/api/users?page=${page}`,
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.data)
                .then(response => {
                    const { data, meta, links } = response;
                    if (data instanceof Array) {
                        this.users = data.slice();
                    }
                    if (links instanceof Object) {
                        this.links = links;
                    }
                    if (links instanceof Object) {
                        this.meta = meta;
                        this.page = meta.current_page;
                    }
                })
                .catch(error => {
                    this.users = [];
                    this.page = 1;
                    console.error(error);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },

        onPaginationChange(page) {
            if (
                !this.isLoading &&
                this.page !== page &&
                page > 0 &&
                page <= this.meta.last_page
            ) {
                this.loadUsers(page);
            }
        }
    },

    mounted() {
        this.loadUsers(1);
    }
};
</script>
