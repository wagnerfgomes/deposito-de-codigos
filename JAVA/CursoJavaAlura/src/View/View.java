package View;

import model.User;
import java.util.Scanner;

public class View {

    private User user;

    Scanner input = new Scanner(System.in);

    public View(User user){
        this.user = user;
    }

    public void imprimirNaTela() {
        System.out.printf(
                """
                        ***********************
                        Dados iniciais do cliente:
                        
                        Nome: %s
                        Tipo conta: %s
                        Saldo inicial: R$ %f
                        ***********************
                        
                        Operações
                        
                        1- Consultar saldos
                        2- Receber valor
                        3- Transferir valor
                        4- Sair
                        """, user.getNome(), user.getTipoConta(), user.getSaldo()
        );
    }
}
