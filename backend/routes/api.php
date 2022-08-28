<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::resource('user', 'App\Http\Controllers\UserController');
Route::resource('form', 'App\Http\Controllers\FormController');
Route::resource('submit', 'App\Http\Controllers\VoteController');
Route::post('sendmail', 'App\Http\Controllers\sendmailController@send');



