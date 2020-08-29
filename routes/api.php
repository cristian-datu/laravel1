<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\User;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;

use App\Http\Controllers\API\TermsOfServiceController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Users Routes
Route::namespace('API')->name('api.')->group(function () {
    // List and search
    Route::get('/users', 'UsersController@index')->name('users.index');

    // Show single user
    Route::get('/users/{user}', 'UsersController@show')->name('users.show');

    // Create
    Route::post('/users', 'UsersController@store')->name('users.store');

    // Accept latest Terms of Service
    Route::patch('/users/{user}/accept', 'UsersController@acceptTerms')->name('users.accept');

    // Email verification cancellation
    Route::patch('/users/{user}/unverify', 'UsersController@unverify')->name('users.unverify');

    // Update
    Route::patch('/users/{user}', 'UsersController@update')->name('users.update');

    // Delete
    Route::delete('/users/{user}', 'UsersController@destroy')->name('users.destroy');
});

// Terms of Service Routes
Route::namespace('API')->name('api.')->group(function () {

    // Show latest published terms
    Route::get('/terms-of-service/latest', 'TermsOfServiceController@latestPublished')->name('terms-of-service.latest');

    // Show all accepted terms
    Route::get('/terms-of-service/accepted', 'TermsOfServiceController@accepted')->name('terms-of-service.accepted');

    // Query for unaccepted terms
    Route::get('/terms-of-service/unaccepted', 'TermsOfServiceController@unaccepted')->name('terms-of-service.unaccepted');

    // List and search
    Route::get('/terms-of-service', 'TermsOfServiceController@index')->name('terms-of-service.index');

    // Show single
    Route::get('/terms-of-service/{termOfService}', 'TermsOfServiceController@show')->name('terms-of-service.show');

    // Create
    Route::post('/terms-of-service', 'TermsOfServiceController@store')->name('terms-of-service.store');

    // Update
    Route::patch('/terms-of-service/{termOfService}', 'TermsOfServiceController@update')->name('terms-of-service.update');

    // Delete
    Route::delete('/terms-of-service/{termOfService}', 'TermsOfServiceController@destroy')->name('terms-of-service.destroy');

    // Publish
    Route::patch('/terms-of-service/{termOfService}/publish', 'TermsOfServiceController@publish')->name('terms-of-service.publish');

    // Unpublish
    Route::patch('/terms-of-service/{termOfService}/unpublish', 'TermsOfServiceController@unpublish')->name('terms-of-service.unpublish');
});
