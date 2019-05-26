<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Equipamento;
use Laravel\Passport\HasApiTokens;
use App\User;
use App\OS;

class Cliente extends Model
{
    use HasApiTokens;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    // Coloca todos os outros campos da tabela como fillable
    protected $guarded = [];

    // Define nome da tabela
    protected $table = 'cliente';

    // Protege os campos abaixo de retornar nas informações enviadas pelo servidor
    protected $hidden = [
        'admin', 'senha'
    ];

    function equipamento() {
        $this->hasMany(Equipamento::class);
    }

    function user() {
        $this->belongsTo(User::class);
    }

    function OS(){
        $this->hasMany(OS::class);
    }

}
