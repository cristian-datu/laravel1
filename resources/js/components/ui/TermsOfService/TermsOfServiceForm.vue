<template>
    <form action="#" v-on:submit.prevent="submitForm">
        <div class="form-row mb-4">
            <label for="title">Title</label>
            <input
                v-model="title"
                v-bind:class="{ 'is-invalid': !validation.title }"
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="Title"
            />
            <div class="invalid-feedback">
                Please provide a title.
            </div>
        </div>

        <div class="form-row mb-4">
            <vue-editor
                v-model="content"
                v-bind:class="{ 'is-invalid': !validation.content }"
            ></vue-editor>
            <div class="invalid-feedback">
                Please provide content.
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="form-check">
                    <input
                        v-model="publish_status"
                        true-value="yes"
                        false-value="no"
                        class="form-check-input"
                        type="checkbox"
                        id="chkPublish"
                        name="publish_status"
                    />
                    <label class="form-check-label" for="chkPublish">
                        Check to Publish
                    </label>
                </div>
            </div>
            <div class="col-6 text-right">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
    </form>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    name: "TermsOfServiceForm",

    components: {
        VueEditor
    },

    data() {
        return {
            id: 0,
            title: this.title,
            content: "",
            publish_status: "no",
            published_at: null,
            created_at: null,
            updated_at: null,
            validation: {
                title: false,
                content: false
            }
        };
    },

    props: {
        data: {
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

    methods: {
        submitForm(event) {
            if (this.validation.title && this.validation.content) {
                const formData = new FormData();
                formData.append("title", this.title);
                formData.append("content", this.content);
                if (this.publish_status === "yes") {
                    formData.append("published_at", new Date().toISOString());
                }
                this.$emit("submit", formData);
            }
        }
    },

    watch: {
        title: function(val, old) {
            this.validation.title = this.title.length > 0;
        },
        content: function(val, old) {
            this.validation.content = this.content.length > 0;
        },
        published_at: function(val, old) {
            if (val) {
                this.$router.push({ name: "tos.index" });
            }
        },
        data: function(val, old) {
            if (val instanceof Object) {
                [
                    "id",
                    "title",
                    "content",
                    "published_at",
                    "created_at",
                    "updated_at"
                ].forEach(key => {
                    if (val.hasOwnProperty(key)) {
                        this[key] = val[key];
                    }
                });
                this.publish_status = this.published_at ? "yes" : "no";
            }
        }
    }
};
</script>

<style scoped>
.quillWrapper {
    margin-bottom: 50px;
    width: 100%;
}
</style>
