<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    public static $rules = [
        'name' => 'required',
        'image' => 'required|mimes:jpg,jpeg,png,bmp|max:2048'
    ];
    protected $guarded = [];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getPrice(){
        return $this->price - $this->price * $this->discount;
    }

}