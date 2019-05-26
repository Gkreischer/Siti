<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Passport\HasApiTokens;

use App\Cliente;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, Notifiable;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'senha', 'admin', 'c_senha'
    ];

    /**
     * Marca todos os campos da tabela como fillable
     *
     * @var array
     */
    protected $guarded = [
        
    ];

    // Define nome da tabela
    protected $table = 'user';

    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'admin' => false
    ];

    function cliente() {
        $this->hasMany(Cliente::class);
    }
}
