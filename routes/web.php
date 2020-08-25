<?php

use Illuminate\Support\Facades\Route;
use App\TermOfService;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/terms-of-service', function () {
    $article = TermOfService::latest('published_at')->first();
    $htmlContent = '<h1>No published content available</h1>';

    if ($article && $article->content) {
        $htmlContent = $article->content;
    }

    return view('latest-terms-of-service', compact('htmlContent'));
})->name('latest-terms-of-service');

Route::get('/', function () {
    return redirect()->route('home');
});

Auth::routes(['verify' => true]);

Route::get('/home', 'HomeController@index')->name('home');
