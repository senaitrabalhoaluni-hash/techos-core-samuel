import { Usuario } from './Usuario.js';

export class Cliente extends Usuario {
  constructor(id, nome, email, empresa) {
    super(id, nome, email);
    this.empresa = empresa;
  }
}
