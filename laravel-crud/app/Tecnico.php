<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\OS;

class Tecnico extends Model
{
    //
    protected $guarded = [];

    function OS() {
        $this->hasMany(OS::class);
    }
}
