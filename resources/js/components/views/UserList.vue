<template>
    <div class="container">
        <SearchBar
            labelText="Search Users"
            buttonText="Search"
            eventType="search-users"
        />
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
import SearchBar from "../ui/SearchBar";
import Pagination from "../ui/Pagination";
import UserTable from "../Users/UserTable";

export default {
    name: "UserList",

    components: {
        SearchBar,
        Pagination,
        UserTable
    },

    data() {
        return {
            isLoading: false,
            selectedUser: null,
            page: 1,
            search: "",
            users: [],
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
        loadUsers(page, term) {
            const update = data => {};
            this.isLoading = true;
            term = term ?? "";

            axios({
                method: "get",
                url: `/api/users?page=${page}&search=${term}`,
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
            this.loadUsers(1, term);
        },

        onUnverifyUser(data) {
            // Validate passed user and get the id
            const user = this.users.find(val => val === data);

            if (!user || !user.email_verified_at) {
                return;
            }
            if (
                confirm(`Are you sure you want to unverify user ${user.email}?`)
            ) {
                axios
                    .patch(`/api/users/${user.id}?unverify=1`, user)
                    .then(response => {
                        if (response.error) {
                            alert(`Error unverifying user ${user.email}`);
                        } else {
                            this.users = this.users.map(item => {
                                if (item.id === user.id) {
                                    item.email_verified_at = null;
                                }
                                return item;
                            });
                        }
                    })
                    .catch(error =>
                        alert(`Error unverifying user ${user.email}`)
                    );
            }
        },

        onDeleteUser(data) {
            // Validate passed user and get the id
            const user = this.users.find(val => val === data);

            if (!user) {
                return;
            }
            if (
                confirm(`Are you sure you want to delete user ${user.email}?`)
            ) {
                axios
                    .delete(`/api/users/${user.id}`)
                    .then(response => {
                        if (response.error) {
                            alert(`Error deleting user ${user.email}`);
                        } else {
                            this.users = this.users.filter(
                                item => item.id !== user.id
                            );
                        }
                    })
                    .catch(error => alert(`Error deleting user ${user.email}`));
            }
        }
    },

    mounted() {
        this.loadUsers(1);
        this.$root.$on("search-users", term => this.onSearch(term));
        this.$root.$on("edit-user", id => console.log("Edit " + id));
        this.$root.$on("delete-user", user => this.onDeleteUser(user));
        this.$root.$on("unverify-user", user => this.onUnverifyUser(user));
    }
};
</script>
