<template>
    <tr>
        <th scope="row">{{ user.id }}</th>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
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
            terms_accepted_at: String
        }
    }
};
</script>
