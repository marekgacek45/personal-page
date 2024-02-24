<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use Inertia\Inertia;
use App\Models\Category;

use Illuminate\Support\Facades\Redirect;

class CategoryController extends Controller
{
 
    public function index()
    {
        $categories = Category::all();

        return Inertia('Admin/Categories/Index', ['categories' => $categories]);

       
    }

    
    public function create()
    {
        return Inertia('Admin/Categories/Create');
        
    }

    
    public function store(CategoryRequest $request)
    {
     

        $data = $request->validated();

        $category = Category::create($data);
       

        return Redirect::route('admin.category.index');
    }

    
    public function edit(Category $category)
    {
      
        return Inertia('Admin/Categories/Edit', ['category' => $category]);
    }

   
  
    public function update(CategoryRequest $request, Category $category)
    {

        $data = $request->validated();

        $category->update($data);
       

        return Redirect::route('admin.category.index');
    }

    
    public function destroy(Category $category)
    {
        
$category->delete();

       
    }
}
