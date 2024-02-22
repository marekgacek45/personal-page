<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tech;
use App\Models\Comment;
use App\Models\Project;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

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

   public function services(){
      return Inertia ('Services/Index');
   }


   public function portfolio(){

$categories= Category::all();
$projects= Project::with('categories')->get();


      return Inertia ('Portfolio/Index',['categories'=>$categories,'projects'=>$projects]);
   }

   public function contact(){
      return Inertia ('Contact/Index');
   }
}

