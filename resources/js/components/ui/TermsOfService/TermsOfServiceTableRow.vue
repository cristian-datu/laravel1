<template>
    <tr>
        <th scope="row">{{ item.id }}</th>
        <td>{{ titleLength }}</td>
        <td>{{ publishedAt }}</td>
        <td>
            <router-link
                v-if="item.content"
                :to="{ name: 'tos.show', params: { id: item.id } }"
                class="btn btn-sm btn-primary"
            >
                View
            </router-link>
            <button
                v-if="item.published_at"
                v-on:click.prevent="$root.$emit('unpublish-tos', item)"
                class="btn btn-sm btn-warning"
            >
                Unpublish
            </button>
            <button
                v-else
                v-on:click.prevent="$root.$emit('publish-tos', item)"
                class="btn btn-sm btn-warning"
            >
                Publish
            </button>
            <router-link
                v-if="!item.published_at"
                :to="{ name: 'tos.edit', params: { id: item.id } }"
                class="btn btn-sm btn-primary"
            >
                Edit
            </router-link>
            <button
                v-if="!item.published_at"
                v-on:click.prevent="$root.$emit('delete-tos', item)"
                class="btn btn-sm btn-danger"
            >
                Delete
            </button>
        </td>
    </tr>
</template>

<script>
export default {
    name: "TermsOfServiceableRow",
    props: {
        item: {
            type: Object,
            required: false,
            default: {
                id: 0,
                title: "",
                content: "",
                published_at: null,
                created_at: null,
                updated_at: null
            },
            validator: value => {
                if (value === null) {
                    return true;
                }
                return [
                    "id",
                    "title",
                    "content",
                    "published_at",
                    "created_at",
                    "updated_at"
                ].every(propKey => value.hasOwnProperty(propKey));
            }
        }
    },
    computed: {
        titleLength: function() {
            const { title } = this.item;
            const maxLength = 50;

            if (title.length > maxLength) {
                const pieces = title.substr(0, maxLength).split(" ");
                pieces.pop();
                return pieces.join(" ") + " ...";
            } else {
                return title;
            }
        },

        publishedAt: function() {
            const { published_at } = this.item;
            if (published_at instanceof Date) {
                return published_at.toLocaleString("en-US");
            } else {
                return "Not published";
            }
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
