package model;

import record.Cepviacep;

public class Cep {
    private String cep;
    private String logradouro;
    private String bairro;
    private String cidade;
    private String uf;

    public Cep(Cepviacep cepviacep) {
        this.cep= cepviacep.cep();
        this.logradouro= cepviacep.logradouro();
        this.bairro= cepviacep.bairro();
        this.cidade= cepviacep.cidade();
        this.uf= cepviacep.uf();
    }

    @Override
    public String toString() {
        return "Endereço: " + logradouro + ", " + bairro + ", " + cep + ", " + cidade + ", " + uf;
    }
}
