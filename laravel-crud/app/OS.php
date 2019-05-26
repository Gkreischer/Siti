<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Cliente;
use App\Equipamento;
use App\Tecnico;
use App\Peca;
use App\Empresa;

class OS extends Model
{
    //

    protected $guarded = [];
    
    function cliente() {
        $this->belongsTo(Cliente::class);
    }

    function equipamento(){
        $this->belongsTo(Equipamento::class);
    }

    function tecnico() {
        $this->belongsTo(Tecnico::class);
    }

    function peca() {
        $this->hasMany(Peca::class);
    }

    function empresa() {
        $this->belongsTo(Empresa::class);
    }
}
