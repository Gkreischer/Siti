<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateClienteTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cliente', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('nome')->unique();
            $table->string('cpfcnpj')->unique();
            $table->string('endereco');
            $table->string('cidade');
            $table->string('estado');
            
            $table->string('cep');
            $table->string('obs')->nullable();
            $table->string('telefone');
            $table->string('email')->unique();
            $table->string('senha');
            $table->string('c_senha');

            $table->unsignedBigInteger('user_id')->index();
            $table->foreign('user_id')->references('id')->on('user')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cliente');
    }
}
