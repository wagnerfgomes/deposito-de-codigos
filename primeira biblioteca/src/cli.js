import fs from 'fs';
import path from 'path';
import tratarErro from './error/funcoesErro.js';
import { contaPalvras } from './index.js';
import { montarSaidaArquivo } from './helper.js';
import { Command } from 'commander';
import chalk from 'chalk';
import { error } from 'console';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option(
        '-d, --destino <string>',
        'caminho da pasta onde salvar o arquivo de resultados'
    )
    .action((options) => {
        const { texto, destino } = options;

        if (!texto || !destino) {
            console.error(
                chalk.red(
                    'ERRO: favor digite um caminho de origem e destino válidos'
                )
            );
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);
        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log(chalk.green('Texto processado'));
        } catch (error) {
            console.log(chalk.red('Erro no processamento', error));
        }
    });

program.parse();

function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => {
        try {
            if (erro) throw erro;
            const resultado = contaPalvras(texto);
            criaESalvaArquivo(resultado, destino);
        } catch (erro) {
            tratarErro(erro);
        }
    });
}

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montarSaidaArquivo(listaPalavras);
    try {
        fs.promises
            .writeFile(arquivoNovo, textoPalavras)
            .then(() => console.log(chalk.green('Arquivo criado')))
            .catch((error) => {
                if (error.code === 'ENOENT') {
                    console.error(
                        chalk.red(
                            'Erro no diretório de destino, favor verificar!'
                        )
                    );
                } else console.error(chalk.red('Ocorreu um Erro: ', error));
            });
    } catch (error) {
        console.log(chalk.red('Deu Erro: ', error));
    }
}
