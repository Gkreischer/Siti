<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    // Define nome da tabela
    protected $table = 'categorias';

    // Coloca todos os outros campos da tabela como fillable
    protected $guarded = [];
}
