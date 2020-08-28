<template>
    <div class="table-responsive">
        <table class="table table-sm table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Published At</th>
                    <th scope="col">&nbsp;</th>
                </tr>
            </thead>

            <transition-group tag="tbody" name="fade">
                <TermsOfServiceTableRow
                    v-for="item in data"
                    :key="item.id"
                    v-bind:item="item"
                />
            </transition-group>
        </table>
    </div>
</template>

<script>
import TermsOfServiceTableRow from "./TermsOfServiceTableRow";

export default {
    name: "TermsOfServiceTable",
    props: {
        data: Array,
        required: true
    },
    components: {
        TermsOfServiceTableRow
    }
};
</script>
