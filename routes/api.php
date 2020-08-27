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

    // Create
    Route::post('/users', 'UsersController@store')->name('users.store');

    // Update
    Route::patch('/users/{user}', 'UsersController@update')->name('users.update');

    // Delete
    Route::delete('/users/{user}', 'UsersController@destroy')->name('users.destroy');
});
