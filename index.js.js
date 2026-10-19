// --- PADRÃO SINGLETON: GerenciadorOS ---
class GerenciadorOS {
    constructor() {
        if (GerenciadorOS.instancia) {
            return GerenciadorOS.instancia;
        }
        GerenciadorOS.instancia = this;
        this.listaOS = [];
        console.log("[SINGLETON] Instância única do GerenciadorOS inicializada.");
    }

    adicionarOS(os) {
        this.listaOS.push(os);
        console.log(`[SISTEMA] Ordem de Serviço #${os.id} registrada com sucesso!`);
    }

    listarOS() {
        console.log("[SISTEMA] Lista de OS ativas:");
        console.log(JSON.stringify(this.listaOS, null, 2));
    }
}

// --- POO: CLASSE BASE E SUBCLASSES ---
class Usuario {
    constructor(id, nome, email) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}

class Cliente extends Usuario {
    constructor(id, nome, email, telefone) {
        super(id, nome, email);
        this.telefone = telefone;
    }
}

class Tecnico extends Usuario {
    constructor(id, nome, email, especialidade) {
        super(id, nome, email);
        this.especialidade = especialidade;
    }
}

// --- PADRÃO FACTORY METHOD: UsuarioFactory ---
class UsuarioFactory {
    static criarUsuario(tipo, dados) {
        if (tipo === 'CLIENTE') {
            console.log("[FACTORY] Criando Usuário Tipo: CLIENTE...");
            return new Cliente(dados.id, dados.nome, dados.email, dados.telefone);
        } else if (tipo === 'TECNICO') {
            console.log("[FACTORY] Criando Usuário Tipo: TECNICO...");
            return new Tecnico(dados.id, dados.nome, dados.email, dados.especialidade);
        }
        throw new Error("Tipo de usuário inválido");
    }
}

// --- EXECUÇÃO DO SISTEMA ---
const gerenciador = new GerenciadorOS();

const clienteAna = UsuarioFactory.criarUsuario('CLIENTE', { id: 101, nome: 'Ana', email: 'ana@email.com', telefone: '99999-9999' });
console.log(`> Objeto 'Cliente' criado (ID: ${clienteAna.id}, Nome: ${clienteAna.nome}).`);

const tecnicoCarlos = UsuarioFactory.criarUsuario('TECNICO', { id: 202, nome: 'Carlos', email: 'carlos@email.com', especialidade: 'Hardware' });
console.log(`> Objeto 'Tecnico' criado (ID: ${tecnicoCarlos.id}, Nome: ${tecnicoCarlos.nome}).`);

gerenciador.adicionarOS({
    id: 1,
    cliente: clienteAna.nome,
    tecnico: tecnicoCarlos.nome,
    status: "ABERTA",
    descricao: "Troca de Tela"
});

gerenciador.listarOS();