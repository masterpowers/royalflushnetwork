<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJackCardLineTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jacks', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('link_id')->unsigned();
            $table->foreign('link_id')->references('id')->on('links');
            $table->integer('min_direct')->unsigned();
            $table->boolean('shuffle')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('jacks');
    }
}