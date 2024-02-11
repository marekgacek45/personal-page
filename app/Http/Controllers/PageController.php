<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\Tech;
use Illuminate\Http\Request;

class PageController extends Controller
{
   public function home(){

      $comments = Comment::all();
      $posts = Post::select('id','thumbnail','title')->orderBy('id','desc')->limit(4)->get();


    return Inertia('Home/Index',['comments' => $comments,'posts'=>$posts]);
   }

   public function about(){

$techs = Tech::all();


      return Inertia('About/Index',['techs'=>$techs]);
   }
}
