<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use Illuminate\Http\Request;

class FormController extends Controller
{
    

    public function contact(ContactFormRequest $request){

        dd($request->all());
    }
}
