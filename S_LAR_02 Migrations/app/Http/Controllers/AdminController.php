<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\HttpCache\Store;

class AdminController extends Controller
{
    function admin()
    {
        return view('admin.admin');
    }

    function adminCategories()
    {
        $categories = Category::paginate(4);
        return view('admin.categories.adminCategories')->with('categories', $categories);
    }

    function create()
    {
        return view('admin.categories.create');
    }

    function store(Request $request)
    {
        $request->validate(Category::$rules);
        $imageUrl = $request->file('image')->store('categories', ['disk' => 'public']);
        $category = new Category;
        $category->fill($request->post());
        $category['image'] = $imageUrl;
        $category->save();
        return redirect()->route('admin.categories');
    }

    function edit($id)
    {
        $category = Category::findOrFail($id);
        return view('admin.categories.edit', compact('category'));
    }

    function update($id, Request $request)
    {
        $category = Category::findOrFail($id);
        $request->validate(Category::$rules);
        $imageUrl = $request->file('image')->store('categories', ['disk' => 'public']);
        $category->fill($request->post());
        $category['image'] = $imageUrl;
        $category->save();
        return redirect()->route('admin.categories');
    }

    function show($id)
    {
        $category = Category::findOrFail($id);
        return view('admin.categories.show', compact('category'));
    }

    function destroy($id)
    {
        $category = Category::findOrFail($id);
        Category::destroy($id);
        return redirect()->route('admin.categories')->with('success', 'Record has been deleted successfully!');
    }
}