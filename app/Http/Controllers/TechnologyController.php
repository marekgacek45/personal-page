<?php

namespace App\Http\Controllers;

use App\Models\Technology;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TechnologyController extends Controller
{
    public function index()
    {
        $technologies = Technology::all();

        return Inertia('Admin/Technologies/Index', ['technologies' => $technologies]);
    }

   
    public function create()
    {
        return Inertia('Admin/Technologies/Create');
    }

  
    public function store(Request $request)
    {


       


        $technology = new Technology;
        $technology->name = $request->name;
        
        
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('images/technologies', $filename, 'public');
            $technology->logo = '/storage/' . $path;
        }

        $technology->save();
        

        return Redirect::route('admin.technology.index');
  
   

   

    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Technology $technology)
    {
        return Inertia('Admin/Technologies/Edit', ['technology' => $technology]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Technology $technology)
    {

        $technology->name = $request->name;
        
    
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('images/technologies', $filename, 'public');
            $technology->logo = '/storage/' . $path;
        }
    
        $technology->save();

       
       

        return Redirect::route('admin.technology.index');
    }

 
    public function destroy(Technology $technology)
    {
        $technology->delete();
    }

}
