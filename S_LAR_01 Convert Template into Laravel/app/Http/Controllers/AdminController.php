<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    function admin(){
        return view('admin');
    }

    function adminCategories(){
        $categories = Category::all();
        return view('adminCategories')->with('categories',$categories);
    }
}
