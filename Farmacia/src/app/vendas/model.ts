export class Produto {
  id: number;
  nome: string;
  estoque: number;
  valor: number;
  tarja: number;
}

export class Clientes {
  id: number;
  nome: string;
  saldoDevedor: number;
  tipo: number;
}

export class Venda{
  id: number;
  data: Date;
 cliente: Clientes;
 produtos: Produto [] = [];
 quantidade:any;
 valor:any;
}
