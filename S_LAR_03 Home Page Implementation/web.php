<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\CartController;
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

Route::get('/', [MainController::class,'index']);
Route::get('/shop', [MainController::class,'shop']);
Route::get('/add-product', [MainController::class,'add_product']);
Route::get('/add-heart', [MainController::class,'add_heart']);
Route::get('/cart', [CartController::class,'cart']);
Route::get('/incQuantity', [CartController::class,'incQuantity']);
Route::get('/decQuantity', [CartController::class,'decQuantity']);
Route::get('/deleteProduct', [CartController::class,'deleteProduct']);
Route::get('/checkout', [CartController::class,'checkout']);


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::middleware(['auth','can:is_admin'])->prefix('/admin')->group(function(){
    Route::get('',[AdminController::class,'admin']);
    Route::resource('/categories',AdminController::class);
    Route::resource('/products',ProductsController::class);
});
