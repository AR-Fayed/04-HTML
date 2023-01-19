<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->id();            
            $table->string('name');
            $table->text('description');
            $table->float('rating');
            $table->integer('rating_count')->default(0);
            $table->string('image');
            $table->unsignedBigInteger('category_id');
            $table->string('size');
            $table->string('color');
            $table->float('price');
            $table->timestamps();

            $table->foreign('category_id')->references('id')->on('categories')->restrictOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
};
