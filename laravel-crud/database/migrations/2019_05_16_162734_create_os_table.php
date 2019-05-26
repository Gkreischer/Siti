<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('os', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            
            $table->string('problema_relatado');
            $table->string('problema_encontrado');
            
            $table->string('obs')->nullable();

            $table->string('situacao');
            $table->string('fotos')->nullable();

            $table->unsignedBigInteger('cliente_id')->index();
            $table->foreign('cliente_id')->references('id')->on('cliente')->onDelete('cascade');

            $table->unsignedBigInteger('equipamento_id')->index();
            $table->foreign('equipamento_id')->references('id')->on('equipamento')->onDelete('cascade');

            $table->unsignedBigInteger('config_dados_empresa_id')->index();
            $table->foreign('config_dados_empresa_id')->references('id')->on('empresa')->onDelete('cascade');

            $table->unsignedBigInteger('tecnico_id')->index();
            $table->foreign('tecnico_id')->references('id')->on('tecnico')->onDelete('cascade');

            $table->unsignedBigInteger('pecas_id')->index();
            $table->foreign('pecas_id')->references('id')->on('peca')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('os');
    }
}
