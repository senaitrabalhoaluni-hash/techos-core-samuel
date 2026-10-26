import { Cliente } from './Cliente.js';
import { Tecnico } from './Tecnico.js';

export class UsuarioFactory {
  static criarUsuario(tipo, dados) {
    if (tipo === 'cliente') {
      return new Cliente(dados.id, dados.nome, dados.email, dados.empresa);
    } else if (tipo === 'tecnico') {
      return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
    }
    throw new Error('Tipo de utilizador inválido.');
  }
}
