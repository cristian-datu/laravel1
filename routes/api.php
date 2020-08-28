<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\User;
use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;

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

Route::namespace('API')->name('api.')->group(function () {
    // List and search
    Route::get('/users', 'UsersController@index')->name('users.index');

    // Show single user
    Route::get('/users/{user}', 'UsersController@show')->name('users.show');

    // Create
    Route::post('/users', 'UsersController@store')->name('users.store');

    // Email verification cancellation
    Route::patch('/users/{user}/unverify', 'UsersController@unverify')->name('users.unverify');

    // Update
    Route::patch('/users/{user}', 'UsersController@update')->name('users.update');

    // Delete
    Route::delete('/users/{user}', 'UsersController@destroy')->name('users.destroy');
});
