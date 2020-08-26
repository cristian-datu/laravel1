<template>
    <nav v-bind:aria-label="'Page ' + current_page + ' of ' + last_page">
        <ul class="pagination">
            <li class="page-item">
                <a
                    v-on:click.prevent="$emit('pagination-change', 1)"
                    v-bind:class="{ disabled: current_page === 1 }"
                    class="page-link"
                    href="#"
                    title="First Page"
                >
                    <span aria-hidden="true">&lArr;</span>
                    <span class="sr-only">First Page</span>
                </a>
            </li>
            <li class="page-item">
                <a
                    v-on:click.prevent="
                        $emit('pagination-change', current_page - 1)
                    "
                    v-bind:class="{ disabled: current_page === 1 }"
                    class="page-link"
                    href="#"
                    title="Previous Page"
                >
                    <span aria-hidden="true">&larr;</span>
                    <span class="sr-only">Previous Page</span>
                </a>
            </li>
            <li class="page-item" v-for="page in last_page" :key="page">
                <a
                    v-on:click.prevent="$emit('pagination-change', page)"
                    v-bind:title="'Page ' + page + ' of ' + last_page"
                    v-bind:class="{ active: page === current_page }"
                    class="page-link"
                    href="#"
                    >{{ page }}</a
                >
            </li>

            <li class="page-item">
                <a
                    v-on:click.prevent="
                        $emit('pagination-change', current_page + 1)
                    "
                    v-bind:class="{ disabled: current_page === last_page }"
                    class="page-link"
                    href="#"
                    title="Next"
                >
                    <span aria-hidden="true">&rarr;</span>
                    <span class="sr-only">Next Page</span>
                </a>
            </li>

            <li class="page-item">
                <a
                    v-on:click.prevent="$emit('pagination-change', last_page)"
                    v-bind:class="{ disabled: current_page === last_page }"
                    class="page-link"
                    href="#"
                    title="Last"
                >
                    <span aria-hidden="true">&rArr;</span>
                    <span class="sr-only">Last Page</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        per_page: { type: Number, required: true },
        current_page: { type: Number, required: true },
        last_page: { type: Number, required: true },
        from: { type: Number, required: true },
        to: { type: Number, required: true },
        total: { type: Number, required: true }
        //"pagination-change": { type: Function, required: true }
    }
};
</script>

<style scoped>
.disabled {
    color: #aaaaaa;
}
.active {
    color: #000000;
    font-weight: 700;
}
</style>
