export class GerenciadorOS {
  constructor() {
    if (GerenciadorOS.instancia) {
      return GerenciadorOS.instancia;
    }
    this.ordensServico = [];
    GerenciadorOS.instancia = this;
  }

  adicionarOS(os) {
    this.ordensServico.push(os);
    console.log("[SINGLETON] OS adicionada com sucesso.");
  }

  listarOS() {
    return this.ordensServico;
  }
}
