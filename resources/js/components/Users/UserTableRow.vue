<template>
    <tr>
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>
            <button
                v-on:click.prevent="$root.$emit('edit-user', user)"
                class="btn btn-sm btn-primary"
            >
                Edit
            </button>
            <button
                v-on:click.prevent="$root.$emit('delete-user', user)"
                class="btn btn-sm btn-danger"
            >
                Delete
            </button>
            <button
                v-if="user.email_verified_at"
                v-on:click.prevent="$root.$emit('unverify-user', user)"
                class="btn btn-sm btn-warning"
            >
                Unverify
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "UserTableRow",
    props: {
        user: {
            id: Number,
            email: String,
            phone: String,
            email_verified_at: String
        }
    }
};
</script>

<style scoped>
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-leave-to {
    opacity: 0;
}
</style>
