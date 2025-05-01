function filtarOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}

function montarSaidaArquivo(listaPalavras) {
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtarOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras duplicadas no parágrafo${
            indice + 1
        }: ${duplicadas}\n`;
    });

    return textoFinal;
}

export { montarSaidaArquivo };
