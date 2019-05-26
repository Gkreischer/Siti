<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\OS;

class Peca extends Model
{
    //

    protected $guarded = [];
    
    function OS() {
        $this->belongsToMany(OS::class);
    }
}
