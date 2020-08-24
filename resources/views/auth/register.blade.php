@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{ __('Register') }}</div>

                <div class="card-body">
                    <form method="POST" action="{{ route('register') }}" id="registration-form">
                        @csrf

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-right">{{ __('Name') }}*</label>

                            <div class="col-md-6">
                                <input id="name" type="text" class="form-control @error('name') is-invalid @enderror"
                                    name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                                @error('name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="phone" class="col-md-4 col-form-label text-md-right">{{ __('Phone') }}</label>

                            <div class="col-md-6">
                                <input id="phonr" type="text" class="form-control @error('phone') is-invalid @enderror"
                                    name="phone" value="{{ old('phone') }}" autocomplete="phone">

                                @error('phone')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email"
                                class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}*</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                                    name="email" value="{{ old('email') }}" required autocomplete="email">

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password"
                                class="col-md-4 col-form-label text-md-right">{{ __('Password') }}*</label>

                            <div class="col-md-6">
                                <input id="password" type="password"
                                    class="form-control @error('password') is-invalid @enderror" name="password"
                                    required autocomplete="new-password">

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="col-12">
                                <div>
                                    Password must be
                                    <span id="has-8-chars" class="text-danger">8 characters long</span>
                                    and have at least
                                    <span id="has-uppercase" class="text-danger">1 uppercase letter</span>,
                                    <span id="has-lowercase" class="text-danger">1 lowercase letter</span>,
                                    <span id="has-numeric" class="text-danger">1 number</span>,
                                    <span id="has-symbol" class="text-danger">1 symbol</span>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password-confirm"
                                class="col-md-4 col-form-label text-md-right">{{ __('Confirm Password') }}*</label>

                            <div class="col-md-6">
                                <input id="password-confirm" type="password" class="form-control"
                                    name="password_confirmation" required autocomplete="new-password">
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-12 text-center">
                                <div class="form-check">
                                    <input type="checkbox" required
                                        class="form-check-input @error('accept_terms') is-invalid @enderror"
                                        id="accept-terms" name="accept_terms">
                                    <label class="form-check-label" for="accept-terms">* I accept the</label>
                                    <a href="#" title="Terms and Conditions" target="_blank">Terms and Conditions</a>
                                    @error('accept_terms')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    {{ __('Register') }}
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-right">
                                <small>Fields marked with * are required</small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script>
    (function() {
        window.addEventListener('load', function () {
            (function ($) {
                "use strict";

                if (!$) {
                    throw new Error("jQuery not loaded");
                }

                const form = $("#registration-form");
                const input = $("#password");
                const input2 = $("#password-confirm");
                const has8chars = $("#has-8-chars");
                const hasUppercase = $("#has-uppercase");
                const hasLowercase = $("#has-lowercase");
                const hasNumeric = $("#has-numeric");
                const hasSymbol = $("#has-symbol");

                $(input).on('keyup', function (e) {
                    const valid = "text-success";
                    const invalid = "text-danger";
                    const value = e.target.value;
                    const validate = function (el, pattern) {
                        el.attr("class", (pattern.test(value) ? valid : invalid));
                    }

                    has8chars.attr("class", (value.length > 7 ? valid : invalid));
                    validate(hasUppercase, /[A-Z]/);
                    validate(hasLowercase, /[a-z]/);
                    validate(hasNumeric, /\d/);
                    validate(hasSymbol, /\W+/);
                });

                $(form).on("submit", function (e) {
                    if (!(/^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(input.val()))) {
                        e.preventDefault();
                        alert("Invalid password format");
                        input.focus();
                    } else if (input.val() !== input2.val()) {
                        e.preventDefault();
                        alert("Password confirmation does not match");
                        input2.focus();
                    }
                });

            })(window.jQuery);
        });
    })();

</script>
@endsection
