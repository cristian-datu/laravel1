<template>
    <div class="container">
        <div class="row mb-4">
            <div class="col-6"><strong>Edit User</strong></div>
            <div class="col-6 text-right">
                <router-link
                    :to="{ name: 'users.index' }"
                    class="btn btn-primary btn-sm"
                >
                    User List
                </router-link>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">Update user data</div>
                    <div class="card-body">
                        <form action="#" v-on:submit.prevent="onSubmit">
                            <input type="hidden" name="_method" value="patch" />
                            <div class="form-group row">
                                <label
                                    for="name"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    Name*
                                </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="name"
                                        v-bind:class="{
                                            'is-invalid': !validation.name
                                        }"
                                        id="name"
                                        type="text"
                                        class="form-control"
                                        name="name"
                                        autocomplete="name"
                                        autofocus
                                    />

                                    <span class="invalid-feedback" role="alert">
                                        <strong>
                                            Name must have at least 3 characters
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label
                                    for="phone"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    Phone
                                </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="phone"
                                        v-bind:class="{
                                            'is-invalid': !validation.phone
                                        }"
                                        id="phone"
                                        type="text"
                                        class="form-control"
                                        name="phone"
                                        value=""
                                        autocomplete="phone"
                                    />

                                    <span class="invalid-feedback" role="alert">
                                        <strong>Field is required</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label
                                    for="email"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    E-Mail Address*
                                </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="email"
                                        v-bind:class="{
                                            'is-invalid': !validation.email
                                        }"
                                        ref="email"
                                        id="email"
                                        type="email"
                                        class="form-control"
                                        name="email"
                                        value=""
                                        autocomplete="email"
                                    />

                                    <span class="invalid-feedback" role="alert">
                                        <strong>
                                            Provide a valid e-mail address
                                        </strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label
                                    for="password"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    Password*
                                </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="password"
                                        v-bind:class="{
                                            'is-invalid': !validation.password
                                        }"
                                        id="password"
                                        type="password"
                                        class="form-control"
                                        name="password"
                                        autocomplete="new-password"
                                    />

                                    <span class="invalid-feedback" role="alert">
                                        <strong>Invalid password</strong>
                                    </span>
                                </div>
                                <div class="col-12">
                                    <div>
                                        Password must be
                                        <span
                                            v-bind:class="{
                                                'text-danger': !validation.passwordLength,
                                                'text-secondary':
                                                    validation.passwordLength
                                            }"
                                        >
                                            8 characters long
                                        </span>
                                        and have at least
                                        <span
                                            v-bind:class="{
                                                'text-danger': !validation.passwordUppercase,
                                                'text-secondary':
                                                    validation.passwordUppercase
                                            }"
                                            >1 uppercase letter </span
                                        >,
                                        <span
                                            v-bind:class="{
                                                'text-danger': !validation.passwordLowercase,
                                                'text-secondary':
                                                    validation.passwordLowercase
                                            }"
                                            >1 lowercase letter</span
                                        >,
                                        <span
                                            v-bind:class="{
                                                'text-danger': !validation.passwordNumeric,
                                                'text-secondary':
                                                    validation.passwordNumeric
                                            }"
                                            >1 number</span
                                        >,
                                        <span
                                            v-bind:class="{
                                                'text-danger': !validation.passwordSymbol,
                                                'text-secondary':
                                                    validation.passwordSymbol
                                            }"
                                            >1 symbol</span
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label
                                    for="password-confirm"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    Confirm Password *
                                </label>

                                <div class="col-md-6">
                                    <input
                                        v-model="passwordConfirm"
                                        v-bind:class="{
                                            'is-invalid': !validation.passwordConfirm
                                        }"
                                        id="password-confirm"
                                        type="password"
                                        class="form-control"
                                        name="password_confirmation"
                                        autocomplete="new-password"
                                    />
                                    <span class="invalid-feedback" role="alert">
                                        <strong>Passwords do not match</strong>
                                    </span>
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-12 text-center">
                                    <div class="form-check">
                                        <input
                                            v-model="terms"
                                            true-value="yes"
                                            false-value="no"
                                            v-bind:class="{
                                                'is-invalid': !validation.terms
                                            }"
                                            type="checkbox"
                                            class="form-check-input"
                                            id="accept-terms"
                                            name="accept_terms"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="accept-terms"
                                            >* I accept the</label
                                        >
                                        <a
                                            href="/terms-of-service"
                                            title="Terms of Service"
                                            target="_blank"
                                            >Terms of Service</a
                                        >

                                        <span
                                            class="invalid-feedback"
                                            role="alert"
                                        >
                                            <strong
                                                >Terms of Service must be
                                                accepted</strong
                                            >
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 text-right">
                                    <small
                                        >Fields marked with * are
                                        required</small
                                    >
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UserEdit",
    data() {
        return {
            id: 0,
            name: "",
            phone: "",
            email: "",
            password: "",
            passwordConfirm: "",
            terms: "",
            validation: {
                name: true,
                phone: true,
                email: true,
                password: true,
                passwordLength: true,
                passwordUppercase: true,
                passwordLowercase: true,
                passwordNumeric: true,
                passwordSymbol: true,
                passwordConfirm: true,
                terms: true
            }
        };
    },
    methods: {
        fetchUser(id) {
            axios
                .get(`/api/users/${id}`)
                .then(response => {
                    const { error, data } = response.data;
                    if (error) {
                        alert("Error loading user information");
                        return;
                    }
                    this.id = Number(data.id);
                    this.name = data.name;
                    this.email = data.email;
                    this.phone = data.phone;
                    this.terms = data.terms_accepted_at ? "yes" : "no";
                })
                .catch(error => console.log(error));
        },
        onSubmit(event) {
            if (
                this.isValidName() &&
                this.isValidPhone() &&
                this.isValidEmail() &&
                this.isValidPassword() &&
                this.isValidPasswordConfirm() &&
                this.isAccepted()
            ) {
                axios
                    .post(`/api/users/${this.id}`, new FormData(event.target))
                    .then(response => {
                        const { data, error } = response.data;
                        if (error) {
                            alert("Error saving user");
                        } else {
                            alert(`User ${data.email} updated`);
                            this.$router.push({ name: "users.index" });
                        }
                    })
                    .catch(error => {
                        const rs = error?.response?.data;
                        if (rs?.errors?.email) {
                            alert(rs.errors.email[0]);
                        } else {
                            alert("Error saving user");
                        }
                    });
            }
        },
        isValidName() {
            this.validation.name = this.name.length > 3;
            return this.validation.name;
        },
        isValidPhone() {
            this.validation.phone = this.phone.length > 0;
            return this.validation.phone;
        },
        isValidEmail() {
            this.validation.email = this.$refs.email.checkValidity();
            return this.validation.email;
        },
        isValidPassword() {
            const password = String(this.password);

            this.validation.password = false;
            this.validation.passwordLength = password.length > 7;
            this.validation.passwordUppercase = /[A-Z]/.test(password);
            this.validation.passwordLowercase = /[a-z]/.test(password);
            this.validation.passwordNumeric = /\d/.test(password);
            this.validation.passwordSymbol = /\W+/.test(password);

            this.validation.password =
                this.validation.passwordLength &&
                this.validation.passwordUppercase &&
                this.validation.passwordLowercase &&
                this.validation.passwordNumeric &&
                this.validation.passwordSymbol;

            if (this.validation.password && this.passwordConfirm.length > 0) {
                this.isValidPasswordConfirm();
            }

            return this.validation.password;
        },
        isValidPasswordConfirm() {
            this.validation.passwordConfirm =
                this.validation.password &&
                this.password === this.passwordConfirm;
            return this.validation.passwordConfirm;
        },
        isAccepted() {
            this.validation.terms = this.terms === "yes";
            return this.validation.terms;
        }
    },
    watch: {
        name: function(value, old) {
            this.name = String(value).trim();
            this.isValidName();
        },
        phone: function(value, old) {
            this.phone = String(value).trim();
            this.isValidPhone();
        },
        email: function(value, old) {
            this.email = String(value).trim();
            this.isValidEmail();
        },
        password: function(value, old) {
            this.password = String(value).trim();
            this.isValidPassword();
        },
        passwordConfirm: function(value, old) {
            this.passwordConfirm = String(value).trim();
            this.isValidPasswordConfirm();
        },
        terms: function(value, old) {
            this.terms = value;
            this.isAccepted();
        }
    },
    mounted: function() {
        this.fetchUser(this.$route.params.id);
    }
};
</script>
