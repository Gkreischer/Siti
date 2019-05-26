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

            if (\Hash::check($request->senha, $user->senha)) {
                $token = $user->createToken('Laravel Password Grant Client')->accessToken;
                $response = ['token' => $token];
                return response($response, 200);
            } else {
                $response = "Sua senha esta correta?";
                return response($response, 422);
            }
        } else {
            $response = 'Usuario não existe.';
            return response($response, 422);
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
