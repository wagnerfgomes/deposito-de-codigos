package Controller;

import View.View;
import model.User;

import java.util.Scanner;

public class Controller {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        User usuario = new User("Wagner Felipe", "Corrente", 2500);
        View viewUsuario = new View(usuario);

        int operacao = 0;

        while (operacao != 4) {
            viewUsuario.imprimirNaTela();
            System.out.println("Digite uma opção: ");
            operacao = input.nextInt();
            switch (operacao) {
                case 1:
                    System.out.println("Saldo atual é de: R$" + usuario.getSaldo());
                    break;

                case 2:
                    System.out.println("Informe o valor a receber: ");
                    usuario.recebeValor(input.nextDouble());
                    System.out.println("Saldo atualizado R$" + usuario.getSaldo());
                    break;
                case 3:
                    System.out.println("Informe o valor que deseja transferir:");
                    usuario.transferirValor(input.nextDouble());
                    System.out.println("Saldo atualizado R$" + usuario.getSaldo());
                    break;
                case 4:
                    System.out.println("Obrigado!");
                    System.out.println("Finalizando o sistema...");
                    break;
                default:
                    System.out.println("Não foi informado uma opção valida. Tente Novamente.");
                    System.out.println("Reiniciando...");
                    break;
            }
            for (int i = 0; i < 10; i++) {
                System.out.println(" ");
            }
        }
    }
}
