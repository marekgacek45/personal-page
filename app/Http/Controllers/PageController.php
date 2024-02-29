<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Tech;
use Inertia\Inertia;
use App\Models\Comment;
use App\Models\Project;
use App\Models\Category;
use App\Models\Technology;
use Illuminate\Http\Request;

class PageController extends Controller
{
   public function home(){

      $comments = Comment::all();
      // $posts = Post::select('id','thumbnail','title')->orderBy('id','desc')->limit(4)->get();


    return Inertia('Home/Index',['comments' => $comments]);
   }

   public function about(){

$technologies = Technology::all();




      return Inertia('About/Index',['technologies'=>$technologies]);
   }

   public function services(){
      return Inertia ('Services/Index');
   }


   public function portfolio(){

$categories= Category::all();
$projects= Project::with(['categories','technologies'])->get();


      return Inertia ('Portfolio/Index',['categories'=>$categories,'projects'=>$projects]);
   }

   public function contact(){
      return Inertia ('Contact/Index');
   }
   public function blog(){
      return Inertia ('Blog/Index');
   }

   public function admin (){
      return Inertia('Admin/Dashboard');
  }
}

