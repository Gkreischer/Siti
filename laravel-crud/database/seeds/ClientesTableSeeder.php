<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Cliente;

class ClientesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        Cliente::create([
            'nome' => Str::random(10),
            'cpfcnpj' => '12312312312',
            'endereco' => 'Rua',
            'cidade' => 'Cidade',
            'estado' => 'RJ',
            'foto' => 'assets/images/user.png',
            'user_id' => '1',
            'cep' => '23432-123',
            'telefone' => '02222333588',
            'email' => Str::random(3).'@email.com',
            'senha' => bcrypt('123'),
            'c_senha' => bcrypt('')
        ]);
    }
}
