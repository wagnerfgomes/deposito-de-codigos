package model;

public class User {
    protected String nome;
    protected String tipoConta;
    protected double saldo;

    public User(String nome, String tipoConta, double saldo) {
        this.nome = nome;
        this.tipoConta = tipoConta;
        this.saldo = saldo;
    }

    public String getNome() {
        return nome;
    }

    public String getTipoConta() {
        return tipoConta;
    }

    public double getSaldo() {
        return saldo;
    }

    public void recebeValor(double valor) {
        saldo += valor;
    }

    public void transferirValor(double valor) {
        if (saldo >= valor){
            saldo -= valor;
        }else {
            System.out.println("Não há saldo suficiente para fazer essa transferência.");
        }
    }
}
