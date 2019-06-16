<?php

use Illuminate\Http\Request;

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

Route::post('registroUsuario', 'API\RegisterController@registroUsuario')->name('registroUsuario');
Route::post('registroCliente', 'API\RegisterController@registroCliente')->name('registroCliente');
Route::post('loginUsuario', 'API\AuthController@login')->name('login');
Route::get('error', 'API\ErrorController@authenticationError')->name('error');
Route::middleware('auth:api')->group(function () {
    Route::get('logout', 'API\AuthController@logout')->name('logout');
    Route::get('dadosUsuario/{id}', 'API\UserController@show')->name('exibeDadosUsuario');
    Route::get('dadosCliente/{id}', 'API\ClientesController@show')->name('exibeDadosCliente');
	Route::resource('produtos', 'API\ProductController');
	Route::resource('clientes', 'API\ClientesController');
    Route::post('atualizaUsuario/{usuario}', 'API\UserController@update');
    Route::post('atualizaCliente/{cliente}', 'API\ClientesController@update');
    Route::delete('deletaCliente/{cliente}', 'API\ClientesController@destroy');
    Route::post('upload-imagem','API\ImageUploadController@imageUploadPost');
    Route::get('consultaClientesDoUsuario/{id}', 'API\UserController@showClientsOfUser');
});
