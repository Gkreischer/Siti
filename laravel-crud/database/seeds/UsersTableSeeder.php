<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        User::create([
            'nome' => 'admin',
            'cpfcnpj' => '12312312312',
            'endereco' => 'Rua',
            'cidade' => 'Cidade',
            'estado' => 'RJ',
            'foto' => 'assets/images/user.png',
            'cep' => '23432-123',
            'telefone' => '02222333588',
            'email' => 'admin@email.com',
            'senha' => bcrypt('123'),
            'c_senha' => bcrypt('')
        ]);
    }
}
