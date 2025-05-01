import { domInjection } from '../decorators/dom-injecto.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-execução.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacoesServices } from '../services/nogociacoes-services.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    @domInjection('#data')
    private inputData: HTMLInputElement;
    @domInjection('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjection('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesServices();

    constructor() {
        this.negociacoesView.update(this.negociacoes);
    }
    @logarTempoDeExecucao()
    @inspect()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update(
                'Apenas negociações em dias úteis são aceitas'
            );
            return;
        }

        this.negociacoes.adiciona(negociacao);
        console.log();

        this.limparFormulario();
        this.atualizaView();
    }

    private ehDiaUtil(data: Date) {
        return (
            data.getDay() > DiasDaSemana.DOMINGO &&
            data.getDay() < DiasDaSemana.SABADO
        );
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    importarDados(): void {
        this.negociacoesService
            .obterNogociacoesDoDia()
            .then((negociacoesDeHoje) => {
                return negociacoesDeHoje.filter((negociacaoDeHoje) => {
                    return !this.negociacoes
                        .lista()
                        .some((negociacao) =>
                            negociacao.eIgual(negociacaoDeHoje)
                        );
                });
            })
            .then((negociacoesDeHoje) => {
                for (let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes);
            });
    }
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
