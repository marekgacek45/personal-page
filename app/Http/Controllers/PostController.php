<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Requests\PostRequest;
use Illuminate\Support\Facades\Redirect;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return Inertia('Admin/Posts/Index', ['posts' => $posts]);
    }



    public function create()
    {
        return view('admin.post.create');
    }

    public function store(PostRequest $request)
    {


        $data = $request->validated();



        $post = Post::create($data);




        return Redirect::route('admin.post.index');
    }

    public function edit(Post $post)
    {

        return Inertia('Admin/Posts/Edit', ['post' => $post]);
    }

    public function update(PostRequest $request, Post $post)
    {

        $data = $request->validated();

        $post->update($data);


        return Redirect::route('admin.post.index');
    }

    public function destroy(Post $post)
    {
        
$post->delete();

       
    }
}
