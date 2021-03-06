/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

const { default: VueRouter } = require("vue-router");

require("./bootstrap");

window.Vue = require("vue");
window.VueRouter = require("vue-router");

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component("App", require("./components/layout/App.vue").default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(VueRouter);

const app = new Vue({
    router: new VueRouter({
        mode: "hash",
        routes: [
            {
                path: "/users",
                component: () => import("./components/views/Users/Users"),
                children: [
                    {
                        path: "/",
                        name: "users.index",
                        component: () =>
                            import("./components/views/Users/UserList")
                    },
                    {
                        path: "create",
                        name: "users.create",
                        component: () =>
                            import("./components/views/Users/UserCreate")
                    },
                    {
                        path: ":id/edit",
                        name: "users.edit",
                        component: () =>
                            import("./components/views/Users/UserEdit")
                    }
                ]
            },
            {
                path: "/terms-of-service",
                component: () =>
                    import("./components/views/TermsOfService/TermsOfService"),
                children: [
                    {
                        path: "/",
                        name: "tos.index",
                        component: () =>
                            import(
                                "./components/views/TermsOfService/TermsOfServiceList"
                            )
                    },
                    {
                        path: "create",
                        name: "tos.create",
                        component: () =>
                            import(
                                "./components/views/TermsOfService/TermsOfServiceCreate"
                            )
                    },
                    {
                        path: ":id/edit",
                        name: "tos.edit",
                        component: () =>
                            import(
                                "./components/views/TermsOfService/TermsOfServiceEdit"
                            )
                    },
                    {
                        path: "/:id",
                        name: "tos.show",
                        component: () =>
                            import(
                                "./components/views/TermsOfService/TermsOfServiceDetails"
                            )
                    }
                ]
            },

            {
                path: "/",
                name: "latest-terms",
                component: () =>
                    import(
                        "./components/views/TermsOfService/TermsOfServiceLatest"
                    )
            },

            {
                path: "/",
                name: "accepted-terms",
                component: () =>
                    import(
                        "./components/views/TermsOfService/TermsOfServiceAccepted"
                    )
            }
        ]
    }),
    el: "#app"
});
