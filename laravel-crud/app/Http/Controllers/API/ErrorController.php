<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ErrorController extends Controller
{
    //

    public function authenticationError(){
        return response('Você não está autenticado', 403);
    }
}
