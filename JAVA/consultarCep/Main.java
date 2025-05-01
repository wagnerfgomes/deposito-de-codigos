import model.Cep;
import service.RequestCep;
import service.RequestCep;
import view.View;

import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException, InterruptedException {
        var sair= "";
        while (!sair.equals("s")) {
            String cep = View.getInput("Digite o CEP: ");
            RequestCep requestCep = new RequestCep(cep);
            Cep cepResponse = requestCep.getJson();
            System.out.println(cepResponse);
            sair = View.getInput("Deseja sair? (s/n): ");
        }
    }
}
