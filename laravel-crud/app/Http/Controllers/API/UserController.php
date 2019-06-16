<?php

namespace App\Http\Controllers\API;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;

use App\Cliente;

class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, $id)
    {
        //
        $user = User::findOrFail($id);

        return $this->sendResponse($user, 'Resposta efetuada com sucesso');

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $id)
    {
        //

        $input = $request->all();

        $validator = Validator::make($input, [
            'nome' => 'required',
            'cpfcnpj' => 'required',
            'endereco' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'cep' => 'required',
            'telefone' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation error.', $validator->errors());
        } else {

            $user = User::findOrFail($id);
            $user->nome = $input['nome'];
            $user->sobrenome = $input['sobrenome'];
            $user->cpfcnpj = $input['cpfcnpj'];
            $user->endereco = $input['endereco'];
            $user->cidade = $input['cidade'];
            $user->estado = $input['estado'];
            $user->cep = $input['cep'];
            $user->telefone = $input['telefone'];
            $user->celular = $input['celular'];


            $user->save();

            return $this->sendResponse(200, 'Usuario atualizado com sucesso');
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }

    public function showClientsOfUser(User $user, $id) {

        // Show the clients of the user by 'user_id' on clients table
        $user = User::findOrFail($id);

        $clientes = $user->cliente()->select('id', 'nome')->get();

        return response()->json($clientes);

    }

}
