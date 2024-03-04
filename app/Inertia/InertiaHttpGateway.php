<?php

namespace App\Inertia;

use Illuminate\Support\Str;
use Inertia\Ssr\HttpGateway;
use Inertia\Ssr\Response;

class InertiaHttpGateway extends HttpGateway
{
    public function dispatch(array $page): ?Response
    {
        if (isset($page['url']) && Str::is('/admin*', $page['url'])) {
            return null;
        }
        return parent::dispatch($page);
    }
}
