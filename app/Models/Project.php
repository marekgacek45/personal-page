<?php

namespace App\Models;

use App\Models\Category;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function categories()
{
    return $this->belongsToMany(Category::class);
}
    public function technologies()
{
    return $this->belongsToMany(Technology::class,'technology_project');
}

}
