<?php


namespace App\Http\Controllers\API;


use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Cliente;
use App\User;

class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function registroUsuario(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|unique:user,nome',
            'cpfcnpj' => 'required|unique:user,cpfcnpj',
            'endereco' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'email' => 'required|email|unique:user,email',
            'cep' => 'required',
            'telefone' => 'required',
            'senha' => 'required',
            'c_senha' => 'required|same:senha',
        ]);
        

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $input = $request->all();
        $input['senha'] = bcrypt($input['senha']);
        $input['c_senha'] = $input['senha'];

        $user = User::create($input);
        
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['nome'] =  $user->nome;


        return $this->sendResponse($success, 'Usuario registrado com sucesso.');
    }

    public function registroCliente(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nome' => 'required|unique:cliente,nome',
            'cpfcnpj' => 'required|unique:cliente,cpfcnpj',
            'endereco' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'email' => 'required|email|unique:cliente,email',
            'cep' => 'required',
            'telefone' => 'required',
            'senha' => 'required',
            'c_senha' => 'required|same:senha',
            'user_id' => 'required'
        ]);
        

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }


        $input = $request->all();
        $input['senha'] = bcrypt($input['senha']);

        $user = Cliente::create($input);
        
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['nome'] =  $user->nome;


        return $this->sendResponse($success, 'Cliente registrado com sucesso.');
    }

}