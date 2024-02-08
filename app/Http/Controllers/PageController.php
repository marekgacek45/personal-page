<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class PageController extends Controller
{
   public function home(){

      $comments = Comment::all();
      $posts = Post::select('id','thumbnail','title')->orderBy('id','desc')->limit(5)->get();


    return Inertia('Home/Index',['comments' => $comments,'posts'=>$posts]);
   }
}
