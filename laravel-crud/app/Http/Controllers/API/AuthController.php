<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //

    public function login(Request $request)
    {

        $user = User::where('email', $request->email)->first();

        if ($user) {

            $idUsuario = $user->id;

            if (\Hash::check($request->password, $user->senha)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token, 'id' => $idUsuario];
                return response($response, 200);
            } else {
                $response = "Sua senha esta correta?";
                return response($response, 401);
            }
        } else {
            $response = 'Usuario não existe.';
            return response($response, 401);
        }
    }

    public function logout(Request $request)
    {

        $token = $request->user()->token();
        $token->revoke();

        $response = 'Voce foi deslogado.';
        return response($response, 200);
    }
}
