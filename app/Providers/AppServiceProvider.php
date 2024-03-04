<?php

namespace App\Providers;

use Inertia\Ssr\HttpGateway;
use App\Inertia\InertiaHttpGateway;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{

    public $bindings = [
        HttpGateway::class => InertiaHttpGateway::class,
    ];
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
    
}
