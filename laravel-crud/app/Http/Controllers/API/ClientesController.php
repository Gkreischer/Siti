<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Cliente;
use Validator;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientes = Cliente::all();
        return $this->sendResponse($clientes->toArray(), 'Clientes exibidos com sucesso');


    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'nome' => 'bail|required',
            'cpfcnpj' => 'required',
            'user_id' => 'required',
            'endereco' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'cep' => 'required',
            'telefone' => 'required',
            'email' => 'required',
            'senha' => 'required',
            'c_senha' => 'required|same:senha'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation error.', $validator->errors());
        }

        $cliente = Cliente::create($input);

        return $this->sendResponse($cliente->toArray(), 'Cliente criado.');

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

        $input = $request->all();

        $validator = Validator::make($input, [
            'nome' => 'required',
            'sobrenome' => 'required',
            'cpfcnpj' => 'required',
            'endereco' => 'required',
            'cidade' => 'required',
            'cep' => 'required',
            'telefone' => 'required',
            'email' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation error.', $validator->errors());
        }

        $cliente = Cliente::create($input);

        return $this->sendResponse($cliente->toArray(), 'Cliente criado');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //

        $cliente = Cliente::find($id);

        if(is_null($cliente)) {
            return $this->sendError('Cliente não encontrado');
        }

        return $this->sendResponse($cliente->toArray(), 'Cliente encontrado com sucesso');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cliente $cliente)
    {
        //
        $input = $request->all();

        $validator = Validator::make($input, [
            'nome' => 'required',
            'sobrenome' => 'required',
            'cpfcnpj' => 'required',
            'endereco' => 'required',
            'cidade' => 'required',
            'cep' => 'required',
            'telefone' => 'required',
            'email' => 'required'
        ]);

        if($validator->fails()){
            return $this->sendError('Validation error.', $validator->errors());
        }

        $cliente->nome = $input['nome'];
        $cliente->sobrenome = $input['sobrenome'];
        $cliente->cpfcnpj = $input['cpfcnpj'];
        $cliente->endereco = $input['endereco'];
        $cliente->cidade = $input['cidade'];
        $cliente->cep = $input['cep'];
        $cliente->telefone = $input['telefone'];
        $cliente->email = $input['email'];
        $cliente->save();

        return $this->sendResponse($cliente->toArray(), 'Cliente atualizado com sucesso');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cliente $cliente)
    {
        $cliente->delete();

        return $this->sendResponse($cliente->toArray(), 'Cliente removido com sucesso.');
    }
}
