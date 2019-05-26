<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use App\OS;

class Equipamento extends Model
{
    //

    protected $guarded = [];

    function cliente() {
        $this->belongsTo(Cliente::class);
    }

    function OS() {
        $this->hasMany(OS::class);
    }

    
}
