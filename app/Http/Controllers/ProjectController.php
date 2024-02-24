<?php

namespace App\Http\Controllers;

use Log;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Category;

use App\Models\Technology;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()


    {


        $projects = Project::with('categories')->get();
        // $projects = Project::all();



        return Inertia('Admin/Projects/Index', ['projects' => $projects]);
        // return Inertia('Admin/Projects/Index', ['projects' => $projects]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $categories = Category::all();
        $technologies = Technology::all();


       

        return Inertia('Admin/Projects/Create', ['categories' => $categories, 'technologies' => $technologies]);
        // return Inertia('Admin/Projects/Create',['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3',
            'post_text' => 'required|min:3',
            'youtube_link' => 'required|min:3',
            'site_link' => 'required|min:3',
            'image' => 'image',
            'category_id' => 'required|array',
            'technology_id' => 'required|array',
          
        ]);

       
    
        $project = new Project;
        $project->title = $request->title;
        $project->description = $request->post_text;
        $project->site_link = $request->site_link;
        $project->youtube_link = $request->youtube_link;
        
        // if ($request->hasFile('image')) {
        //     $file = $request->file('image');
        //     $filename = time() . '.' . $file->getClientOriginalExtension();
        //     $path = $file->storeAs('public/images', $filename);
        //     $project->image = $path;
        // }
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('images', $filename, 'public');
            $project->image = '/storage/' . $path;
        }
        

       

        $project->save();

       
        
    
        // Przypisz kategorie do projektu
        $project->categories()->sync($request->category_id);
        $project->technologies()->sync($request->technology_id);
      

       
    
        return Inertia('Admin/Projects/Index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::with(['categories', 'technologies'])->findOrFail($id);

        

        $categories = Category::all();
        $technologies = Technology::all();

        return Inertia('Admin/Projects/Edit', ['project'=>$project,'categories' => $categories, 'technologies' => $technologies]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $request->validate([
            'title' => 'required|min:3',
            'post_text' => 'required|min:3',
            'youtube_link' => 'required|min:3',
            'site_link' => 'required|min:3',
            'image' => 'image',
            'category_id' => 'required|array',
            'technology_id' => 'required|array',
        ]);

        // $project = Project::with(['categories', 'technologies'])->findOrFail($id);
    
        // $project->title = $request->title;
        // $project->description = $request->post_text;
        // $project->site_link = $request->site_link;
        // $project->youtube_link = $request->youtube_link;
        
    
        // if ($request->hasFile('image')) {
        //     $file = $request->file('image');
        //     $filename = time() . '.' . $file->getClientOriginalExtension();
        //     $path = $file->storeAs('images', $filename, 'public');
        //     $project->image = '/storage/' . $path;
        // }
    
        // $project->save();

    
        // // Przypisz kategorie do projektu
        // $project->categories()->sync($request->category_id);
        // $project->technologies()->sync($request->technology_id);
    
        // return Inertia('Admin/Projects/Index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
