import { Usuario } from './usuario';
import { Cliente } from './cliente';

export interface DadosRecebidos {
    dadosCliente: Cliente;
    dadosUsuario: Usuario;
}