import model.Cartao;
import view.View;

import java.util.Scanner;

public class principal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.println("Digite o limite do cartão:");
        Cartao cartao = new Cartao(input.nextDouble());

        View.menu(cartao);
    }
}
