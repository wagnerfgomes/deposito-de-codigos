package br.com.Java.MyMusic.models;

public class Midia {
    private String titulo;
    private int totalReproducao;
    private int totalCurtidas;
    private double totalClassificacao;

    public String getTitulo() {
        return titulo;
    }

    public int getTotalReproducao() {
        return totalReproducao;
    }

    public int getTotalCurtidas() {
        return totalCurtidas;
    }

    public double getTotalClassificacao() {
        return totalClassificacao;
    }

    public void setTotalClassificacao(int totalClassificacao) {
        this.totalClassificacao = totalClassificacao;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public void curtir(){
        this.totalCurtidas++;
    }

    public void Reproduzir() {
        this.totalReproducao++;
    }
    public void classificar(int classificacao){
        this.totalClassificacao += classificacao;
    }
}
