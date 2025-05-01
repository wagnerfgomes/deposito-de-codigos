package view;

import model.Cartao;
import model.Compra;

import java.util.Collections;
import java.util.Scanner;

public class View {

    static Scanner input = new Scanner(System.in);

    public static void menu(Cartao cartao) {
        System.out.println("O limite atual é de: R$ " + cartao.getLimite());

        int sair = 1;
        while (sair != 0) {

            System.out.println("Digite '0' para sair ou aperte qualquer tecla para continuar:");
            sair = input.nextInt();

            System.out.println("Digite a descrição da compra:");
            String descricao = input.next();

            System.out.println("Digite o valor da compra:");
            double valor = input.nextDouble();

            Compra compra = new Compra(descricao, valor);

            if (cartao.addCompra(compra) == false) {
                sair = 0;
                System.out.println("Saldo insuficiente!");
                System.out.println("COMPRAS REALIZADAS:");
                Collections.sort(cartao.getCompras());
                cartao.getCompras().stream().forEach(c -> {
                    System.out.println(c.getDescricao() + " - " + c.getValor());
                });
            }
        }
    }
}
