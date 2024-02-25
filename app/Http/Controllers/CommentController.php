<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use Illuminate\Support\Facades\Redirect;

class CommentController extends Controller
{
  
    public function index()
    {
        $comments = Comment::all();

        return Inertia('Admin/Comments/Index', ['comments' => $comments]);
    }

   
    public function create()
    {
        return Inertia('Admin/Comments/Create');
    }

  
    public function store(CommentRequest $request)
    {


        $data = $request->validated();

        $comment = Comment::create($data);

       if ($request->hasFile('logo')) {
        $file = $request->file('logo');
        $filename = time() . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('images', $filename, 'public');
        $comment->logo = '/storage/comments/logo/' . $path;
        $comment->save();
    }

        return Redirect::route('admin.comment.index');

        
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
