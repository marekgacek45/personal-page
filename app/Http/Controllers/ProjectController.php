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

        return Inertia('Admin/Projects/Index', ['projects' => $projects]);
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
            'description' => 'required|min:3',
            'youtube_link' => 'required|min:3',
            'site_link' => 'required|min:3',
            'image' => 'image',
            'category_id' => 'array',
            'technology_id' => 'required|array',

        ]);



        $project = new Project;
        $project->title = $request->title;
        $project->description = $request->description;
        $project->site_link = $request->site_link;
        $project->youtube_link = $request->youtube_link;


        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('images/projects', $filename, 'public');
            $project->image = '/storage/' . $path;
        }




        $project->save();




        // Przypisz kategorie do projektu
        $project->categories()->sync($request->category_id);
        $project->technologies()->sync($request->technology_id);




        return Inertia('Admin/Projects/Index');
    }


    public function edit(Project $project)
    {
        // $project = Project::with(['categories', 'technologies'])->findOrFail($id);



        // $categories = Category::all();
        // $technologies = Technology::all();

        return Inertia('Admin/Projects/Edit', ['project' => $project]);
        // return Inertia('Admin/Projects/Edit', ['project'=>$project,'categories' => $categories, 'technologies' => $technologies]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        // dd($request->file('image'));
        // dd($request->all());

        // $request->validate([
        //     'title' => 'required|min:3',
        //     'description' => 'required|min:3',
        //     'youtube_link' => 'required|min:3',
        //     'site_link' => 'required|min:3',
        //     'image' => 'image',
        //     'category_id' => '',
        //     'technology_id' => '',
        // ]);


        // dd($request->all());

        $project->title = $request->title;
        $project->description = $request->description;
        $project->site_link = $request->site_link;
        $project->youtube_link = $request->youtube_link;






        // if ($request->hasFile('image')) {
        //     $file = $request->file('image');
        //     $filename = time() . '.' . $file->getClientOriginalExtension();
        //     $path = $file->storeAs('images/projects', $filename, 'public');
        //     $project->image = '/storage/' . $path;
        // }


        $project->save();

        $project->categories()->sync($request->category_id);
        $project->technologies()->sync($request->technology_id);

        return Inertia('Admin/Projects/Index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        $project->delete();
    }
}
