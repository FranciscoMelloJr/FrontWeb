import { Cidade } from '../cidades/cidade.model';

export class Estado {
    id: number;
    nome: string;
    uf: string;
    cidades: Cidade [];
}