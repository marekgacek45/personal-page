<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Requests\CommentRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

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

  
    public function store(Request $request)
    {


       


        $comment = new Comment;
        $comment->link = $request->link;
        $comment->body = $request->body;
        
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('images/comments', $filename, 'public');
            $comment->logo = '/storage/' . $path;
        }

        $comment->save();
        

        return Redirect::route('admin.comment.index');
  
   

   

    }



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        return Inertia('Admin/Comments/Edit', ['comment' => $comment]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,Comment $comment)
    {

        $comment->link = $request->link;
        $comment->body = $request->body;
    
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
            $filename = time() . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('images/comments', $filename, 'public');
            $comment->logo = '/storage/' . $path;
        }
    
        $comment->save();

       
       

        return Redirect::route('admin.comment.index');
    }

 
    public function destroy(Comment $comment)
    {
        $comment->delete();
    }
}
