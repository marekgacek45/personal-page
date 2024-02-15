<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
         'recaptcha_site_key' => config('services.google_recaptcha.site_key'),
        ]);
    }

    public function contact(ContactFormRequest $request){

        dd($request->all());
    }
}
