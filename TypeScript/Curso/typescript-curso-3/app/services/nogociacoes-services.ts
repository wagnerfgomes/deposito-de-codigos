import { NegociacoesDoDia } from '../interfaces/nogociação-do-dia.js';
import { Negociacao } from '../models/negociacao.js';

export class NegociacoesServices {
    public async obterNogociacoesDoDia(): Promise<Negociacao[]> {
        const url = 'http://localhost:8080/dados';
        const res = await fetch(url);
        const dados = await res.json();
        return dados.map(
            (dado: NegociacoesDoDia) =>
                new Negociacao(new Date(), dado.vezes, dado.montante)
        );
    }
}
