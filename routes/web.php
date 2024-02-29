<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FormController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CkeditorController;
use App\Http\Controllers\TechnologyController;

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


//PAGES
Route::get('/',[PageController::class,'home'])->name('home');
Route::get('/o_mnie',[PageController::class,'about'])->name('about');
Route::get('/uslugi',[PageController::class,'services'])->name('services');
Route::get('/portfolio',[PageController::class,'portfolio'])->name('portfolio');
Route::get('/kontakt',[PageController::class,'contact'])->name('contact');
Route::get('/blog',[PageController::class,'blog'])->name('blog');
Route::post('/kontakt',[FormController::class,'contact'])->name('contact.form');




Route::middleware(['admin'])->group(function () {
    Route::get('/admin',[PageController::class,'admin'])->name('admin');

    //CATEGORY
    Route::prefix('admin/kategorie')->name('admin.category.')->group(function () {
        Route::get('/', [CategoryController::class,'index'])->name('index');
        Route::get('/dodaj', [CategoryController::class,'create'])->name('create');
        Route::post('/dodaj', [CategoryController::class,'store'])->name('store');
        Route::get('/edytuj/{category}', [CategoryController::class,'edit'])->name('edit');
        Route::put('/edytuj/{category}', [CategoryController::class,'update'])->name('update');
        Route::delete('/usun/{category}', [CategoryController::class,'destroy'])->name('delete');
    });

    //COMMENTS
    Route::prefix('admin/komentarze')->name('admin.comment.')->group(function () {
        Route::get('/', [CommentController::class,'index'])->name('index');
        Route::get('/dodaj', [CommentController::class,'create'])->name('create');
        Route::post('/dodaj', [CommentController::class,'store'])->name('store');
        Route::get('/edytuj/{comment}', [CommentController::class,'edit'])->name('edit');
        Route::put('/edytuj/{comment}', [CommentController::class,'update'])->name('update');
        Route::delete('/usun/{comment}', [CommentController::class,'destroy'])->name('delete');
    });

    //TECHNOLOGY
    Route::prefix('admin/technologie')->name('admin.technology.')->group(function () {
        Route::get('/', [TechnologyController::class,'index'])->name('index');
        Route::get('/dodaj', [TechnologyController::class,'create'])->name('create');
        Route::post('/dodaj', [TechnologyController::class,'store'])->name('store');
        Route::get('/edytuj/{technology}', [TechnologyController::class,'edit'])->name('edit');
        Route::put('/edytuj/{technology}', [TechnologyController::class,'update'])->name('update');
        Route::delete('/usun/{technology}', [TechnologyController::class,'destroy'])->name('delete');
    });

    //PROJECTS
    Route::prefix('admin/projekty')->name('admin.project.')->group(function () {
        Route::get('/', [ProjectController::class,'index'])->name('index');
        Route::get('/dodaj', [ProjectController::class,'create'])->name('create');
        Route::post('/dodaj', [ProjectController::class,'store'])->name('store');
        Route::get('/edytuj/{project}', [ProjectController::class,'edit'])->name('edit');
        Route::put('/edytuj/{project}', [ProjectController::class,'update'])->name('update');
        Route::delete('/usun/{project}', [ProjectController::class,'destroy'])->name('delete');
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
});





