import { Negociacoes } from '../models/negociacoes';
import View from './view.js';

class NegociacoesView extends View<Negociacoes> {
    protected template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                ${model
                    .lista()
                    .map((negociacao) => {
                        return `
                        <tr>
                            <td>${this.formatarData(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                        <sript>alert(oi)</sript>`;
                    })
                    .join('')}
            </tbody>
        </table>
        `;
    }

    private formatarData(data: Date): string {
       return new Intl.DateTimeFormat().format(data);
    }
}

export default NegociacoesView;
