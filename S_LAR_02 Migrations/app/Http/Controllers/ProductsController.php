<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function adminProducts()
    {
        return view('admin.products.adminProducts')->with('products', Product::paginate(5));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::all();
        return view('admin.products.create', compact('categories'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request -> validate(Product::$rules);
        $imageUrl= $request->file('image')->store('products', ['disk' => 'public']);
        $product = new Product;
        $product->fill($request->post());
        $product['image'] = $imageUrl;
        $product->save();
        //dd($request);
        return redirect()->route('admin.products');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product= Product::findOrFail($id);
        return view('admin.products.show',compact('product'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $categories= Category::all();
        $product= Product::findOrFail($id);
        return view('admin.products.edit',compact(['product','categories']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        $product = Product::findOrFail($id);
        $request -> validate(Product::$rules);
        $imageUrl = $request->file('image')->store('products',['disk'=>'public']);
        $product->fill($request->post());
        $product['image']=$imageUrl;
        $product->save();
        return redirect()->route('admin.products');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        Product::destroy($id);
        return redirect()->route('admin.products');
    }
}
