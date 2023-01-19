<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'index']);
Route::get('/shop', [HomeController::class, 'shop']);
Route::prefix('/admin')->group(function () {
    Route::get('', [AdminController::class, 'admin']);
    Route::get('/categories', [AdminController::class, 'adminCategories']);
    Route::get('/categories/create', [AdminController::class, 'create']);
    Route::post('/categories', [AdminController::class, 'store'])->name('admin.categories');
    Route::get('categories/{id}/edit', [AdminController::class, 'edit']);
    Route::put('categories/{id}', [AdminController::class, 'update']);
    Route::get('categories/{id}', [AdminController::class, 'show']);
    Route::delete('categories/{id}', [AdminController::class, 'destroy']);

    //Route::resource('/products', ProductsController::class);

    Route::get('', [AdminController::class, 'admin']);
    Route::get('/products', [ProductsController::class, 'adminProducts']);
    Route::get('/products/create', [ProductsController::class, 'create']);
    Route::post('/products', [ProductsController::class, 'store'])->name('admin.products');
    Route::get('products/{id}/edit', [ProductsController::class, 'edit']);
    Route::put('products/{id}', [ProductsController::class, 'update']);
    Route::get('products/{id}', [ProductsController::class, 'show']);
    Route::delete('products/{id}', [ProductsController::class, 'destroy']);
});
