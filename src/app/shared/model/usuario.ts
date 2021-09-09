export class Usuario {
  id?: string;
  nome?: string;
  cpf?: string;
  idade?: number;
  telefone?: string;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.nome = usuario.nome;
    this.cpf = usuario.cpf;
    this.idade = usuario.idade;
    this.telefone = usuario.telefone;
  }

}
