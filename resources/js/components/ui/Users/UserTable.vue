<template>
    <div class="table-responsive">
        <table class="table table-sm table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>

            <transition-group tag="tbody" name="fade">
                <UserTableRow
                    v-for="user in users"
                    :key="user.id"
                    v-bind:user="user"
                />
            </transition-group>
        </table>
    </div>
</template>

<script>
import UserTableRow from "./UserTableRow";

export default {
    name: "UserTable",
    props: {
        users: Array,
        required: true
    },
    components: {
        UserTableRow
    }
};
</script>
