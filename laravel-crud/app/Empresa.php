<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\OS;
class Empresa extends Model
{
    //
    protected $guarded = [];

    function OS() {
        $this->hasMany(OS::class);
    }
}
