<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CategoryController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;

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

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';



//OWN ROUTES
Route::get('/',[PageController::class,'home'])->name('home');
Route::get('/o_mnie',[PageController::class,'about'])->name('about');
Route::get('/uslugi',[PageController::class,'services'])->name('services');
Route::get('/portfolio',[PageController::class,'portfolio'])->name('portfolio');
Route::get('/kontakt',[PageController::class,'contact'])->name('contact');
Route::post('/kontakt',[FormController::class,'contact'])->name('contact.form');

//ADMIN
Route::get('/admin',[AdminController::class,'dashboard'])->name('admin');



//PROJECTS
Route::get('/admin/projekty',[ProjectController::class,'index'])->name('admin.projects.index');
Route::get('/admin/projekty/dodaj',[ProjectController::class,'create'])->name('admin.projects.create');
Route::post('/admin/projekty/dodaj',[ProjectController::class,'store'])->name('admin.projects.store');
Route::get('/admin/projekty/edytuj/{id}',[ProjectController::class,'edit'])->name('admin.projects.edit');
Route::put('/admin/projekty/edytuj/{id}',[ProjectController::class,'update'])->name('admin.projects.update');

//CATEGORY
Route::prefix('admin/kategorie')->name('admin.category.')->group(function () {
    Route::get('/', [CategoryController::class,'index'])->name('index');
    Route::get('/dodaj', [CategoryController::class,'create'])->name('create');
    Route::post('/dodaj', [CategoryController::class,'store'])->name('store');
    Route::get('/edytuj/{category}', [CategoryController::class,'edit'])->name('edit');
    Route::put('/edytuj/{category}', [CategoryController::class,'update'])->name('update');
    Route::delete('/usun/{category}', [CategoryController::class,'destroy'])->name('delete');
});


//POST
Route::prefix('admin/posty')->name('admin.post.')->group(function () {
    Route::get('/', [PostController::class,'index'])->name('index');
    Route::get('/dodaj', [PostController::class,'create'])->name('create');
    Route::post('/dodaj', [PostController::class,'store'])->name('store');
    Route::get('/edytuj/{post}', [PostController::class,'edit'])->name('edit');
    Route::put('/edytuj/{post}', [PostController::class,'update'])->name('update');
    Route::delete('/usun/{post}', [PostController::class,'destroy'])->name('delete');
});