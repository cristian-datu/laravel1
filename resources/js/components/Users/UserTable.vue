<template>
    <table class="table table-hover">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
            </tr>
        </thead>
        <tbody v-for="user in users" :key="user.id">
            <UserTableRow v-bind:user="user" />
        </tbody>
    </table>
</template>

<script>
import UserTableRow from "./UserTableRow";

export default {
    name: "UserTable",
    props: {
        users: Array
    },
    components: {
        UserTableRow
    }
};
</script>
